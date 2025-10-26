"use client"; // Required if you're using the Next.js App Router

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useVideo } from "@/context/video-context";
import { industryUrls } from "@/lib/utils";

export default function VideoSection() {
  const [activeIndustry, setActiveIndustry] = useState("Real Estate");
  const { setIsVideoActive } = useVideo();

  useEffect(() => {
    setIsVideoActive(false);
  }, [setIsVideoActive]);

  const renderAboutSection = () => (
    <div
      className="relative overflow-hidden bg-black py-12 lg:py-8"
      style={{ minHeight: "400px", height: "auto" }}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center grow pt-4">
            {/* ===== LEFT COLUMN (TEXT) ===== */}
            <div className="space-y-4">
              {/* Badge */}
              <div className="inline-block">
                <span
                  className="text-[#BDFFA8] bg-clip-text text-[14px] lg:text-[16px]  font-bold"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  About Us
                </span>
              </div>

              {/* Heading */}
              <h2
                className="text-white font-bold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[38px]"
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: "bold",
                  lineHeight: "1.2",
                  letterSpacing: "2%",
                }}
              >
                Smarter Conversations. Simpler Investing.
              </h2>

              {/* Mobile Image */}
              <div className="lg:hidden relative flex items-center justify-center my-6">
                <div className="bg-black rounded-3xl p-4 relative overflow-hidden w-full max-w-sm mx-auto">
                  <Image
                    src="/images/home/about-image.jpg"
                    alt="AI-powered call automation platform showcasing voice AI technology for business communication and customer engagement"
                    width={500}
                    height={192}
                    className="w-full h-48 object-cover rounded-2xl"
                    priority={false}
                  />
                </div>
              </div>

              {/* Paragraph */}
              <p
                className="text-white"
                style={{
                  fontFamily: "Inter, Arial, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.6",
                  fontSize: "clamp(14px, 2vw, 16px)",
                }}
              >
                Hseeltech now brings Voice AI technology to real-estate
                investing — enabling natural, two-way conversations between
                investors and the platform. From onboarding to portfolio
                updates, every interaction feels effortless, human, and locally
                familiar.
              </p>

              {/* Bullet Points */}
              <div className="space-y-4">
                {[
                  "Human-like bilingual voice (English + Arabic)",
                  "Smart intent recognition for investor queries",
                  "Full integration with Hseeltech’s app ecosystem",
                  "Secure, compliant, and scalable",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{ width: "20px", height: "20px" }}
                    >
                      <Image
                        src="/images/home/bulleticon.png"
                        alt="Bullet point icon"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </div>
                    <span
                      className="text-[14px] lg:text-[16px]"
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontFamily: "Inter, Arial, sans-serif",
                        fontWeight: "400",
                        letterSpacing: "0%",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 lg:mt-8">
                {/* Mobile button */}
                <Link href="https://www.rmmcc.com/" className="lg:hidden">
                  <button
                    className="bg-[#52A936] text-white font-semibold text-[14px] hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-4 py-3"
                    style={{
                      width: "190px",
                      height: "42px",
                      borderRadius: "30px",
                      border: "none",
                      cursor: "pointer",
                      marginTop: "8px",
                      boxShadow: "0 8px 25px rgba(163, 86, 247, 0.3)",
                      fontFamily: "Helvetica, Arial, sans-serif",
                      letterSpacing: "0.5px",
                    }}
                    aria-label="Discover more about HseelTech AI call automation platform and company overview"
                  >
                    Learn More
                  </button>
                </Link>

                {/* Desktop button */}
                <Link
                  href="https://www.rmmcc.com/"
                  className="hidden lg:inline-block"
                >
                  <button
                    className="bg-[#52A936] text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    style={{
                      width: "190px",
                      height: "35px",
                      borderRadius: "30px",

                      border: "none",
                      cursor: "pointer",
                      marginTop: "8px",
                      boxShadow: "0 8px 25px rgba(163, 86, 247, 0.3)",
                      fontFamily: "Helvetica, Arial, sans-serif",
                      letterSpacing: "0.5px",
                      fontSize: "16px",
                    }}
                    aria-label="Discover more about HseelTech  AI call automation platform and company overview"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* ===== RIGHT COLUMN (IMAGE) ===== */}
            <div className="hidden lg:flex relative items-stretch justify-center h-full">
              <div className="bg-black rounded-3xl p-6 relative overflow-hidden h-full flex items-center w-full">
                <Image
                  src="/images/home/about-image.jpg"
                  alt="AI-powered call automation platform showcasing voice AI technology for business communication and customer engagement"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <div className="relative z-50 bg-white">{renderAboutSection()}</div>;
}
