'use client';

import React from 'react';
import Image from 'next/image';

interface UseCase {
  title: string;
  description: string;
  highlighted?: boolean;
}

interface VoiceAIActionSectionProps {
  badge?: string;
  mainTitle: string;
  useCases: UseCase[];
  image: string;
  imageAlt: string;
  connectorIndex?: number;
}

const VoiceAIActionSection: React.FC<VoiceAIActionSectionProps> = ({
  badge = "Use Cases",
  mainTitle,
  useCases,
  image,
  imageAlt,
  connectorIndex = 1,
}) => {
  return (
    <section className="w-full bg-gray-100 py-10 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#52A936] text-sm sm:text-base md:text-lg font-semibold mb-3 tracking-wide">
            {badge}
          </p>
          <h2 className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-bold text-gray-900 leading-tight max-w-3xl mx-auto">
            {mainTitle}
          </h2>
        </div>

        {/* Grid Layout */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch"
        >
          {/* Left Section — Use Cases */}
          <div className="flex flex-col justify-between bg-white border border-gray-200 shadow-md rounded-2xl p-6 sm:p-8 h-full">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group p-4 mb-4 last:mb-0 transition-all duration-300 border-b last:border-b-0 cursor-pointer hover:bg-green-50"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900 group-hover:text-green-700">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Section — Image */}
          <div className="relative flex items-center justify-center h-full">
            <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                priority
              />
            </div>

            {/* Decorative Elements */}
            <div className="hidden lg:block absolute -top-8 -right-8 w-32 h-32 bg-green-400/20 rounded-full blur-2xl" />
            <div className="hidden lg:block absolute -bottom-8 -left-8 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div> 
    </section>
  );
};

export default VoiceAIActionSection;
