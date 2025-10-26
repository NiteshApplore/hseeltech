'use client';

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { Room, RoomEvent, ConnectionState, Track, RemoteParticipant } from 'livekit-client';

export interface LiveKitRoomRef {
  connect: () => Promise<void>;
  disconnect: () => void;
  toggleMute: () => void;
  isConnected: boolean;
  isMuted: boolean;
}

interface LiveKitRoomProps {
  token: string;
  serverUrl: string;
  roomName: string;
  participantName: string;
  onConnect?: () => void;
  onDisconnect?: () => void;
  onAgentStatus?: (status: 'connecting' | 'ready' | 'disconnected') => void;
  onError?: (error: string) => void;
  muted?: boolean;
}

const LiveKitRoom = forwardRef<LiveKitRoomRef, LiveKitRoomProps>(({ 
  token, 
  serverUrl, 
  roomName,
  participantName,
  onConnect, 
  onDisconnect,
  onAgentStatus,
  onError,
  muted = false
}, ref) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [agentConnected, setAgentConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const roomRef = useRef<Room | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const onConnectRef = useRef(onConnect);
  const onDisconnectRef = useRef(onDisconnect);
  const onAgentStatusRef = useRef(onAgentStatus);
  const onErrorRef = useRef(onError);

  // Update refs when props change
  useEffect(() => {
    onConnectRef.current = onConnect;
    onDisconnectRef.current = onDisconnect;
    onAgentStatusRef.current = onAgentStatus;
    onErrorRef.current = onError;
  }, [onConnect, onDisconnect, onAgentStatus, onError]);

  // Auto-connect when token is provided (like dashboard)
  useEffect(() => {
    if (!token || !serverUrl) return;

    const connectToRoom = async () => {
      try {
        setError(null);
        onAgentStatusRef.current?.('connecting');

        // Create room instance
        const room = new Room({
          adaptiveStream: true,
          dynacast: true,
        });

        roomRef.current = room;

        // Set up event listeners
        room.on(RoomEvent.Connected, () => {
          console.log('Connected to LiveKit room');
          setIsConnected(true);
          onConnectRef.current?.();
        });

        room.on(RoomEvent.Disconnected, () => {
          console.log('Disconnected from LiveKit room');
          setIsConnected(false);
          setAgentConnected(false);
          onDisconnectRef.current?.();
          onAgentStatusRef.current?.('disconnected');
        });

        room.on(RoomEvent.ParticipantConnected, (participant: RemoteParticipant) => {
          console.log('Participant connected:', participant.identity);

          // Check if this is the agent
          if (participant.identity.includes('agent-')) {
            console.log('Agent connected! Waiting for audio tracks...');
            onAgentStatusRef.current?.('connecting');
          }
        });

        room.on(RoomEvent.ParticipantDisconnected, (participant: RemoteParticipant) => {
          console.log('Participant disconnected:', participant.identity);

          // Check if this is the agent
          if (participant.identity.includes('agent-')) {
            console.log('Agent disconnected!');
            setAgentConnected(false);
            onAgentStatusRef.current?.('disconnected');

            // Clean up audio element
            if (audioElementRef.current) {
              audioElementRef.current.remove();
              audioElementRef.current = null;
            }
          }
        });

        room.on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
          console.log('Track subscribed:', track.kind, participant?.identity);

          if (track.kind === Track.Kind.Audio && participant?.identity?.includes?.('agent-')) {
            console.log('Agent audio track subscribed');
            setAgentConnected(true);
            onAgentStatusRef.current?.('ready');

            // Create audio element for agent audio
            if (track.mediaStreamTrack) {
              const audioElement = document.createElement('audio');
              audioElement.srcObject = new MediaStream([track.mediaStreamTrack]);
              audioElement.autoplay = true;
              audioElement.volume = 1.0;
              document.body.appendChild(audioElement);
              audioElementRef.current = audioElement;
            }
          }
        });

        room.on(RoomEvent.TrackUnsubscribed, (track, publication, participant) => {
          console.log('Track unsubscribed:', track.kind, participant?.identity);

          if (track.kind === Track.Kind.Audio && participant?.identity?.includes?.('agent-')) {
            console.log('Agent audio track unsubscribed');
            setAgentConnected(false);
            onAgentStatusRef.current?.('connecting');

            // Clean up audio element
            if (audioElementRef.current) {
              audioElementRef.current.remove();
              audioElementRef.current = null;
            }
          }
        });

        // Connect to the room
        await room.connect(serverUrl, token);

        // Enable microphone after connection
        if (room.state === ConnectionState.Connected) {
          await room.localParticipant.setMicrophoneEnabled(!muted);
          setIsMuted(muted);
        }

      } catch (err: any) {
        console.error('Failed to connect to LiveKit:', err);
        const errorMsg = err.message || 'Failed to connect to room';
        setError(errorMsg);
        onErrorRef.current?.(errorMsg);
        onAgentStatusRef.current?.('disconnected');
      }
    };

    connectToRoom();
  }, [token, serverUrl, muted]);

  useImperativeHandle(ref, () => ({
    connect: async () => {
      // Auto-connect is handled by useEffect, this is just for compatibility
      console.log('Connect called, but auto-connect is handled by useEffect');
    },

    disconnect: () => {
      if (roomRef.current) {
        roomRef.current.disconnect();
        roomRef.current = null;
      }

      // Clean up audio element
      if (audioElementRef.current) {
        audioElementRef.current.remove();
        audioElementRef.current = null;
      }

      setIsConnected(false);
      setAgentConnected(false);
    },

    toggleMute: async () => {
      if (roomRef.current && isConnected) {
        const newMutedState = !isMuted;
        await roomRef.current.localParticipant.setMicrophoneEnabled(!newMutedState);
        setIsMuted(newMutedState);
      }
    },

    isConnected,
    isMuted
  }));

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (roomRef.current) {
        roomRef.current.disconnect();
        roomRef.current = null;
      }
      if (audioElementRef.current) {
        audioElementRef.current.remove();
        audioElementRef.current = null;
      }
    };
  }, []);

  return (
    <div className="livekit-room">
      {error && (
        <div className="text-red-500 text-sm mb-2">
          Error: {error}
        </div>
      )}
    </div>
  );
});

LiveKitRoom.displayName = 'LiveKitRoom';

export default LiveKitRoom;