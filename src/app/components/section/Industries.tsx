"use client";
import {
  FaChartLine, // FinTech & Banking
  FaServer, // SaaS & Enterprise Software
  FaShoppingCart, // E-commerce & Retail
  FaBriefcaseMedical, // Healthcare & Life Sciences
  FaIndustry, // Manufacturing & Supply Chain
  FaCar, // Automotive & Mobility
  FaPhotoVideo, // Media & Entertainment
  FaNetworkWired, // Telecom & IoT
} from "react-icons/fa";

const industries = [
  { icon: FaChartLine, label: "FinTech & Banking" },
  { icon: FaServer, label: "SaaS & Enterprise Software" },
  { icon: FaShoppingCart, label: "E-commerce & Retail" },
  { icon: FaBriefcaseMedical, label: "Healthcare & Life Sciences" },
  { icon: FaIndustry, label: "Manufacturing & Supply Chain" },
  { icon: FaCar, label: "Automotive & Mobility" },
  { icon: FaPhotoVideo, label: "Media & Entertainment" },
  { icon: FaNetworkWired, label: "Telecom & IoT" },
];

const Industries = () => {
  return (
    <section className="pt-8 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-2">
          <span className="text-[#23C1A0] text-sm font-semibold tracking-wide">
            Industries
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#131A2A] mb-2">
          Trusted Across Industries
        </h2>
        <p className="mb-10 text-[#687592] text-base max-w-2xl mx-auto">
          We’ve helped startups and enterprises scale across multiple domains.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-gray-200 overflow-hidden border-b border-gray-200">
          {industries.slice(0, 4).map(({ icon: Icon, label }) => (
            <div key={label} className="p-6 sm:p-10">
              <div className="flex justify-center mb-6">
                <Icon className="w-10 h-10 text-[#2FA6E6]" />
              </div>
              <h3
                className="text-[20px] font-bold text-black mb-2"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                {label}
              </h3>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-gray-200 overflow-hidden">
          {industries.slice(4, 8).map(({ icon: Icon, label }) => (
            <div key={label} className="p-6 sm:p-10">
              <div className="flex justify-center mb-6">
                <Icon className="w-10 h-10 text-[#2FA6E6]" />
              </div>
              <h3
                className="text-[20px] font-bold text-black mb-2"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                {label}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <button className="bg-[#3E75F4] hover:bg-[#2A65E7] text-white text-base font-semibold px-7 py-3 rounded-lg transition-colors">
           See How We Can Scale Teams in Your Industry &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
