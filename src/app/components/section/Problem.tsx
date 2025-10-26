"use client";
import { Clock, DollarSign, ShieldAlert, TrendingDown } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      id: 1,
      icon: <Clock className="w-6 h-6 text-[#E93E3A]" />,
      text: "3–6 months average hiring cycle",
      bg: "bg-[#FFEAEA]",
    },
    {
      id: 2,
      icon: <DollarSign className="w-6 h-6 text-[#F7931A]" />,
      text: "High recruitment costs + overheads",
      bg: "bg-[#FFF4E5]",
    },
    {
      id: 3,
      icon: <ShieldAlert className="w-6 h-6 text-[#FF6F61]" />,
      text: "Quality inconsistency with freelancers",
      bg: "bg-[#FFEAEA]",
    },
    {
      id: 4,
      icon: <TrendingDown className="w-6 h-6 text-[#EBA83A]" />,
      text: "HR bandwidth wasted on sourcing",
      bg: "bg-[#FFF4E5]",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <p className="text-[#E93E3A] font-semibold text-sm uppercase mb-2">
          The Problem
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] mb-12">
          Traditional Hiring is Broken
        </h2>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {problems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center text-center px-6 py-10"
            >
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${item.bg}`}
              >
                {item.icon}
              </div>
              <p className="text-[17px] font-medium text-[#111827] leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
