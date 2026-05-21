"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Crown, Star } from "lucide-react";

const stats = [
  { value: "14×", label: "League Titles (Boys)", icon: Trophy },
  { value: "12×", label: "Conference Titles (Boys)", icon: Crown },
  { value: "2×", label: "CIF Champions (Boys)", icon: Medal },
  { value: "3×", label: "Girls Conference (in a row)", icon: Star },
  { value: "70–0", label: "Boys Dual Meet Record", icon: Award },
];

export function TrustBar() {
  return (
    <section className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-8">
        <p className="text-xs text-slate-500 font-heading font-semibold tracking-wider uppercase text-center mb-6">
          Marauder Wrestling — by the numbers
        </p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4"
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex items-center gap-3 justify-center">
                <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center text-red-600 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-900 font-heading font-bold text-xl leading-none">
                    {s.value}
                  </span>
                  <span className="block text-slate-600 text-xs mt-0.5">{s.label}</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
