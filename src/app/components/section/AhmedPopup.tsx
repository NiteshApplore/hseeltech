"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface AhmedPopupProps {
  isVisible: boolean;
  isSpeaking: boolean;
  onDisconnect: () => void;
}

export default function AhmedPopup({
  isVisible,
  isSpeaking,
  onDisconnect,
}: AhmedPopupProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-center"
        >
          {/* Outer wrapper allows cross to overflow */}
          <div className="relative">
            {/* Circular Ahmed avatar */}
            <div
              className={`relative rounded-full shadow-2xl border border-gray-200 overflow-hidden w-24 h-24 cursor-pointer ${
                isSpeaking ? "animate-pulse ring-4 ring-green-300" : ""
              }`}
            >
              <Image
                src="/images/home/ahmed-avatar.jpg"
                alt="Ahmed Voice Assistant"
                fill
                className="object-cover"
              />

              {/* Status label */}
              <p className="absolute bottom-1 w-full text-center text-[10px] text-white font-medium bg-black/50 rounded-b-full">
                {isSpeaking ? "Speaking..." : "Listening..."}
              </p>
            </div>

            {/* Disconnect Button — now clearly visible */}
            <button
              onClick={onDisconnect}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition shadow-md"
              title="End Conversation"
              style={{
                zIndex: 20, // ensures it appears above the avatar
              }}
            >
              <X size={14} strokeWidth={2} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
