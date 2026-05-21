"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-slate-950 to-slate-950" />
      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
            Come earn your spot on the{" "}
            <span className="text-yellow-400">mat</span>.
          </h2>

          <p className="mt-6 text-slate-400 text-xl max-w-xl mx-auto leading-relaxed">
            Freshmen and Sophomores always welcome. Bring PE clothes and wrestling shoes —
            Coach VanDyke will take it from there.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-blue-700 text-white font-heading font-semibold rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-3 text-lg shadow-lg shadow-yellow-400/25"
            >
              Reach Coach Craig
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="https://www.athleticclearance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 text-white font-heading font-medium rounded-lg border border-slate-600 hover:bg-white/10 transition-colors text-lg"
            >
              Athletic Packet
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
