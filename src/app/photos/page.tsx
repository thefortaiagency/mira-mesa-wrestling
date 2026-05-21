import type { Metadata } from "next";
import Link from "next/link";
import { Camera, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Photos",
  description:
    "Mira Mesa Wrestling photo galleries — match coverage, team photos, championship moments. Linked to live Google Photos / Drive albums managed by the program.",
};

export default function PhotosPage() {
  return (
    <>
      <section className="relative py-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-slate-950 to-slate-950" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 relative z-10">
          <span className="text-yellow-300 text-sm font-heading font-semibold tracking-wider uppercase">Photos</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
            Mira Mesa Wrestling, in pictures.
          </h1>
          <p className="mt-5 text-xl text-slate-300 max-w-2xl">
            Match photos, team shots, championship moments. New albums each season.
          </p>
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
