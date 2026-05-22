"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const programChips = [
  "Boys & Girls High School",
  "Fall Guys Youth (5-14)",
  "MMWC High School Summer",
  "Marauder Machine (Middle School)",
  "Adult · Veteran · Masters (18-60)",
];

export function Services() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">
            Programs
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 leading-tight">
            Wrestling at every level — 5 to 60.
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Mira Mesa Wrestling and our 501(c)(3) club (MMWC) run programs from
            elementary-age beginners through Team USA Veteran competitors. Different
            entry points, same mat, same standard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {programChips.map((p) => (
            <span
              key={p}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-heading font-medium"
            >
              {p}
            </span>
          ))}
        </motion.div>

        <Link
          href="/mmwc"
          className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-blue-700 text-white font-heading font-semibold rounded-lg hover:bg-blue-800 transition-colors text-lg"
        >
          See all programs
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
