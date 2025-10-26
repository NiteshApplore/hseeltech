"use client";
import Image from "next/image";

const TrustedBusinessAndPartners = () => {
  const logos = [
    { src: "/images/home/emaar-image.png", alt: "IndianMart" },
    { src: "/images/home/saudi-image.png", alt: "Dehaat" },
    { src: "/images/home/emaar-image.png", alt: "KALYAN Jewellers" },
    { src: "/images/home/urdu-image.png", alt: "CirclePe" },
    { src: "/images/home/emaar-image.png", alt: "IndianMart" },
    { src: "/images/home/saudi-image.png", alt: "Dehaat" },
    { src: "/images/home/emaar-image.png", alt: "KALYAN Jewellers" },
    { src: "/images/home/urdu-image.png", alt: "CirclePe" },
   
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
          width: fit-content;
        }

        .logo-container {
          display: flex;
          flex-shrink: 0;
        }
      `}</style>

      <section className="lg:pb-20 py-20 lg:py-0 lg:h-[210px] bg-white lg:flex lg:items-center overflow-hidden">
        <div className="w-full">
          {/* Section Title */}
          <div className="text-center mb-8 lg:mb-12">
            <h2
              className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900"
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: "bold",
                lineHeight: "1.2",
              }}
            >
              Trusted By Leading Enterprises
            </h2>
          </div>

          {/* Animated Logo Carousel */}
          <div className="relative overflow-hidden">
            <div className="animate-marquee">
              {/* First set of logos */}
              <div className="logo-container items-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8">
                {logos.map((logo, index) => (
                  <div key={`first-${index}`} className="flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={180}
                      height={60}
                      className="object-contain h-auto w-auto opacity-100"
                    />
                  </div>
                ))}
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="logo-container items-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8">
                {logos.map((logo, index) => (
                  <div key={`second-${index}`} className="flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={180}
                      height={60}
                      className="object-contain h-auto w-auto opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedBusinessAndPartners;