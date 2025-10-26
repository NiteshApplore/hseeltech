"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import LiveKitRoom from "../livekit-room";
import AhmedPopup from "./AhmedPopup";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showRoom, setShowRoom] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [agentStatus, setAgentStatus] = useState<"connecting" | "ready" | "disconnected">("disconnected");

  const serverUrl =
    process.env.NEXT_PUBLIC_LIVEKIT_URL ||
    "wss://caller-test-agent-7891c8vk.livekit.cloud";

  const roomName = `ahmed-demo-room-${Date.now()}`;
  const participantName = "customer-" + Math.floor(Math.random() * 10000);

  // 🔹 Fetch token and show Ahmed popup
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
      }
    } catch (err) {
      console.error("Failed to get token:", err);
    }
  };

  // 🔹 Handle agent disconnect
  const handleDisconnect = () => {
    setShowRoom(false);
    setToken(null);
    setAgentStatus("disconnected");
  };

  // 🔹 Animate Hero fade-in
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 z-10"
      style={{ paddingTop: "80px" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-[#E6F3E2] mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center fade-in">
        <h1 className="font-bold mb-6" style={{ color: "#212121" }}>
          <div className="text-5xl md:text-6xl mb-2">Talk to Ahmed —</div>
          <div className="text-3xl md:text-4xl font-bold">
            Your Voice Investment Assistant
          </div>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
          Experience how voice can simplify real estate investing. Ahmed answers your
          questions, explains opportunities, and guides you through every step — all by voice.
        </p>

        {!showRoom && (
          <Button
            className="bg-[#52A936] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all px-6 py-3 text-lg"
            onClick={handleBookDemo}
          >
            Try Talking to Ahmed
          </Button>
        )}

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
            onError={(error) => console.error("LiveKit error:", error)}
          />
        )}
      </div>

      {/* Ahmed Popup */}
      <AhmedPopup
        isVisible={agentStatus !== "disconnected"}
        isSpeaking={isSpeaking}
        onDisconnect={handleDisconnect}
      />
    </section>
  );
}
