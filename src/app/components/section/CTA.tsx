"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CircleAlert } from "lucide-react";
import Image from "next/image";
import LiveKitRoom from "../livekit-room";
import AhmedPopup from "./AhmedPopup";

interface CTASectionData {
  title: string;
  subtitle: string;
  showDecorations?: boolean;
  showFeatureList?: boolean;
  customStyles?: React.CSSProperties;
}

interface CTASectionProps {
  data: CTASectionData;
}

export default function CTA({ data }: CTASectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();

  // 🔹 Voice demo state
  const [showRoom, setShowRoom] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [agentStatus, setAgentStatus] = useState<
    "connecting" | "ready" | "disconnected"
  >("disconnected");

  const serverUrl =
    process.env.NEXT_PUBLIC_LIVEKIT_URL ||
    "wss://caller-test-agent-7891c8vk.livekit.cloud";

  const roomName = `ahmed-demo-room-${Date.now()}`;
  const participantName = "customer-" + Math.floor(Math.random() * 10000);

  // 🔹 Fetch token & start demo
  const handleBookDemo = async () => {
    try {
      const agentData = {
        _id: "68f8764925ae520d036a45ed",
        agentName: "Ahmed",
        channels: ["voice"],
        languages: ["en"],
        client: "68dba7a02111bf8ff10bd387",
        workspace: "demo-workspace",
        voice: {
          llmProvider: { model: "gpt-4.1-mini", providerName: "openai" },
          voiceProvider: {
            model: "sonic-2",
            providerName: "cartesia",
            voiceId: "faf0731e-dfb9-4cfc-8119-259a79b27e12",
          },
          transcriberProvider: { providerName: "deepgram", model: "nova-3" },
          firstMessageMode: "AI_SPEAKS_FIRST",
          firstMessage:
            "Hi, this is Ahmed, your Voice Investment Assistant. How can I help you today?",
        },
      };

      const res = await fetch("/api/livekit/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          room: roomName,
          username: participantName,
          agentId: agentData._id,
          agentName: agentData.agentName,
          agentChannels: agentData.channels,
          agentLanguages: agentData.languages,
          agentVoice: agentData.voice,
          clientId: agentData.client,
          workspaceId: agentData.workspace,
          agentPrompt: agentData.voice.firstMessage,
        }),
      });

      const data = await res.json();
      if (data.token) {
        setToken(data.token);
        setShowRoom(true);
        setAgentStatus("connecting");
      } else {
        console.error("No token returned:", data);
      }
    } catch (err) {
      console.error("Failed to get token:", err);
    }
  };

  const handleDisconnect = () => {
    setShowRoom(false);
    setToken(null);
    setAgentStatus("disconnected");
  };

  // 🔹 Fade-in animation for CTA
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const fadeElements = sectionRef.current?.querySelectorAll(".fade-in");
    fadeElements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const { title, subtitle, showDecorations = true, customStyles = {} } = data;

  return (
    <section className="py-10 lg:py-20 bg-gray-50" style={customStyles}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="relative">
          <div
            className="relative rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900"
            style={{ minHeight: "320px" }}
          >
            <div className="relative z-10 flex items-center min-h-[320px]">
              {/* Left side content */}
              <div className="p-8 sm:p-12 lg:p-16 w-full lg:w-[800px]">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-white mb-4 leading-tight">
                  {title}
                </h2>
                <p className="text-gray-300 text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed">
                  {subtitle}
                </p>

                {/* 🔹 Replaced Button with Voice Demo Button */}
                {!showRoom && (
                  <button
                    onClick={handleBookDemo}
                    className="mt-6 px-8 py-3 bg-white text-black text-[14px] lg:text-[16px] font-medium rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Try Talking to Ahmed
                  </button>
                )}

                {/* 🔹 LiveKit Room */}
                {showRoom && token && (
                  <LiveKitRoom
                    token={token}
                    serverUrl={serverUrl}
                    roomName={roomName}
                    participantName={participantName}
                    onAgentStatus={(status) => {
                      console.log("Agent status:", status);
                      setAgentStatus(status);
                      setIsSpeaking(status === "ready");
                    }}
                    onError={(error) =>
                      console.error("LiveKit error:", error)
                    }
                  />
                )}
              </div>

              {/* Right image */}
              <div className="relative hidden lg:flex items-center justify-center flex-1 min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-l from-teal-500/20 via-emerald-500/20 to-transparent h-full" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/home/robot-image.png"
                    alt="AI Robot"
                    className="object-contain scale-150"
                    loading="lazy"
                    width={1000}
                    height={1000}
                    style={{ maxHeight: "900px", width: "auto" }}
                  />
                </div>
              </div>
            </div>

            {/* 🔹 Optional gradient decorations */}
            {showDecorations && (
              <>
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl" />
              </>
            )}
          </div>
        </div>
      </div>

      {/* 🔹 Ahmed Popup */}
      <AhmedPopup
        isVisible={agentStatus !== "disconnected"}
        isSpeaking={isSpeaking}
        onDisconnect={handleDisconnect}
      />
    </section>
  );
}

export type { CTASectionData };
