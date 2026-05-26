import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Camera, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Photos",
  description:
    "Mira Mesa Wrestling photo galleries — match coverage, team photos, championship moments. Linked to live Google Photos / Drive albums managed by the program.",
};

export default function PhotosPage() {
  return (
    <>
      <section className="relative min-h-[55vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/photos-hero.jpg"
            alt="Mira Mesa team going wild on the bench during the 2025 dual meet vs San Diego — a wrestler walking off after a win"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/20 lg:hidden" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 from-8% via-slate-950/35 to-slate-950/0" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-16 relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="text-yellow-300 text-sm font-heading font-semibold tracking-wider uppercase">Photos</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
              Mira Mesa Wrestling, in pictures
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-200 leading-relaxed">
              Match photos, team shots, championship moments. New albums each season.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
            <Camera className="w-8 h-8 text-blue-700" />
          </div>
          <h2 className="text-2xl font-heading font-bold text-slate-900">
            Album links coming back soon.
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            The original site had season galleries from 2016&ndash;2019. We&apos;re
            transitioning to a Google Drive / Photos album system that Coach
            VanDyke can update directly without touching the website — same
            flexibility, no admin overhead.
          </p>
          <p className="mt-4 text-slate-500 text-sm">
            <em>Coach: drop the Google Drive folder share link with Craig and we&apos;ll
            wire each season as a clickable album card.</em>
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="https://www.facebook.com/MiraMesaWrestling"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-heading font-semibold rounded-lg hover:bg-slate-800 transition-colors text-sm"
            >
              Facebook
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/miramesawrestling/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-heading font-semibold rounded-lg hover:bg-slate-800 transition-colors text-sm"
            >
              Instagram
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-heading font-semibold rounded-lg hover:bg-blue-800 transition-colors text-sm"
            >
              Submit a photo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
