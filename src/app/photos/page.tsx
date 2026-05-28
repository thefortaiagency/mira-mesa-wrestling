import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Camera, ExternalLink, Facebook, Instagram } from "lucide-react";
import { LightboxImage } from "@/components/LightboxImage";

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

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <figure className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md">
            <div className="relative aspect-[4/3]">
              <LightboxImage
                src="/images/photos-feature.jpg"
                alt="Mira Mesa Wrestling senior class of 2026 with Coach Craig and a stack of trophies"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 720px, 100vw"
              />
            </div>
            <figcaption className="p-5 text-center">
              <p className="font-heading font-bold text-slate-900 text-lg">Mira Mesa Wrestling Senior Class 2026</p>
            </figcaption>
          </figure>
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
            For more photos right now, follow Mira Mesa Wrestling on Facebook and Instagram —
            that&apos;s where match shots, podium pics, and team moments land first.
          </p>
          <div className="mt-8 flex items-center justify-center gap-5">
            <a
              href="https://www.facebook.com/MiraMesaWrestling"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mira Mesa Wrestling on Facebook"
              className="w-16 h-16 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-85 transition-opacity hover:no-underline shadow-md hover:shadow-lg"
            >
              <Facebook className="w-8 h-8 fill-current" />
            </a>
            <a
              href="https://www.instagram.com/miramesawrestling/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mira Mesa Wrestling on Instagram"
              className="w-16 h-16 rounded-full text-white flex items-center justify-center hover:opacity-85 transition-opacity hover:no-underline shadow-md hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              }}
            >
              <Instagram className="w-8 h-8" />
            </a>
          </div>
          <div className="mt-8">
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
