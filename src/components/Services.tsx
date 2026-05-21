"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Sparkles, GraduationCap, Trophy, Heart, Calendar } from "lucide-react";

const programs = [
  {
    title: "Boys & Girls High School Wrestling",
    age: "Mira Mesa HS · Grades 9-12",
    description:
      "The varsity programs. Freshmen and Sophomores welcome; Juniors and Seniors try out for a roster spot. PE clothes and wrestling shoes required.",
    icon: Trophy,
    cta: "Join the team",
    href: "/contact",
  },
  {
    title: "Fall Guys Youth Wrestling",
    age: "Ages 5–14",
    description:
      "Folkstyle, Freestyle, and Greco-Roman year-round in Fall, Spring, and Summer sessions. The pipeline that's built CIF champions for decades.",
    icon: Sparkles,
    cta: "Fall Guys details",
    href: "/mmwc#fall-guys",
  },
  {
    title: "MMWC Middle / High School Summer",
    age: "Mira Mesa MS & HS attendees",
    description:
      "Summer training for current Mira Mesa students. All three styles. Includes a USA Wrestling card for HS students. $200.",
    icon: GraduationCap,
    cta: "Sign up",
    href: "/mmwc",
  },
  {
    title: "MMWC Adult / Veteran / Masters",
    age: "Ages 18–60",
    description:
      "Year-round training in Folkstyle, Freestyle, and Greco-Roman. $75/month. Current USA Wrestling membership required. Coached by Team USA Veteran Assistant Coach Craig VanDyke.",
    icon: Users,
    cta: "Train with us",
    href: "/masters",
  },
  {
    title: "Marauder Machine",
    age: "Wangenheim & Challenger Middle School students",
    description:
      "Free middle school program running February through May. Building the next class of Mira Mesa wrestlers.",
    icon: Heart,
    cta: "More info",
    href: "/mmwc#marauder-machine",
  },
  {
    title: "Schedule & Calendar",
    age: "Live Google Calendar",
    description:
      "Practices, dual meets, tournaments, CIF dates. Updated in real-time — what's on Coach's calendar is what's on the site.",
    icon: Calendar,
    cta: "See calendar",
    href: "/calendar",
  },
];

export function Services() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-heading font-semibold text-red-600 tracking-wider uppercase">
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

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group p-8 rounded-2xl border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all bg-white flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="mt-4 text-xs text-slate-500 font-heading font-semibold tracking-wider uppercase">
                  {p.age}
                </p>
                <h3 className="mt-2 text-xl font-heading font-bold text-slate-900">{p.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm flex-1">{p.description}</p>
                <Link
                  href={p.href}
                  className="mt-5 inline-flex items-center gap-1 text-red-600 font-heading font-semibold text-sm hover:text-red-700"
                >
                  {p.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
