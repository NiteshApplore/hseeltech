"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  Menu,
  X,
  Home,
  DollarSign,
  Heart,
  ShoppingCart,
  Shield,
  Plane,
  GraduationCap,
  Phone,
  Bed,
  Truck,
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
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

interface MobileNavbarProps {
  isVideoActive?: boolean;
}

export default function MobileNavbar({
  isVideoActive = false,
}: MobileNavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  // Reset menu on route change
  useEffect(() => {
    
    
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isMobileMenuOpen]);

  // Handle navigation (with hash support)
  const handleNavigation = (href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      router.push(path || "https://www.rmmcc.com/");
      const scrollToElement = (attempts = 0) => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < 5) {
          setTimeout(() => scrollToElement(attempts + 1), 200 * (attempts + 1));
        }
      };
      setTimeout(() => scrollToElement(), 300);
    } else {
      router.push(href);
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    router.push("https://www.rmmcc.com/");
    setIsMobileMenuOpen(false);
  };

  const toggleSection = (sectionKey: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  // Data

  return (
    <>
      {/* Toggle Button */}
      <button
        className={`lg:hidden ml-2 md:ml-4 p-3 rounded-full hover:bg-gray-100/80 transition-all duration-200 z-250 relative ${
          isVideoActive ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-240"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Menu */}
          <div
            className={`fixed top-0 right-0 w-80 max-w-[90vw] h-screen bg-white shadow-2xl z-241 transform transition-transform duration-300 "
            }`}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <button onClick={handleLogoClick} aria-label="Go to homepage">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/home/header-logo.png"
                    alt=" HseelTech Logo"
                    width={100}
                    height={40}
                    className="object-contain"
                  />
                </Link>
              </button>
            </div>

            {/* Scrollable menu content */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {/* Home */}
              <Link
                href="https://www.rmmcc.com/"
                className={`block px-4 py-4 rounded-xl font-medium ${
                  isActive("https://www.hseeltech.com")
                    ? "text-[#52A936]"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
         
              <Link
                href="https://www.hseeltech.com"
                className={`block px-4 py-4 rounded-xl font-medium ${
                  isActive("https://www.hseeltech.com")
                    ? " text-[#52A936]"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Impact
              </Link>
              <Link
                href="https://www.hseeltech.com"
                className={`block px-4 py-4 rounded-xl font-medium ${
                  isActive("https://www.hseeltech.com")
                    ? " text-[#52A936]"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it works
              </Link>
              
              <Link
                href="https://www.hseeltech.com"
                className={`block px-4 py-4 rounded-xl font-medium ${
                  isActive("https://www.hseeltech.com")
                    ? " text-[#52A936]"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Voice AI
              </Link>
              
              <Link
                href="https://www.hseeltech.com"
                className={`block px-4 py-4 rounded-xl font-medium ${
                  isActive("https://www.hseeltech.com")
                    ? " text-[#52A936]"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Use Cases
              </Link>
              

              {/* About Us */}
             
              {/* Product */}
              

              {/* Solutions Accordion */}
            
              {/* Blog */}
            
            </div>

            {/* Footer CTA */}
            <div className="p-6 border-t border-gray-100">
              {/* <Link
                href="https://www.rmmcc.com/"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full bg-[#52A936] text-white rounded-xl py-4 font-semibold shadow-lg">
                  Book a Demo
                </Button>
              </Link> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}
