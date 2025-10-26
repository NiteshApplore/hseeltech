"use client";
// Import relevant Lucide icons for each role
import {
  FaAddressBook,
  FaBrain,
  FaCloud,
  FaLayerGroup,
  FaPhone,
  FaShieldAlt,
  FaUser,
  FaUserCog,
} from "react-icons/fa";

const talentList = [
  {
    id: 1,
    icon: (
      <FaUser className="w-6 h-6 text-[#3E75F4] bg-[#E9F0FF] rounded p-1" />
    ),
    title: "Software Developers",
    subtitle: "Frontend, Backend, Full-Stack",
  },
  {
    id: 2,
    icon: (
      <FaPhone className="w-6 h-6 text-[#3E75F4] bg-[#E9F0FF] rounded p-1" />
    ),
    title: "Mobile App Developers",
    subtitle: "iOS, Android, Cross-platform",
  },
  {
    id: 3,
    icon: (
      <FaCloud className="w-6 h-6 text-[#3E75F4] bg-[#E9F0FF] rounded p-1" />
    ),
    title: "DevOps & Cloud Engineers",
    subtitle: "Subtitle Text",
  },
  {
    id: 4,
    icon: (
      <FaBrain className="w-6 h-6 text-[#3E75F4] bg-[#E9F0FF] rounded p-1" />
    ),
    title: "Data Scientists & AI/ML Engineers",
    subtitle: "Subtitle Text",
  },
  {
    id: 5,
    icon: (
      <FaLayerGroup className="w-6 h-6 text-[#3E75F4] bg-[#E9F0FF] rounded p-1" />
    ),
    title: "UI/UX Designers",
    subtitle: "Subtitle Text",
  },
  {
    id: 6,
    icon: (
      <FaShieldAlt className="w-6 h-6 text-[#3E75F4] bg-[#E9F0FF] rounded p-1" />
    ),
    title: "QA & Automation Testers",
    subtitle: "Subtitle Text",
  },
  {
    id: 7,
    icon: (
      <FaAddressBook className="w-6 h-6 text-[#3E75F4] bg-[#E9F0FF] rounded p-1" />
    ),
    title: "Product Managers",
    subtitle: "Subtitle Text",
  },
  {
    id: 8,
    icon: (
      <FaUserCog className="w-6 h-6 text-[#3E75F4] bg-[#E9F0FF] rounded p-1" />
    ),
    title: "Product Managers",
    subtitle: "Subtitle Text",
  },
];

const Services = () => {
  return (
    <section className="w-full bg-[#F5F8FE] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[#3E75F4] font-semibold text-sm uppercase mb-2">
          Services
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#131A2A] mb-2">
          The Talent We Provide
        </h2>
        <p className="mb-10 text-[#687592] text-base max-w-2xl mx-auto">
          Access pre-vetted professionals ready to scale your business.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {talentList.map(({ id, icon, title, subtitle }) => (
            <div
              key={id}
              className="flex items-center p-6 bg-white rounded-xl shadow-sm gap-4 min-h-[96px]"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#E9F0FF] rounded-xl">
                {icon}
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-[#131A2A]">
                  {title}
                </h3>
                <p className="text-sm text-[#8E9AB0] font-normal">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <button className="bg-[#3E75F4] hover:bg-[#2A65E7] text-white text-base font-semibold px-7 py-3 rounded-lg transition-colors">
            Request Profiles in Your Required Skillset &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
