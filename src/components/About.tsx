"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, Globe, Calendar, Users } from "lucide-react";

export function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — quote panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-blue-800 to-blue-950 p-12 flex flex-col justify-center shadow-2xl">
              <div className="relative z-10 space-y-8">
                <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-blue-200" />
                </div>
                <blockquote className="text-2xl text-white font-heading font-medium leading-tight">
                  &ldquo;Mira Mesa Wrestling builds lifelong success in young men and women through the ancient sport of wrestling.&rdquo;
                </blockquote>
                <p className="text-blue-200 font-heading">Craig VanDyke · Head Coach</p>
              </div>
            </div>
            <div className="absolute -bottom-6 right-4 lg:right-8 bg-white rounded-xl shadow-2xl p-5 ring-1 ring-black/5">
              <p className="text-blue-700 font-heading font-bold text-2xl">Team USA</p>
              <p className="text-slate-600 text-sm mt-1">Veteran World Champions Coach · '21 '22 '23 '24 '25</p>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-700 text-sm font-heading font-semibold tracking-wider uppercase">
              About the Program
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 leading-tight">
              A wrestling room that wins — at every level.
            </h2>

            <p className="mt-6 text-slate-700 leading-relaxed text-lg">
              Mira Mesa Wrestling has been a force in San Diego wrestling for four
              decades. Head Coach Craig VanDyke (since 2012) has added 15 League
              Titles, 14 Conference Titles, a Girls Masters Championship, and two
              CIF Championships to a legacy that started with Noel Hall in 1981 and
              was built by Hall of Famer Jon Talbott from 1984-2009.
            </p>

            <p className="mt-4 text-slate-700 leading-relaxed text-lg">
              Off the high school mat, Mira Mesa Wrestling Club (MMWC) — our
              501(c)(3) — runs year-round programming for ages 5 to 60: Fall Guys
              for youth, summer training for middle and high schoolers, and the
              adult/veteran/masters club coached by an active Team USA Veteran
              National Team Assistant Coach.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10 mb-10">
              {[
                { icon: Trophy, title: "15 League Titles in a row", desc: "75-0 Boys · 12-0 Girls dual meet record" },
                { icon: Globe, title: "Team USA-coached", desc: "Veteran Freestyle World Champs '21–'25" },
                { icon: Calendar, title: "Year-round wrestling", desc: "Fall, Spring, Summer, plus high school season" },
                { icon: Users, title: "Open enrollment", desc: "Freshmen, Sophomores, and youth always welcome" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-heading font-semibold text-base">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-heading font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Meet the coaches
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
