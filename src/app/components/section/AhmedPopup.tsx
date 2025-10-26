"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface AhmedPopupProps {
  isVisible: boolean;
  isSpeaking: boolean;
  onDisconnect: () => void;
}

export default function AhmedPopup({ isVisible, isSpeaking, onDisconnect }: AhmedPopupProps) {
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
          {/* Circular container */}
          <div
            className={`relative rounded-full bg-white shadow-2xl border border-gray-200 flex flex-col items-center justify-center p-4 w-24 h-24 cursor-pointer ${
              isSpeaking ? "animate-pulse ring-4 ring-green-300" : ""
            }`}
          >
            {/* Ahmed Avatar */}
            <img
              src="/images/home/ahmed-avatar.png"
              alt="Ahmed Voice Assistant"
              className="w-12 h-12 rounded-full"
            />

            {/* Status */}
            <p className="text-xs mt-2 text-gray-700 font-medium">
              {isSpeaking ? "Speaking..." : "Listening..."}
            </p>

            {/* Disconnect Button */}
            <button
              onClick={onDisconnect}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
              title="End Conversation"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
