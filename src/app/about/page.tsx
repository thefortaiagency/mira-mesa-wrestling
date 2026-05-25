import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Trophy, Globe, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Coaches & Program",
  description:
    "Meet the Mira Mesa Wrestling coaching staff led by Head Coach Craig VanDyke — Team USA Veteran National Team Co-Head Coach. Plus the head-coach lineage that built the Marauder program since 1981.",
};

const currentStaff = [
  {
    name: "Craig VanDyke",
    role: "Head Coach — Boys and Girls",
    photo: "/images/staff/craig.jpg",
    bullets: [
      "Years coaching: 20",
      "Years at Mira Mesa: 14",
      "Education: Bachelor of Architecture",
      { text: "Grit N Gut Podcast Host", href: "https://www.youtube.com/@GritNGut" },
      "Boys League Coach of the Year",
      "Girls City Conference Coach of the Year (2×)",
      "Girls Masters Championship 2022",
      "Boys CIF Championships: 2014 & 2024",
      "8 CIF Runner-Up finishes (5 Boys, 3 Girls)",
      "Team USA Veteran National Team Co-Head Coach",
      "Veteran Freestyle World Champions: '21, '22, '23, '24, '25",
      "Veteran Greco-Roman World Champions: '22, '23",
    ],
  },
  { name: "Dean Brown", role: "Assistant Coach", photo: "/images/staff/dean.jpg", bullets: ["Years coaching: 20", "Years at Mira Mesa: 8", "Education: BS HPER, MS Educational Technology, Secondary Teaching Credential", "Former MMHS Head Coach 2009-2012", "2× League Champion Coach", "2× City Conference Champion Coach", "2014 CIF Championship Team", "Former Head Coach SR: 4 league titles, 4 city conference titles", "Coached 5 state placers", { text: "Pin 'em 4-6", href: "https://pinem46.com/" }, { text: "Published Author", href: "https://www.amazon.com/Huh-what-Dean-F-Brown/dp/B0DBGXVDMB" }] },
  { name: "Adam Logue", role: "Head Assistant Coach", photo: "/images/staff/adam.jpg", bullets: ["Years coaching: 18", "Years at Mira Mesa: 10.5", "Education: BA English Literature, Secondary Teaching Credential", "Fall Guys Wrestling Coach", "Former Head Coach (Indiana)", "Coached state finalist", "2022 Girls SDS Masters Championship Team", "2024 CIF Championship Team"] },
  { name: "Davon Copeland", role: "Assistant Coach", photo: "/images/staff/davon.jpg", bullets: ["Years coaching: 15", "Education: BS Psychology, Master Human Service Counseling, MBA", "Fall Guys Coach", "1999 MMHS Alumni", "SDS Masters Placer", "2024 CIF Championship Team", "US Navy Retired Gunner Mate Senior Chief"] },
  { name: "Fazil Bagirov", role: "Assistant Coach", photo: "/images/staff/fazil.jpg", bullets: ["Years coaching: 3", "Years at Mira Mesa: 2", "Education: Bachelor of Mechanical Engineering", "MMWC Freestyle Coach", "2× International Tana Cup Silver Medalist"] },
  { name: "Isaac Pumarejo", role: "Fall Guys Head Coach", photo: "/images/staff/placeholder.jpg", bullets: ["Years coaching: 30", "Fall Guys Head Coach 2025-present", "Team Puma Head Coach", "2× CA State Placer"] },
  { name: "Devhante Hayes", role: "Assistant Coach", photo: "/images/staff/devhante.jpg", bullets: ["Years coaching: 2", "Years at Mira Mesa: 1", "2022 MMHS Alumni", "2× CIF Champion", "SDS Masters Finalist", "3× State Qualifier", "CA State Placer"] },
  { name: "Noah Lester", role: "Assistant Coach", photo: "/images/staff/noah.jpg", bullets: ["Years coaching: 2", "Years at Mira Mesa: 2", "2015 MMHS Alumni", "SDS Masters Placer", "CIF Finalist", "Team Member, 2014 CIF Championship Team"] },
  { name: "Waseem Elhamad", role: "Assistant Coach", photo: "/images/staff/waseem.jpg", bullets: ["Years coaching: 1", "Years at Mira Mesa: 1", "2014 MMHS Alumni", "SDS Masters Champion", "2× CIF Champion", "Team Member, 2014 CIF Championship Team"] },
  { name: "Eric Velasco", role: "Assistant Coach", photo: "/images/staff/eric.jpg", bullets: ["Years coaching: 23", "Education: BS Criminal Justice", "1994 MMHS Alumni", "Fall Guys Head Coach 2010-2024", "CIF Placer", "2022 Girls SDS Masters Championship Team", "2024 CIF Championship Team"] },
  { name: "Alexandra Savage", role: "Assistant Coach", photo: "/images/staff/alex.jpg", bullets: ["Years coaching: 4", "Years at Mira Mesa: 4", "2011 MMHS Alumni", "SDS CIF Finalist", "2024 CIF Championship Team"] },
  { name: "Jairus Mahoe", role: "Assistant Coach", photo: "/images/staff/jai.jpg", bullets: ["Years coaching: 5", "Years at Mira Mesa: 4", "Education: Doctor of Pharmacy, MBA, BS Pharmacy Studies, BA Economics", "2024 CIF Championship Team"] },
  { name: "Frank Criger", role: "Assistant Coach", photo: "/images/staff/frank.jpg", bullets: ["Years coaching: 5", "Years at Mira Mesa: 3", "Education: BS Biomedical Engineering, MBA", "SDS Masters Placer", "2024 CIF Championship Team"] },
  { name: "Israel Manalansan", role: "Assistant Coach", photo: "/images/staff/placeholder.jpg", bullets: ["Years coaching: 1", "Years at Mira Mesa: 1", "Education: BA Sociology, MBA", "1998 MMHS Alumni", "Retired US Army Major"] },
];

