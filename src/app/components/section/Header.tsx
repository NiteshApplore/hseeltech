"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import {
  Home,
  Phone,
  ShoppingCart,
  Heart,
  DollarSign,
  Shield,
  Plane,
  GraduationCap,
  Bed,
  Truck,
  Link as LinkIcon,
  PhoneCallIcon,
  RefreshCwOffIcon,
  TrendingUpIcon,
  UsersIcon,
  BarChart2Icon,
  UserPlusIcon,
  BellIcon,
  Calendar1Icon,
  MessageSquareIcon,
  CreditCardIcon,
  ShoppingCartIcon,
  DollarSignIcon,
  PhoneIcon,
  ChevronDown,
} from "lucide-react";
import { useVideo } from "@/context/video-context";
import MobileNavbar from "./MobileNavbar";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  // const router = useRouter();
  const { isVideoActive } = useVideo();

  // ✅ Smooth scroll navigation for internal anchors
  // const handleNavigation = (href: string) => {
  //   if (href.includes("#")) {
  //     const [path, hash] = href.split("#");
  //     const targetPath = path || "/";
  //     router.push(targetPath);

  //     const scrollToElement = (attempts = 0) => {
  //       const element = document.getElementById(hash);
  //       if (element) {
  //         element.scrollIntoView({ behavior: "smooth" });
  //       } else if (attempts < 5) {
  //         setTimeout(() => scrollToElement(attempts + 1), 200 * (attempts + 1));
  //       }
  //     };
  //     setTimeout(() => scrollToElement(), 200);
  //   } else {
  //     router.push(href);
  //   }
  // };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 p-4 transition-all duration-500 ease-in-out ${
        isVideoActive
          ? "opacity-0 pointer-events-none -translate-y-4"
          : "opacity-100 pointer-events-auto translate-y-0"
      }`}
    >
      <nav className="mx-auto max-w-7xl">
        <div className="bg-white/95 backdrop-blur-md rounded-full border border-slate-200/50 shadow-lg bg-linear-to-r from-blue-50/30 to-violet-50/30">
          <div className="flex justify-between items-center px-4 md:px-8 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/home/header-logo.png"
                alt="HseelTech Logo"
                width={100}
                height={40}
                className="object-contain"
              />
            </Link>

            {/* Center Nav */}
            <div className="hidden lg:flex items-center justify-center gap-x-10 flex-1 text-[16px] text-black font-normal">
              <Link
                href="/"
                className={`hover:text-[#52A936] transition-colors ${
                  isActive("/") ? "text-[#52A936]" : "text-black"
                }`}
              >
                Home
              </Link>

              {/* About Dropdown */}

              <Link
                href="https://www.rmmcc.com/"
                className={`hover:text-[#52A936] transition-colors ${
                  isActive("https://www.rmmcc.com/")
                    ? "text-[#52A936]"
                    : "text-black"
                }`}
              >
                Impact
              </Link>
              <Link
                href="https://www.rmmcc.com/"
                className={`hover:text-[#52A936] transition-colors ${
                  isActive("https://www.rmmcc.com/")
                    ? "text-[#52A936]"
                    : "text-black"
                }`}
              >
                How it works
              </Link>

              {/* Solutions Dropdown */}

              {/* Integrations Dropdown */}

              <Link
                href="https://www.rmmcc.com/"
                className={`hover:text-[#52A936] transition-colors ${
                  isActive("https://www.rmmcc.com/")
                    ? "text-[#52A936]"
                    : "text-black"
                }`}
              >
                Why Voice AI
              </Link>
              <Link
                href="https://www.rmmcc.com/"
                className={`hover:text-[#52A936] transition-colors ${
                  isActive("https://www.rmmcc.com/")
                    ? "text-[#52A936]"
                    : "text-black"
                }`}
              >
                Use Cases
              </Link>
            </div>

            {/* CTA + Mobile */}
            <div className="flex items-center">
              <Link
                href="https://www.rmmcc.com/"
                className="hidden md:block"
              >
                <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-3 font-medium shadow-md transition-all duration-300">
                  Book a Demo
                </Button>
              </Link>
              <Link href="https://www.rmmcc.com/" className="md:hidden">
                <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-3 py-1.5 text-xs font-medium shadow-md transition-all">
                  Book a Demo
                </Button>
              </Link>

              <MobileNavbar isVideoActive={isVideoActive} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
