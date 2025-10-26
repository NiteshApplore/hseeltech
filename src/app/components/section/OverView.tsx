"use client";

import Image from "next/image";
import React, { CSSProperties, JSX } from "react";

// Type definitions
interface BulletPoint {
  text: string;
  icon?: string;
}

interface OverviewSectionProps {
  // Section styling
  backgroundColor?: string;
  padding?: string;

  // Badge/Label
  badge?: {
    text: string;
    color?: string;
  };

  // Title
  title: string;
  titleColor?: string;
  titleFontSize?: string;
  titleFontFamily?: string;

  // Description paragraphs
  descriptions: string[];
  descriptionColor?: string;
  descriptionFontSize?: string;
  descriptionFontFamily?: string;

  // Bullet points
  bulletPoints?: BulletPoint[];
  bulletPointsHeading?: string;
  bulletIcon?: string;
  bulletTextColor?: string;
  bulletFontSize?: string;
  bulletFontFamily?: string;

  // Image
  image?: {
    src: string;
    alt: string;
    width?: string;
    height?: string;
    className?: string;
  };

  // Layout options
  reverse?: boolean; // Switch image and text positions
  gap?: string;
  maxWidth?: string;

  // Custom styles
  customStyles?: CSSProperties;
}

export default function OverviewSection({
  // Section styling
  backgroundColor = "bg-white",
  padding = "pt-10",

  // Badge/Label
  badge,

  // Title
  title,
  titleColor = "text-gray-900",
  titleFontSize = "text-[42px]",
  titleFontFamily = "Helvetica, Arial, sans-serif",

  // Description paragraphs
  descriptions = [],
  descriptionColor = "text-gray-600",
  descriptionFontSize = "text-[18px]",
  descriptionFontFamily = "Inter, system-ui, sans-serif",

  // Bullet points
  bulletPoints = [],
  bulletPointsHeading,
  bulletIcon,
  bulletTextColor = "text-gray-700",
  bulletFontSize = "text-[16px]",
  bulletFontFamily = "Inter, system-ui, sans-serif",

  // Image
  image,

  // Layout options
  reverse = false,
  gap = "gap-16",
  maxWidth = "max-w-7xl",

  // Custom styles
  customStyles = {},
}: OverviewSectionProps): JSX.Element {
  // Badge
  const renderBadge = () =>
    badge ? (
      <span
        className="font-medium text-sm tracking-wide text-purple-500 mb-6 inline-block"
        style={{
          fontFamily: descriptionFontFamily,
          marginBottom: "20px",
        }}
      >
        {badge.text}
      </span>
    ) : null;

  // Title
  const renderTitle = () => (
    <h2
      className={`${titleColor} font-bold ${titleFontSize} mt-4`}
      style={{
        fontFamily: titleFontFamily,
        lineHeight: "1.2",
      }}
    >
      {title}
    </h2>
  );

  // Descriptions
  const renderDescriptions = () =>
    descriptions.map((description, index) => (
      <p
        key={index}
        className={`mb-2 lg:mb-4 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed ${
          index > 0 ? "mt-4" : ""
        }`}
        style={{
          fontFamily: descriptionFontFamily,
          fontWeight: "400",
          color: "rgb(50, 50, 50)",
          fontSize: "clamp(14px, 2vw, 16px)",
        }}
      >
        {description}
      </p>
    ));

  // Bullet points
  const renderBulletPoints = () => {
    if (!bulletPoints.length) return null;

    return (
      <div className="space-y-4">
        {bulletPointsHeading && (
          <h3
            className="text-lg font-semibold text-gray-900 mb-3"
            style={{ fontFamily: bulletFontFamily }}
          >
            {bulletPointsHeading}
          </h3>
        )}
        <div className="space-y-3">
          {bulletPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              {(point.icon || bulletIcon) && (
                <Image
                  src={point.icon || bulletIcon || "/images/home/bulleticon.png"}
                  alt="Bullet icon"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              )}
              <span
                className={`${bulletTextColor} ${bulletFontSize}`}
                style={{ fontFamily: bulletFontFamily }}
              >
                {point.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Image
  const renderImage = () =>
    image ? (
      <div className="flex justify-center lg:justify-end">
        <div
          className={`relative rounded-2xl overflow-hidden shadow-lg ${image.className || ""}`}
          style={{
            width: image.width || "540px",
            height: image.height || "504px",
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
      </div>
    ) : null;

  // Content block
  const renderContent = () => (
    <div className="space-y-8">
      <div>
        {renderBadge()}
        {renderTitle()}
        <br />
        {descriptions.length > 0 && (
          <div className="space-y-4">{renderDescriptions()}</div>
        )}
      </div>
      {renderBulletPoints()}
    </div>
  );

  return (
    <section className={`${padding} ${backgroundColor}`} style={customStyles}>
      <div className={`${maxWidth} mx-auto px-6 py-2`}>
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 ${gap} items-center mb-12`}
        >
          {!reverse ? (
            <>
              {renderContent()}
              {renderImage()}
            </>
          ) : (
            <>
              {renderImage()}
              {renderContent()}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export type { OverviewSectionProps, BulletPoint };
