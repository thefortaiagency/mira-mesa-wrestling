import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { CTASection } from "@/components/CTASection";
import { FloatingCTA } from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Mira Mesa Wrestling — Marauders Wrestling, San Diego",
  description:
    "Mira Mesa Wrestling — 2014 & 2024 Boys CIF Champions, 2022 Girls San Diego Section Masters Champions, 14 consecutive League titles. Boys & Girls high school wrestling plus year-round MMWC programs (youth, summer, adult).",
  openGraph: {
    title: "Mira Mesa Wrestling — Marauders Wrestling, San Diego",
    description:
      "Boys & Girls CIF Champions. 14 consecutive League titles. Youth through adult wrestling.",
    type: "website",
    url: "https://mmw.fort-solutions.com",
    siteName: "Mira Mesa Wrestling",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <About />
      <CTASection />
      <FloatingCTA />
    </>
  );
}
