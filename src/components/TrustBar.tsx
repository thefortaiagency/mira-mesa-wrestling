"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Crown, Star, Flame, Shield, GraduationCap } from "lucide-react";

const stats = [
  { value: "15×", label: "Boys League Titles", icon: Trophy },
  { value: "14×", label: "Boys Conference Titles", icon: Crown },
  { value: "2×", label: "Boys CIF Champions", icon: Medal },
  { value: "75–0", label: "Boys Dual Meet Record", icon: Award },
  { value: "4×", label: "Girls Conference Titles", icon: Star },
  { value: "3×", label: "Girls League Titles", icon: Flame },
  { value: "12–0", label: "Girls Dual Meet Record", icon: Shield },
  { value: "3×", label: "MS Championships", icon: GraduationCap },
];

export function TrustBar() {
  return (
    <section className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-8">
        <p className="text-xs text-slate-500 font-heading font-semibold tracking-wider uppercase text-center mb-6">
          Mira Mesa Wrestling — by the numbers
        </p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 lg:gap-4"
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-700/10 flex items-center justify-center text-blue-700 shrink-0">
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
