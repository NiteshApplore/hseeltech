'use client';

import React from 'react';
import Image from 'next/image';

interface AIFeatureSectionProps {
  badge?: string;
  title: string;
  description: string[];
  image: string;
  imageAlt: string;
  backgroundColor?: string;
  textColor?: string;
}

const AIFeatureSection: React.FC<AIFeatureSectionProps> = ({
  badge = "Voice AI",
  title,
  description,

  imageAlt,
  backgroundColor = "bg-gradient-to-br from-[#0d3d2d] via-[#162811] to-[#0d3d2d]",
  textColor = "text-white",
}) => {
  return (
    <section className={`w-full ${backgroundColor} py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Image - Left Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={'/images/home/voice-ai-human.jpg'}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                priority
              />
              
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 via-transparent to-cyan-500/10" />
            </div>

            {/* Decorative Glow Elements */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
          </div>

          {/* Content - Right Side */}
          <div className={`${textColor} order-1 lg:order-2 space-y-6`}>
            {/* Badge */}
            <div className="inline-block">
              <span className="text-sm sm:text-base md:text-lg font-semibold text-green-400  tracking-wide">
                {badge}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[38px] font-bold leading-tight">
              {title}
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 sm:space-y-5">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatureSection;
