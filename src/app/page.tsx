"use client";

import Header from "@/app/components/section/Header";
import VideoSection from "@/app/components/section/Video";
import { VideoProvider } from "@/context/video-context";
import ImpactSection from "./components/section/ImpactSection";
import HowItWorksSection from "./components/section/HowItWorks";

const useCases = [
  {
    title: "Investor Onboarding",
    description: "Voice-guided registration and KYC for faster activation.",
    highlighted: true,
  },
  {
    title: "Property Discovery",
    description: "Conversational exploration of active investment projects",
  },
  {
    title: "Investor Retention",
    description:
      "Automated follow-ups and updates that sound human, not robotic.",
  },
];

const processSteps = [
  {
    stepNumber: "1",
    title: "Say Hello",
    description:
      "Start a simple voice chat — Ahmed greets you and introduces the latest investment opportunities.",
  },
  {
    stepNumber: "2",
    title: "Get Verified",
    description:
      "Ahmed helps you complete KYC and wallet setup — securely, step by step.",
  },
  {
    stepNumber: "3",
    title: "Discover Projects",
    description:
      "Explore active real-estate projects and expected returns — all through conversation.",
  },
  {
    stepNumber: "4",
    title: "Stay Updated",
    description:
      "Get voice alerts and portfolio updates — anytime, in Arabic or English.",
  },
];

import ConversationPowerSection from "./components/section/ConversationPowerSection";
import VoiceAIActionSection from "./components/section/VoiceAISection";
import AIFeatureSection from "./components/section/AIFeatureSection";
import TestimonialsCarousel from "./components/section/TestimonialSection";
import Footer from "./components/section/Footer";
import Hero from "./components/section/Hero";
import CTASection from "./components/section/CTA";
import { title } from "process";
import TrustedBusinessAndPartners from "./components/section/TrsustedBusinessPartner";

const features = [
  {
    iconType: "onboarding" as const,
    title: "Conversational Onboarding",
    description: "Simplifies the first step for every new investor",
  },
  {
    iconType: "availability" as const,
    title: "24/7 Availability",
    description: "Always on, always ready to assist",
  },
  {
    iconType: "localized" as const,
    title: "Localized Experience",
    description: "Speaks English & and can understand Arabic too.",
  },
  {
    iconType: "insights" as const,
    title: "Data-Driven Insights",
    description: "Tracks every conversation for performance analytics.",
  },
];

const description = [
  "Hseeltech's Voice AI is designed to sound naturally local — confident, warm, and clear. It uses subtle Arabic expressions like 'Marhaban' and 'Hala wallah' to create cultural familiarity while maintaining professionalism.",
  "It's more than automation — it's an intelligent assistant that understands people.",
];

const buttons = [
  {
    text: "Try Voice AI Demo",
    href: "https://www.rmmcc.com/",
    variant: "primary" as const,
  },
 
];

// ✅ Option 1: Let TypeScript infer the return type (Recommended)
const Home = () => {
  return (
    <>
      <VideoProvider>
        <Header />
        <Hero />
        {/* <TrustedBusinessAndPartners />
        <VideoSection /> */}
        <ImpactSection />

        <HowItWorksSection
          badge="How It Works"
          mainTitle="From Hello to Investment — All by Voice"
          steps={processSteps}
          ctaTitle="Not Sure How It Works ?"
          ctaDescription="Book a demo with our experts & get an step by step tour by our team."
          ctaButtonText="Book a Free Consultation"
          ctaImage="/images/home/howitworks.jpg"
          ctaImageAlt="Cart recovery consultation"
          onCtaClick={() => (window.location.href = "https://www.rmmcc.com/")}
        />

        <ConversationPowerSection
          badge="Why Voice AI for Real Estate"
          title="The Power of Conversation in Building Trust"
          features={features}
        />

        <VoiceAIActionSection
          badge="Use Cases"
          mainTitle="Voice AI in Action — The Hseeltech Way"
          useCases={useCases}
          image="/images/home/chatbot-img.jpg"
          imageAlt="Futuristic voice AI interface with holographic display"
          connectorIndex={1}
        />

        <AIFeatureSection
          badge="Voice AI"
          title="AI That Feels Human"
          description={description}
          image="/images/home/home-overview.jpg"
          imageAlt="Human hand touching robotic hand representing AI and human connection"
        />

        {/* <TestimonialsCarousel /> */}

        <CTASection
          data={{
            title: "The Future of Investing Is Conversational",
            subtitle:
              "Whether you’re a first-time investor or managing a growing portfolio, Hseeltech’s Voice AI ensures your experience stays smooth, smart, and human at every touchpoint.",
          }}
        />

        <Footer />
      </VideoProvider>
    </>
  );
};

export default Home;
