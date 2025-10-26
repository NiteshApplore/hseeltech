"use client";
import { useState } from "react";

const testimonials = [
  {
    quote: "SquadXP helped us scale our development team in record time. The engineers they provided integrated seamlessly with our team and delivered exceptional results.",
    name: "Sarah ",
    role: "CTO, TechVenture Inc."
  },
  {
    quote: "SquadXP helped us scale our development team in record time. The engineers they provided integrated seamlessly with our team and delivered exceptional results.",
    name: "Sarah Johnson",
    role: "CTO, TechVenture Inc."
  },
  {
    quote: "SquadXP helped us scale our development team in record time. The engineers they provided integrated seamlessly with our team and delivered exceptional results.",
    name: " Johnson",
    role: "CTO, TechVenture Inc."
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % testimonials.length);
  const prevSlide = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full bg-[#111827] lg:py-20 pb-20 px-4 sm:px-[60px] lg:px-[100px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#23C1A0] font-semibold mb-2 text-base">Testimonials</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
            Trusted Across Industries
          </h2>
          <p className="text-[#C2C8D0] text-base">
            We&apos;ve helped startups and enterprises scale across multiple domains
          </p>
        </div>

        {/* Mobile slider */}
        <div className="lg:hidden relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="
                  border border-[#3E75F4]
                  bg-[#111827]
                  rounded-xl
                  min-w-full
                  max-w-[500px]
                  p-8
                  text-white
                  transition-shadow
                  hover:shadow-xl
                  snap-center
                "
              >
                <p className="mb-8 text-base leading-relaxed text-[#F6F8FA]">{t.quote}</p>
                
                <div>
                  <p className="font-bold text-white text-lg mb-1">{t.name}</p>
                  <p className="text-[#98A4B7] text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-[#111827] border border-[#3E75F4] text-[#3E75F4] hover:bg-[#23304A] transition"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-2 w-2 rounded-full ${current === idx ? "bg-[#3E75F4]" : "bg-gray-500"}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-[#111827] border border-[#3E75F4] text-[#3E75F4] hover:bg-[#23304A] transition"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Desktop row with scrollbar */}
        <div className="hidden lg:block">
          <div className="overflow-x-auto scrollbar-custom pb-4">
            <div className="flex gap-10 font-inter">
              {testimonials.map((t) => (
                <div
                  key={t.name} 
                  className="
                    border border-[#3E75F4]
                    bg-[#111827]
                    rounded-xl
                    flex-shrink-0
                    w-[400px]
                    p-8
                    text-white
                    transition-shadow
                    hover:shadow-xl
                  "
                >
                  <p className="mb-8 text-base leading-relaxed text-[#F6F8FA]">{t.quote}</p>
                  <div>
                    <p className="font-bold text-white text-lg mb-1">{t.name}</p>
                    <p className="text-[#98A4B7] text-sm">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
       
      </div>
      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #3E75F4;
          border-radius: 10px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #23C1A0;
        }
        
        .scrollbar-custom {
          scrollbar-width: thin;
          scrollbar-color: #3E75F4 #1f2937;
        }
      `}</style>
    </section>
  );
}