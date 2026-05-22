import type { Metadata } from "next";
import Link from "next/link";
import {
  ExternalLink,
  ShieldAlert,
  PlayCircle,
  Stethoscope,
  Heart,
  Newspaper,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources — Wrestling Health, Hygiene & Classic Matches",
  description:
    "Wrestling resources for Marauders and wrestling families: hygiene & skin infection guidance, cauliflower ear treatment, USA Wrestling links, CIF San Diego info, classic match film, and the Dan Gable documentary.",
};

const healthSection = [
  {
    icon: Stethoscope,
    title: "Skin Infection — Doctor Form",
    description:
      "Pre-filled form a parent or athlete can take to the doctor to get clearance back to wrestle. Saves the appointment time.",
  },
  {
    icon: ShieldAlert,
    title: "Cauliflower Ear — Treatment Guide 1",
    description:
      "First-line treatment overview when an athlete starts developing cauliflower ear. Wear your headgear.",
  },
  {
    icon: ShieldAlert,
    title: "Draining Cauliflower Ear",
    description:
      "When and how draining is appropriate. Always coordinate with a medical professional.",
  },
  {
    icon: ShieldAlert,
    title: "Cauliflower Ear — Treatment Guide 2",
    description:
      "Second protocol when the ear has progressed past the early-stage window.",
  },
];

const wrestlingLinks = [
  { title: "USA Wrestling", description: "National governing body for amateur wrestling in the US.", href: "https://www.themat.com/", domain: "themat.com" },
  { title: "FloWrestling", description: "Live streaming, news, and rankings for all levels of wrestling.", href: "https://www.flowrestling.org/", domain: "flowrestling.org" },
  { title: "CIF San Diego Section", description: "Section governing body for San Diego high school athletics.", href: "https://www.cifsds.org/", domain: "cifsds.org" },
  { title: "USAW Veteran / Masters", description: "Adult competitive wrestling division (35+).", href: "https://www.themat.com/page/show/9163301-veterans", domain: "themat.com" },
  { title: "Aether VTC", description: "Virtual training and visualization for wrestlers.", href: "https://www.aethervtc.ai", domain: "aethervtc.ai" },
  { title: "Grit n Gut", description: "Mindset, nutrition, and conditioning for combat athletes.", href: "https://gritngut.com", domain: "gritngut.com" },
];

const newsArticles = [
  {
    title: "Precin, Nunn earn gold; U.S. tops Freestyle team ranking at Veteran World Championships",
    source: "TheMat.com (USA Wrestling)",
    date: "October 9, 2025",
    href: "https://www.themat.com/news/2025/october/09/precin-nunn-earn-gold-u-s-tops-freestyle-team-ranking-at-veteran-world-championships",
  },
];

const classicMatches = [
  "McIlravy vs Abas — NCAA National Title Match",
  "Greco-Roman: Gardner vs Karelin — Olympic Title Match",
  "Freestyle: Gable Steveson — Olympic Title Match",
  "Freestyle: Cael Sanderson — Olympic Title Match",
  "Freestyle: Tom Brands — Olympic Title Match",
  "Dan Gable Documentary",
];

export default function ResourcesPage() {
  return (
    <>
      <section className="relative py-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-slate-950 to-slate-950" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 relative z-10">
          <span className="text-yellow-300 text-sm font-heading font-semibold tracking-wider uppercase">Resources</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white leading-tight max-w-4xl">
            For wrestlers, families, and the wrestling-curious.
          </h1>
          <p className="mt-5 text-xl text-slate-300 max-w-2xl">
            Health and hygiene guidance, the wrestling sites we actually use,
            and the classic matches every Marauder should study.
          </p>
        </div>
      </section>

      {/* Health & Hygiene */}
      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">Health & Hygiene</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
              Stay on the mat — clean skin, intact ears.
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {healthSection.map((h) => {
              const Icon = h.icon;
              return (
                <li key={h.title} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-bold text-slate-900 text-sm leading-snug">{h.title}</h3>
                    <p className="mt-1 text-slate-500 text-xs italic">Document link — pending upload</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Wrestling Resources */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">Wrestling Resources</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
              Wrestling resources.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wrestlingLinks.map((l) => (
              <a
                key={l.title}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-yellow-300 hover:shadow-md transition-all hover:no-underline"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${l.domain}&sz=64`}
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-md bg-slate-100 object-contain"
                    loading="lazy"
                  />
                  <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-1.5">
                    {l.title}
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-yellow-400 transition-colors" />
                  </h3>
                </div>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{l.description}</p>
                <p className="mt-3 text-xs text-slate-400 font-mono">{l.domain}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* News & Media */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">News & Media</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
            Press the program is in.
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Articles, results write-ups, and coverage involving Mira Mesa Wrestling and the staff.
          </p>
          <ul className="mt-10 space-y-3">
            {newsArticles.map((n) => (
              <a
                key={n.href}
                href={n.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-md transition-all hover:no-underline"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Newspaper className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-slate-900 leading-snug flex items-start gap-2">
                    <span>{n.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700 transition-colors shrink-0 mt-1" />
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">{n.source} &middot; {n.date}</p>
                </div>
              </a>
            ))}
          </ul>
        </div>
      </section>

      {/* Classic Matches */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">Watch</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
            Classic matches every wrestler should know.
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Film study isn&apos;t just for football. The wrestlers below changed how
            the sport is wrestled at the highest level.
          </p>

          <ul className="mt-10 space-y-3">
            {classicMatches.map((m) => (
              <li
                key={m}
                className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <PlayCircle className="w-5 h-5" />
                </div>
                <span className="font-heading font-semibold text-slate-900">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Football crossover + community articles */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">Reading</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
            Wrestling makes you a better everything.
          </h2>
          <ul className="mt-10 space-y-3">
            {[
              "Football Crossover — why football coaches recruit wrestlers",
              "NFL Wrestlers — the active and Hall-of-Fame list",
              "Mira Mesa Wrestler on the Wrestling Benefit (community story)",
              "Why Football Coaches Love Wrestlers",
            ].map((title) => (
              <li
                key={title}
                className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 bg-white"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="font-heading font-semibold text-slate-900">{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-700 text-white font-heading font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Have a resource to add? Email Coach Craig
          </Link>
        </div>
      </section>
    </>
  );
}
