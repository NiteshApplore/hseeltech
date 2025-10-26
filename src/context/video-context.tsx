"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface VideoContextType {
  isVideoActive: boolean;
  setIsVideoActive: (active: boolean) => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export function VideoProvider({ children }: { children: ReactNode }) {
  const [isVideoActive, setIsVideoActive] = useState(false);

  return (
    <VideoContext.Provider value={{ isVideoActive, setIsVideoActive }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
}