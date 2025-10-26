"use client";

import React from "react";
import Image from "next/image";

interface Step {
  stepNumber: string;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  badge: string;
  mainTitle: string;
  subtitle?: string;
  steps: Step[];
  ctaTitle: string;
  ctaDescription: string;
  // ctaButtonText: string;
  ctaImage: string;
  ctaImageAlt: string;
  onCtaClick: () => void;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  badge,
  mainTitle,
  subtitle,
  steps,
  ctaTitle,
  ctaDescription,
  // ctaButtonText,
  ctaImage,
  ctaImageAlt,
  onCtaClick,
}) => {
  return (
    <section className="w-full bg-[#C9F0BD] lg:py-16 py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-green-600 text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">
            {badge}
          </p>
          <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[38px] font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            {mainTitle}
          </h2>
          {subtitle && (
            <p className="mt-4 sm:mt-6 sm:ext-[14px] md:text-[15px] lg:text-[16px] text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          {/* Timeline Steps - Left Side */}
          <div className="relative flex flex-col gap-10">
            {/* Vertical Line */}
            <div className="absolute left-[13px] top-5 bottom-5 w-[2px] bg-green-400 hidden sm:block pointer-events-none" />

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex gap-4 sm:gap-6 group max-w-[470px]"
              >
                {/* Step Indicator */}
                <div className="shrink-0 relative z-10">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-500 shadow-sm transition-transform group-hover:scale-110" />
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <p className="text-green-600 text-sm sm:text-base font-semibold">
                    Step {step.stepNumber}
                  </p>
                  <h3 className="text-[22px] font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-[16px] text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card - Right Side */}
          <div className="flex h-full">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col w-full p-10">
              {/* Card Header */}
              <div className="mb-4">
                <h3 className="text-[24px] font-bold text-gray-900">
                  {ctaTitle}
                </h3>
                <p className="sm:ext-[14px] md:text-[15px] lg:text-[16px] text-gray-700 leading-relaxed">
                  {ctaDescription}
                </p>
              </div>

              {/* Image */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-white">
                <Image
                  src={ctaImage}
                  alt={ctaImageAlt}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 600px"
                />
              </div>

              {/* CTA Button */}
              {/* <div className="pt-6"> */}
                {/* <button
                  onClick={onCtaClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 sm:py-5 px-6 rounded-full transition-all duration-300 flex items-center justify-between gap-3 text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl group"
                >
                  <span>{ctaButtonText}</span>
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
