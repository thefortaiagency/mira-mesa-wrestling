import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Dumbbell, Flame, GraduationCap, Sprout, ExternalLink, Sun, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "MMWC — Mira Mesa Wrestling Club",
  description:
    "Mira Mesa Wrestling Club (MMWC) — 501(c)(3) supporting wrestling for ages 5-60. Fall Guys youth wrestling, summer high school training, adult/veteran/masters year-round, and the free Marauder Machine for Wangenheim & Challenger middle schoolers.",
};

const programs = [
  {
    id: "adult",
    name: "MMWC Adult Training",
    age: "Ages 18-60",
    season: "Year-round · Sundays & Wednesdays — Technique & Tactics (plus Thursday Open Mat)",
    cost: "$100 / month",
    styles: "Freestyle, Greco-Roman, Folkstyle (Collegiate)",
    required: "Current USA Wrestling Membership",
    icon: Dumbbell,
    extra: {
      label: "Purchase USA Card",
      href: "https://www.usawmembership.com/",
    },
  },
  {
    id: "fall-guys",
    name: "MMWC Fall Guys Youth Wrestling",
    age: "Ages 5-14",
    season: "Year-round · 4 sessions annually",
    cost: "$125 / month · $300 / session",
    styles: "Freestyle, Greco-Roman, Folkstyle (Collegiate)",
    required: "Contact for current enrollment",
    icon: Flame,
    extra: { label: "Fall Guys Wrestling", href: "mailto:FallGuysWrestling@gmail.com" },
  },
  {
    id: "high-school",
    name: "Mira Mesa High School Wrestling",
    age: "Mira Mesa HS · Grades 9-12",
    season: "November - February (CIF season)",
    cost: "Fundraisers",
    styles: "Folkstyle (Collegiate)",
    required: "Mira Mesa HS enrollment",
    icon: Trophy,
    extra: { label: "Boys & Girls varsity teams — try out for a roster spot", href: null },
  },
  {
    id: "mshs",
    name: "MMWC High School Summer",
    age: "Mira Mesa HS attendees",
    season: "Summer",
    cost: "$220 · includes camp week",
    styles: "Freestyle, Greco-Roman, Folkstyle (Collegiate)",
    required: "MMHS enrollment",
    icon: Sun,
    extra: { label: "Club membership includes USA Wrestling card", href: null },
  },
  {
    id: "marauder-machine",
    name: "Marauder Machine",
    age: "Middle School (Wangenheim & Challenger)",
    season: "March - May",
    cost: "Free",
    styles: "Folkstyle (Collegiate)",
    required: "Wangenheim or Challenger Middle School enrollment",
    icon: Sprout,
    extra: { label: "Building the next class of Mira Mesa wrestlers", href: null },
  },
];

export default function MMWCPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/programs-hero.jpg"
            alt="Coach Craig coaching at the 2025 California State Games"
            fill
            priority
            className="object-cover object-[center_20%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/30 lg:hidden" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 from-15% via-slate-950/55 to-slate-950/10" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-12 relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
            <Image
              src="/images/mmwc-logo.png"
              alt="MMWC — Mira Mesa Wrestling Club logo"
              width={120}
              height={120}
              priority
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain shrink-0 drop-shadow-[0_4px_24px_rgba(250,204,21,0.35)]"
            />
            <div>
              <span className="text-yellow-300 text-sm font-heading font-semibold tracking-wider uppercase">MMWC</span>
              <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
                Mira Mesa Wrestling Club.
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
                Supporting wrestling for boys and girls in Mira Mesa, from age 5
                to age 60. 501(c)(3) &mdash; Tax ID 92-4020180.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 space-y-12">
          {programs.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                id={p.id}
                className="grid lg:grid-cols-3 gap-8 items-start p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg transition-all scroll-mt-24"
              >
                <div className="lg:col-span-1">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center overflow-hidden">
                    {p.id === "high-school" ? (
                      <Image
                        src="/images/mm-logo.png"
                        alt=""
                        width={56}
                        height={56}
                        className="w-12 h-12 object-contain"
                      />
                    ) : (
                      <Icon className="w-7 h-7" />
                    )}
                  </div>
                  <h2 className="mt-5 text-2xl font-heading font-extrabold text-slate-900">{p.name}</h2>
                  {p.id !== "marauder-machine" && p.id !== "high-school" && (
                    <Image
                      src="/images/mmwc-banner.png"
                      alt="MMWC"
                      width={1920}
                      height={649}
                      className="mt-3 w-40 h-auto object-contain"
                      sizes="160px"
                    />
                  )}
                  <p className="mt-2 text-blue-700 font-heading font-medium">{p.age}</p>
                </div>
                <div className="lg:col-span-2">
                  <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                    <div>
                      <dt className="text-slate-500 font-heading font-semibold text-xs tracking-wider uppercase">Season</dt>
                      <dd className="mt-1 text-slate-900 font-medium">{p.season}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500 font-heading font-semibold text-xs tracking-wider uppercase">Cost</dt>
                      <dd className="mt-1 text-slate-900 font-medium">{p.cost}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500 font-heading font-semibold text-xs tracking-wider uppercase">Styles</dt>
                      <dd className="mt-1 text-slate-900 font-medium">{p.styles}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500 font-heading font-semibold text-xs tracking-wider uppercase">Required</dt>
                      <dd className="mt-1 text-slate-900 font-medium">{p.required}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                    {p.extra?.href ? (
                      <a
                        href={p.extra.href}
                        target={p.extra.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-700 font-heading font-semibold text-sm hover:text-blue-800"
                      >
                        {p.extra.label}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : p.extra?.label ? (
                      <span className="text-slate-600 text-sm italic">{p.extra.label}</span>
                    ) : null}
                    {p.id === "adult" ? (
                      <Link
                        href="/masters"
                        className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 text-white font-heading font-semibold text-sm rounded-lg hover:bg-blue-800 transition-colors"
                      >
                        Learn More
                      </Link>
                    ) : (
                      <Link
                        href="/contact"
                        className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white font-heading font-semibold text-sm rounded-lg hover:bg-slate-800 transition-colors"
                      >
                        Contact Coach Craig
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Board */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">Board</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
            MMWC Executive Board
          </h2>
          <div className="mt-8 space-y-4">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <p className="text-blue-700 font-heading font-semibold text-sm tracking-wider uppercase">President</p>
              <p className="mt-1 text-slate-900 font-heading font-bold text-xl">Matthew Vallebo</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <p className="text-blue-700 font-heading font-semibold text-sm tracking-wider uppercase">Secretary</p>
              <p className="mt-1 text-slate-900 font-heading font-bold text-xl">Kristine Lee</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
