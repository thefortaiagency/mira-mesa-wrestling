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
    "Mira Mesa Wrestling — 2014 & 2024 Boys CIF Champions, 2022 Girls San Diego Section Masters Champions. 15 consecutive Boys League Titles (75-0 dual meet record), 14 Boys Conference Titles, 4 consecutive Girls Conference Titles, 3 consecutive Girls League Titles (12-0 dual meet record), 3 consecutive Middle School Championships. Year-round wrestling for Youth, Middle School, High School and Adult.",
  openGraph: {
    title: "Mira Mesa Wrestling — Marauders Wrestling, San Diego",
    description:
      "15× Boys League Champs (75-0). 2× CIF Champions. Girls Masters Champions. Year-round wrestling for all ages.",
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
