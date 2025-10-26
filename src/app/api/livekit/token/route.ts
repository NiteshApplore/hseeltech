import { NextResponse } from "next/server";
import { AccessToken } from "livekit-server-sdk";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      room,
      username,
      agentId,
      agentName,
      agentPrompt,
      agentVoice,
      agentChannels,
      agentLanguages,
      agentEmail,
      agentChats,
      clientId,
      workspaceId,
    } = body;

    if (!room || !username) {
      return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
    }

    const apiKey = process.env.LIVEKIT_API_KEY;

    console.log(apiKey)
    const apiSecret = process.env.LIVEKIT_API_SECRET;

    if (!apiKey || !apiSecret) {
       console.log(apiKey)
      return NextResponse.json(
        { error: "LiveKit credentials missing in environment variables" },
        { status: 500 }
      );
    }

    // Metadata for agent and client
    const metadata = {
      roomName: room,
      participantName: username,
      timestamp: new Date().toISOString(),
      agentId,
      agentName,
      agentPrompt,
      agentVoice,
      agentChannels,
      agentLanguages,
      agentEmail,
      agentChats,
      clientId,
      workspaceId,
    };

    const at = new AccessToken(apiKey, apiSecret, {
      identity: username,
      metadata: JSON.stringify(metadata),
    });

    at.addGrant({ room, roomJoin: true, canPublish: true, canSubscribe: true });
    const token = await at.toJwt();

    return NextResponse.json({ token });
  } catch (error: any) {
    console.error("Error generating LiveKit token:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
