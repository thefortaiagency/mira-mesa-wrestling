import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mmw.fort-solutions.com"),
  title: {
    default: "Mira Mesa Wrestling — San Diego",
    template: "%s | Mira Mesa Wrestling",
  },
  description:
    "Mira Mesa Wrestling — 2014 & 2024 Boys CIF Champions, 2022 Girls San Diego Section Masters Champions, 15 consecutive Boys League Championships, 4 consecutive Girls Conference Championships. Boys & Girls high school wrestling plus youth (Fall Guys), middle/high school summer, adult/veteran/masters training through Mira Mesa Wrestling Club.",
  keywords: [
    "Mira Mesa Wrestling",
    "Mira Mesa High School Wrestling",
    "MMHS Wrestling",
    "San Diego Wrestling",
    "California CIF Wrestling",
    "Boys CIF Champions 2024",
    "Girls Wrestling San Diego",
    "Mira Mesa Wrestling Club",
    "MMWC",
    "Adult Wrestling San Diego",
    "Veteran Wrestling San Diego",
    "Masters Wrestling Training",
    "Fall Guys Wrestling",
    "Youth Wrestling San Diego",
    "Coach Craig VanDyke",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mira Mesa Wrestling",
    title: "Mira Mesa Wrestling — San Diego",
    description:
      "2× Boys CIF Champions. Girls Masters Champions. 15 consecutive Boys League titles. Youth through adult wrestling at Mira Mesa.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  name: "Mira Mesa Wrestling",
  alternateName: "Mira Mesa High School Wrestling",
  sport: "Wrestling",
  description:
    "Boys and Girls wrestling program at Mira Mesa High School, San Diego, California. Multiple CIF and League champions across both teams.",
  url: "https://mmw.fort-solutions.com",
  email: "MiraMesaWrestling@gmail.com",
  location: {
    "@type": "Place",
    name: "Mira Mesa High School",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Diego",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  coach: {
    "@type": "Person",
    name: "Craig VanDyke",
    jobTitle: "Head Coach (Boys and Girls)",
    description:
      "20 years coaching. Team USA Veteran National Team Co-Head Coach (Veteran Freestyle World Champions 2021–2025, Veteran Greco-Roman World Champions 2022 & 2023). Boys CIF Championships 2014 & 2024. 13 CIF trophies. Girls Masters Championship 2022.",
  },
  award: [
    "2024 Boys CIF Champions",
    "2014 Boys CIF Champions",
    "2022 Girls San Diego Section Masters Champions",
    "15 Consecutive Boys League Championships",
    "4 Consecutive Girls Conference Championships",
    "3 Consecutive Girls League Championships",
    "3 Consecutive Middle School Championships",
  ],
  parentOrganization: {
    "@type": "SportsOrganization",
    name: "Mira Mesa Wrestling Club",
    alternateName: "MMWC",
    description:
      "501(c)(3) supporting Mira Mesa wrestling. Offers training for ages 5–60: Fall Guys Youth Wrestling, MMWC Middle/High School Summer, MMWC Adult/Veteran/Masters year-round.",
    taxID: "92-4020180",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9450 Mira Mesa Blvd. #309",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92126",
      addressCountry: "US",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`} style={{ textRendering: "optimizeLegibility" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ScrollToTop />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