const headCoaches = [
  { years: "1981-1983", name: "Noel Hall", note: "2 League Titles" },
  { years: "1983-1984", name: "Mike Bakewell", note: "" },
  { years: "1984-2009", name: "Jon Talbott", note: "2007 National Wrestling Hall of Fame · 2025 California Hall of Fame Inductee (Lifetime Service Award) · 7 League · 9 Conference · 1 CIF Runner-up (2005)" },
  { years: "2009-2012", name: "Dean Brown", note: "2 League · 2 Conference · Coached State Finalist Gabi Musallam" },
  { years: "2012-Present", name: "Craig VanDyke", note: "15 League · 14 Conference · 1 SDS Masters · 2 CIF Titles · 8 CIF Runner-up (5 Boys, 3 Girls)" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Mira Mesa Wrestling coaching staff"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          {/* Mobile: bottom-up dark fade so text at bottom is legible.
              Desktop: left-to-right dark fade so text on the left stays readable while coaches stay visible. */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/0 lg:hidden" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/10" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-16 relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="text-yellow-300 text-sm font-heading font-semibold tracking-wider uppercase">About</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
              Mira Mesa Coaching Staff
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-300 leading-relaxed">
              Mira Mesa Wrestling has many well educated, caring, and devoted coaches who believe in sharing their experience, wisdom and knowledge with the next generation. We are more than a team — we are a family.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <Trophy className="w-8 h-8 text-blue-700 shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-bold text-slate-900">Championship Program</h3>
                <p className="text-slate-600 text-sm mt-1">15 consecutive Boys League titles. 75-0 Boys · 12-0 Girls dual records.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Globe className="w-8 h-8 text-blue-700 shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-bold text-slate-900">Team USA Connection</h3>
                <p className="text-slate-600 text-sm mt-1">Active Veteran World Championship coaching staff.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ShieldCheck className="w-8 h-8 text-blue-700 shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-bold text-slate-900">GRACE Philosophy</h3>
                <p className="text-slate-600 text-sm mt-1">Gratitude · Respect · Awareness · Communication · Embrace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">Staff</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">Coaches</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentStaff.map((c) => (
              <div key={c.name} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                <div className="relative aspect-[4/5] bg-slate-200">
                  <Image
                    src={c.photo}
                    alt={`${c.name} — ${c.role}`}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-slate-900 text-lg">{c.name}</h3>
                  <p className="text-blue-700 font-heading font-medium text-sm mt-1">{c.role}</p>
                  <ul className="mt-4 space-y-1.5 text-slate-700 text-sm">
                    {c.bullets.map((b, i) => {
                      const isLink = typeof b !== "string";
                      return (
                        <li key={i} className="flex gap-2">
                          <span className="text-yellow-400 shrink-0">•</span>
                          {isLink ? (
                            <a
                              href={b.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 hover:text-blue-800"
                            >
                              {b.text}
                            </a>
                          ) : (
                            <span>{b}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">Lineage</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
              Head Coaches at Mira Mesa
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Five head coaches in four decades. Every one of them added to what came before.
            </p>
          </div>
          <div className="space-y-4">
            {headCoaches.map((h) => (
              <div key={h.name + h.years} className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <div className="text-blue-700 font-heading font-bold text-sm sm:w-32 shrink-0">{h.years}</div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-slate-900 text-lg">{h.name}</h3>
                  {h.note && <p className="text-slate-600 text-sm mt-1">{h.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-700 text-white font-heading font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Reach a coach
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
