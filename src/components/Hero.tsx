"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Trophy } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end lg:justify-center overflow-hidden bg-slate-950">
      {/* Mobile: image fills the top half, copy stacks underneath.
          Desktop: image is full-bleed background with copy overlaid on the left. */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Mira Mesa Wrestling — wrestler in Marauder blue & gold singlet at championship pose"
          fill
          className="object-cover object-[80%_center] lg:object-right"
          priority
          sizes="100vw"
        />
        {/* Mobile gradient: dark fade from bottom up to keep text legible without hiding the wrestler. */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/0 lg:hidden" />
        {/* Desktop gradient: left-to-right so text on the left is legible but wrestler stays visible. */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/10" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/60" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-24 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-700/15 text-yellow-300 text-xs font-heading font-semibold tracking-wider uppercase border border-yellow-400/25">
              <Trophy className="w-3.5 h-3.5" />
              2024 Boys CIF Champions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05]"
          >
            Be part of the{" "}
            <span className="text-yellow-400">tradition</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl"
          >
            15 Consecutive Boys League Championships, 4 Consecutive Girls
            Conference Championships, 3 Consecutive Middle School Championships.
            Boys CIF Champions (2014, 2024), Girls Masters Champions (2022).
            Mira Mesa Wrestling trains year round for all ages: Youth, Middle
            School, High School and Adult.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-700 text-white font-heading font-semibold rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-3 text-lg shadow-lg shadow-yellow-400/25"
            >
              Join the Team
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/donation"
              className="px-8 py-4 bg-white/10 text-white font-heading font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Donate to MMWC
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400"
          >
            <span>Mira Mesa High School &middot; San Diego</span>
            <span className="w-px h-4 bg-slate-600 hidden sm:block" />
            <span>MMWC 501(c)(3)</span>
            <span className="w-px h-4 bg-slate-600 hidden sm:block" />
            <span>Ages 5 to 60</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
