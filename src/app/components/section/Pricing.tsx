"use client";
import { FaUsers, FaCode, FaRegClipboard } from "react-icons/fa";

const models = [
  {
    icon: FaUsers,
    text: "Dedicated Teams (Monthly)",
  },
  {
    icon: FaCode,
    text: "On-Demand Developers (Hourly)",
  },
  {
    icon: FaRegClipboard,
    text: "Project-Based Engagements",
  }
];

const Pricing = () => {
  return (
    <div className="w-full bg-[#111827] p-20 px-8 sm:px-20 flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <p className="text-[#3E75F4] font-semibold text-sm uppercase">
            Pricing
          </p>
          <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
            Flexible Engagement<br />Models
          </h2>
        </div>
        <div className="bg-[#08cfe6] rounded-2xl px-7 py-8 flex flex-col gap-7 mb-5">
          {models.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-4">
              <Icon className="text-white w-7 h-7" />
              <span className="text-white text-base font-semibold">{text}</span>
            </div>
          ))}
        </div>
        <button className="w-full mt-1 py-4 rounded-2xl text-white font-semibold text-base bg-[#3E75F4] flex items-center justify-center gap-3 hover:bg-blue-600 transition">
          Request a Custom Quote
          <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default Pricing;
