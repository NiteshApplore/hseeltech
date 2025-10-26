'use client';

import React from 'react';
import Image from 'next/image';

interface MetricCardProps {
  percentage: string;
  trend?: 'up' | 'down';
  title: string;
  subtitle?: string;
  color?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  percentage, 
  trend, 
  title, 
  subtitle,
  color = 'text-[#51A935]' 
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 p-4">
      <div className="flex items-center gap-2">
        <span className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${color}`}>
          {percentage}
        </span>
        {trend && (
          <span className={`text-2xl sm:text-3xl ${color}`}>
            {trend === 'up' ? '↑' : '↓'}
          </span>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium leading-tight max-w-[200px]">
          {title}
        </p>
        {subtitle && (
          <p className="text-xs sm:text-sm text-gray-600">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

const ImpactSection: React.FC = () => {
  return (
    <section className="w-full bg-linear-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-[#51A935] text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3">
            Impact in Numbers
          </p>
          <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[38px] font-bold text-gray-900 leading-tight">
            Real Results. Real
            <br />
            Engagement.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Metrics Grid - Left Side */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 order-2 lg:order-1">
            {/* Top Row */}
            <MetricCard
              percentage="70%"
              trend="up"
              title="Faster onboarding completions"
              color="text-[#51A935]"
            />
            <MetricCard
              percentage="35%"
              trend="up"
              title="higher reinvestment rate"
              color="text-[#51A935]"
            />
            
            {/* Bottom Row */}
            <MetricCard
              percentage="40%"
              trend="up"
              title="Investor engagement rate"
              color="text-[#51A935]"
            />
            <MetricCard
              percentage="90%"
              title="Customer satisfaction score"
              color="text-[#51A935]"
            />
          </div>

          {/* Image - Right Side - ✅ FIXED */}
          <div className="relative w-full aspect-video order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/home/impact-image.jpg"
              alt="AI and human interaction with digital cityscape representing technology engagement"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
