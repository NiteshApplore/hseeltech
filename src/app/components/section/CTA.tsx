"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CircleAlert } from "lucide-react";
import Image from "next/image";

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
  const router = useRouter();

  const {
    title,
    subtitle,
    showDecorations = true,
    showFeatureList = true,
    customStyles = {},
  } = data;

  const renderFeatureList = () => {
    if (!showFeatureList) return null;

    return (
      <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-3 mt-4 justify-center sm:justify-start lg:justify-start">
        <div
          className="flex items-center text-gray-400 text-[10px] sm:text-xs lg:text-sm gap-2"
          style={{
            fontFamily: "Inter, Arial, sans-serif",
            fontWeight: "400",
          }}
        >
          <CircleAlert className="h-4 w-4" />
          <span className="text-[10px] lg:text-[13px]">
            Average response time: under 12 hours.
          </span>
        </div>
      </div>
    );
  };

  const renderButtons = () => (
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <button
        onClick={() => router.push("https://www.rmmcc.com/")}
        className="px-8 py-3 bg-white text-black text-[14px] lg:text-[16px] font-medium rounded-full hover:bg-gray-100 transition-colors"
        style={{ fontFamily: "Inter, Arial, sans-serif" }}
      >
        Try Voice AI Demo
      </button>
    
    </div>
  );

  const renderDecorations = () => {
    if (!showDecorations) return null;

    return (
      <>
        {/* Subtle gradient overlays */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl" />
      </>
    );
  };

  return (
    <section
      className="py-10 lg:py-20 bg-gray-50"
      style={customStyles}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="relative">
          {/* Main CTA Container */}
          <div
            className="relative rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900"
            style={{ minHeight: "320px" }}
          >
            <div className="relative z-10 flex items-center min-h-[320px]">
              {/* Left Content */}
              <div className="p-8 sm:p-12 lg:p-16 w-full lg:w-[800px] flex-shrink-0">
                <h2
                  className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: "Inter, Arial, sans-serif" }}
                >
                  {title}
                </h2>
                <p
                  className="text-gray-300 text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed"
                  style={{ fontFamily: "Inter, Arial, sans-serif" }}
                >
                  {subtitle}
                </p>

                {renderButtons()}
                
              </div>

              {/* Right Image */}
            <div className="relative hidden lg:flex items-center justify-center flex-1 min-h-[400px]">
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-l from-teal-500/20 via-emerald-500/20 to-transparent h-full" />

  {/* Image container */}
  <div className="relative z-10 w-full h-full flex items-center justify-center">
    <Image
      src="/images/home/robot-image.png"
      alt="AI Robot"
      className="object-contain scale-180"
      loading="lazy"
      width={1000}
      height={1000}
      style={{
        maxHeight: "900px",
        width: "auto",
      }}
    />
  </div>
</div>
            </div>  

            {renderDecorations()}
          </div>
        </div>
      </div>
    </section>
  );
}

export type { CTASectionData };