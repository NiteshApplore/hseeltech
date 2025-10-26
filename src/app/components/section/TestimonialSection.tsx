'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Define types
interface Testimonial {
  id: string;
  stars: number;
  title: string;
  quote: string;
  author: {
    name: string;
    role: string;
    location?: string;
    image: string;
  };
}

interface TestimonialsCarouselProps {
  className?: string;
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ className = "" }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const testimonialsData: Testimonial[] = [
    {
      id: "testimonial-1",
      stars: 5,
      title: "The Best in Business",
      quote: "It felt like talking to a real advisor — clear, calm, and genuinely helpful.",
      author: {
        name: "Retail Investor",
        role: "Retail Investor",
        location: "Riyadh",
        image: "/images/home/testimonial-author.jpg"
      }
    },
    {
      id: "testimonial-2",
      stars: 5,
      title: "Game Changer for Our Team",
      quote: "HseelTech's Voice AI has transformed how we handle customer queries. It's like having a 24/7 support team that never gets tired.",
      author: {
        name: "Sarah Johnson",
        role: "Customer Success Manager",
        location: "Dubai",
        image: "/images/home/testimonial-author.jpg"
      }
    },
    {
      id: "testimonial-3",
      stars: 5,
      title: "Incredible ROI",
      quote: "Within the first month, we saw a 40% increase in lead conversions. The AI handles qualification perfectly and passes hot leads to our sales team.",
      author: {
        name: "Michael Chen",
        role: "Sales Director",
        location: "Singapore",
        image: "/images/home/testimonial-author.jpg"
      }
    },
    {
      id: "testimonial-4",
      stars: 5,
      title: "Natural & Professional",
      quote: "Our customers love the natural conversation flow. They often don't realize they're talking to an AI until we tell them!",
      author: {
        name: "Fatima Al-Rashid",
        role: "Operations Manager",
        location: "Riyadh",
        image: "/images/home/testimonial-author.jpg"
      }
    },
    {
      id: "testimonial-5",
      stars: 5,
      title: "Seamless Integration",
      quote: "The setup was incredibly smooth. Within days, we had our Voice AI handling hundreds of calls with perfect accuracy.",
      author: {
        name: "David Williams",
        role: "IT Director",
        location: "London",
        image: "/images/home/testimonial-author.jpg"
      }
    }
  ];

  const nextCard = (): void => {
    setActiveIndex((prev: number) => (prev + 1) % testimonialsData.length);
  };

  const prevCard = (): void => {
    setActiveIndex((prev: number) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const handleDotClick = (index: number): void => {
    setActiveIndex(index);
  };

  // Star component
  const StarIcon: React.FC<{ filled?: boolean; className?: string }> = ({ 
    filled = true, 
    className = "" 
  }) => (
    <svg
      className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${className}`}
      fill={filled ? "#D1D5DB" : "none"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill={filled ? "#D1D5DB" : "transparent"}
        stroke={filled ? "none" : "#D1D5DB"}
        strokeWidth="2"
      />
    </svg>
  );

  // Shared card component
  const TestimonialCard: React.FC<{ testimonial: Testimonial; isMobile?: boolean }> = ({ 
    testimonial, 
    isMobile = false 
  }) => (
    <>
      {/* Stars */}
      <div className="flex gap-1 sm:gap-2 mb-6 sm:mb-8">
        {[...Array(testimonial.stars)].map((_, i) => (
          <StarIcon key={i} filled={true} />
        ))}
      </div>

      {/* Decorative Line */}
      <div className="w-full h-px bg-blue-400/30 mb-6 sm:mb-8" />

      {/* Title */}
      <h3 className={`font-bold text-gray-900 mb-4 sm:mb-6 ${
        isMobile ? 'text-xl sm:text-2xl' : 'text-2xl lg:text-3xl xl:text-4xl'
      }`}>
        {testimonial.title}
      </h3>

      {/* Quote */}
      <blockquote className={`text-gray-800 leading-relaxed mb-6 sm:mb-8 flex-grow ${
        isMobile ? 'text-base sm:text-lg' : 'text-lg lg:text-xl xl:text-2xl'
      }`}>
        "{testimonial.quote}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-3 sm:gap-4 mt-auto pt-4">
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gray-300">
          <Image
            src={testimonial.author.image}
            alt={testimonial.author.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 56px, 64px"
          />
        </div>
        <div>
          <p className={`font-bold text-gray-900 ${
            isMobile ? 'text-base sm:text-lg' : 'text-lg lg:text-xl'
          }`}>
            {testimonial.author.name}
          </p>
          <p className={`text-gray-700 ${
            isMobile ? 'text-sm sm:text-base' : 'text-base lg:text-lg'
          }`}>
            {testimonial.author.location}
          </p>
        </div>
      </div>
    </>
  );

  return (
    <section
      id="testimonials"
      className={`py-12 sm:py-16 lg:py-20 relative z-30 bg-gray-50 ${className}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#52A936] font-medium text-sm tracking-wide uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-gray-900 font-bold mb-4 sm:mb-6 leading-tight text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
            What Our Clients Say
          </h2>
          <p className="text-black/80 max-w-4xl mx-auto leading-relaxed font-normal text-sm sm:text-base lg:text-lg">
            Don&apos;t just take our word for it — hear from businesses that have transformed
            their customer engagement with Hseel Tech&apos;s Voice AI.
          </p>
        </div>

        {/* Mobile View - Single Card */}
        <div className="block lg:hidden">
          <div className="relative">
            {/* Mobile Navigation Dots */}
            <div className="flex justify-center gap-2 mb-6 flex-wrap">
              {testimonialsData.map((_, index: number) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-purple-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile Card */}
            <div className="relative overflow-hidden">
              <motion.div
                key={`mobile-${activeIndex}`}
                className="rounded-3xl shadow-lg p-6 sm:p-8 mx-auto max-w-md flex flex-col"
                style={{
                  background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
                  minHeight: "450px"
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <TestimonialCard testimonial={testimonialsData[activeIndex]} isMobile={true} />
              </motion.div>
            </div>

            {/* Mobile Arrow Controls */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                type="button"
                onClick={prevCard}
                className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <span className="text-gray-600 text-sm font-medium">
                {activeIndex + 1} of {testimonialsData.length}
              </span>
              <button
                type="button"
                onClick={nextCard}
                className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet View - Stacked Carousel */}
        <div className="hidden lg:block">
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <button
              type="button"
              onClick={prevCard}
              className="absolute left-4 xl:left-8 2xl:left-16 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Cards Container */}
            <div 
              className="relative flex items-center justify-center"
              style={{
                width: "clamp(600px, 80vw, 1000px)",
                height: "500px"
              }}
            >
              {testimonialsData.map((testimonial: Testimonial, index: number) => {
                const offset: number = (index - activeIndex + testimonialsData.length) % testimonialsData.length;
                let x: string | number = 0;
                let scale: number = 1;
                let zIndex: number = 0;
                let opacity: number = 1;

                if (offset === 0) {
                  // Center card
                  x = 0;
                  scale = 1;
                  zIndex = 50;
                  opacity = 1;
                } else if (offset === 1) {
                  // Right card
                  x = "clamp(220px, 25vw, 300px)";
                  scale = 0.85;
                  zIndex = 40;
                  opacity = 0.6;
                } else if (offset === testimonialsData.length - 1) {
                  // Left card
                  x = "clamp(-300px, -25vw, -220px)";
                  scale = 0.85;
                  zIndex = 40;
                  opacity = 0.6;
                } else {
                  // Cards further behind
                  x = 0;
                  scale = 0.7;
                  zIndex = 10;
                  opacity = 0;
                }

                return (
                  <motion.div
                    key={`desktop-${testimonial.id}`}
                    className="absolute rounded-3xl shadow-xl p-8 lg:p-10 flex flex-col"
                    style={{
                      width: "clamp(400px, 45vw, 650px)",
                      minHeight: "450px",
                      background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
                      zIndex
                    }}
                    animate={{ 
                      x: typeof x === 'string' ? x : x,
                      scale, 
                      opacity
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <TestimonialCard testimonial={testimonial} isMobile={false} />
                  </motion.div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={nextCard}
              className="absolute right-4 xl:right-8 2xl:right-16 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
