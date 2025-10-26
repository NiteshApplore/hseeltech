'use client';

import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 sm:p-8 md:p-10 transition-all duration-300 group lg:border-b border-r border-gray-200 last:border-r-0 [&:nth-child(2)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 [&:last-child]:border-b-0">
      {/* Icon Container */}
      <div className="mb-4 sm:mb-6 transform transition-transform duration-300">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
  );
};

interface ConversationPowerSectionProps {
  badge?: string;
  title: string;
  features: Array<{
    iconType: 'onboarding' | 'availability' | 'localized' | 'insights';
    title: string;
    description: string;
  }>;
}

const ConversationPowerSection: React.FC<ConversationPowerSectionProps> = ({
  badge = "Why Voice AI for Real Estate",
  title,
  features,
}) => {
  // Icon components
  const getIcon = (type: string) => {
    switch (type) {
      case 'onboarding':
        return (
          <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="28" fill="#86efac" opacity="0.3" />
            <path d="M20 28c0-2 1-4 3-4h8c2 0 3 2 3 4v12c0 2-1 4-3 4h-8c-2 0-3-2-3-4V28z" fill="#22c55e" />
            <path d="M36 32c0-2 1-4 3-4h8c2 0 3 2 3 4v8c0 2-1 4-3 4h-8c-2 0-3-2-3-4v-8z" fill="#22c55e" />
            <circle cx="26" cy="18" r="4" fill="#22c55e" />
            <circle cx="42" cy="22" r="3" fill="#22c55e" />
          </svg>
        );
      case 'availability':
        return (
          <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="28" fill="#86efac" opacity="0.3" />
            <circle cx="32" cy="32" r="18" stroke="#22c55e" strokeWidth="3" fill="none" />
            <path d="M32 20v12l8 5" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
            <circle cx="48" cy="18" r="6" fill="#22c55e" />
            <path d="M46 18l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'localized':
        return (
          <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="28" fill="#86efac" opacity="0.3" />
            <rect x="20" y="24" width="10" height="14" rx="2" fill="#22c55e" />
            <rect x="34" y="24" width="10" height="14" rx="2" fill="#22c55e" />
            <path d="M25 42v4M39 42v4M20 46h24" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
            <circle cx="25" cy="28" r="1.5" fill="white" />
            <circle cx="39" cy="28" r="1.5" fill="white" />
            <path d="M22 32h6M36 32h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 'insights':
        return (
          <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="28" fill="#86efac" opacity="0.3" />
            <path d="M20 40l8-12 8 8 8-12" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="20" cy="40" r="3" fill="#22c55e" />
            <circle cx="28" cy="28" r="3" fill="#22c55e" />
            <circle cx="36" cy="36" r="3" fill="#22c55e" />
            <circle cx="44" cy="24" r="3" fill="#22c55e" />
            <circle cx="50" cy="18" r="4" fill="#22c55e" stroke="white" strokeWidth="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-linear-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-green-600 text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">
            {badge}
          </p>
          <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[38px] font-bold text-gray-900 leading-tight max-w-4xl mx-auto px-4">
            {title}
          </h2>
        </div>

        {/* Features Grid with + Border Pattern */}
        <div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={getIcon(feature.iconType)}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConversationPowerSection;
