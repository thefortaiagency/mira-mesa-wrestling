import type { Metadata } from "next";
import Link from "next/link";
import {
  ExternalLink,
  Activity,
  ShieldAlert,
  Trophy,
  PlayCircle,
  BookOpen,
  Stethoscope,
  Heart,
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
  { icon: Trophy, title: "USA Wrestling", description: "National governing body for amateur wrestling in the US.", href: "https://www.themat.com/" },
  { icon: PlayCircle, title: "FloWrestling", description: "Live streaming, news, and rankings for all levels of wrestling.", href: "https://www.flowrestling.org/" },
  { icon: Trophy, title: "CIF San Diego Section", description: "Section governing body for San Diego high school athletics.", href: "https://www.cifsds.org/" },
  { icon: BookOpen, title: "USAW Veteran / Masters", description: "Adult competitive wrestling division (35+).", href: "https://www.themat.com/page/show/9163301-veterans" },
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
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-slate-950 to-slate-950" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 relative z-10">
          <span className="text-red-400 text-sm font-heading font-semibold tracking-wider uppercase">Resources</span>
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
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-heading font-semibold text-red-600 tracking-wider uppercase">Health & Hygiene</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
              Stay on the mat — clean skin, intact ears.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {healthSection.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.title} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-red-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 font-heading font-bold text-slate-900 text-lg">{h.title}</h3>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{h.description}</p>
                  <p className="mt-3 text-xs text-slate-400 italic">Document link — pending upload</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wrestling Links */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-heading font-semibold text-red-600 tracking-wider uppercase">Wrestling Sites</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
              The sites Marauders actually use.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wrestlingLinks.map((l) => {
              const Icon = l.icon;
              return (
                <a
                  key={l.title}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-red-300 hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-5 font-heading font-bold text-slate-900 text-base flex items-center gap-1.5">
                    {l.title}
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-500 transition-colors" />
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">{l.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Classic Matches */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <span className="text-xs font-heading font-semibold text-red-600 tracking-wider uppercase">Watch</span>
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
                className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-red-200 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <PlayCircle className="w-5 h-5" />
                </div>
                <span className="font-heading font-semibold text-slate-900">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Football crossover + community articles */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <span className="text-xs font-heading font-semibold text-red-600 tracking-wider uppercase">Reading</span>
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
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-heading font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            Have a resource to add? Email Coach Craig
          </Link>
        </div>
      </section>
    </>
  );
}
