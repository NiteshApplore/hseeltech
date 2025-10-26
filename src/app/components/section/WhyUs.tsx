"use client";
import { FaAward, FaHandsHelping, FaThLarge, FaCoins, FaUserTie } from "react-icons/fa";

const benefits = [
  {
    icon: FaAward,
    text: "Top 5% pre-vetted talent only",
  },
  {
    icon: FaHandsHelping,
    text: "SLA-driven engagements for reliability",
  },
  {
    icon: FaThLarge,
    text: "Flexible scaling (hire 1 to 20+)",
  },
  {
    icon: FaCoins,
    text: "Cost-effective vs. in-house",
  },
  {
    icon: FaUserTie,
    text: "Dedicated account manager & 24/7 support",
  }
];

const WhyUs = () => {
  return (
    <div className="w-full bg-blue-50 py-20 px-8 sm:px-20">
      <div className="mb-10">
        <p className="text-[#3E75F4] font-semibold text-sm uppercase text-start mb-3">
          Why Us
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
          Why Leading Enterprises<br />Choose SquadXP
        </h2>
      </div>

      <div className="flex flex-col gap-7">
        {benefits.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-5">
            <span className="bg-black rounded-full w-11 h-11 flex justify-center items-center">
              <Icon className="text-blue-400 w-7 h-7" />
            </span>
            <span className="text-black text-lg font-semibold font-inter">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
