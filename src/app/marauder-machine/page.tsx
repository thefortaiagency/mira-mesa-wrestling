import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Trophy, Users, Calendar, ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Marauder Machine — SDUSD MSA Middle School Wrestling",
  description:
    "Marauder Machine wrestles under the SDUSD MSA Program. 3 straight Boys and Girls Dual Meet Championships (2024, 2025, 2026) plus 3 straight Individual Team Tournament titles. 15 individual champions in 2026.",
};

export default function MarauderMachinePage() {
  return (
    <>
      <section className="relative min-h-[55vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/marauder-machine-hero.jpg"
            alt="Marauder Machine combined wrestling team gathered after competition"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/10 lg:hidden" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 from-8% via-slate-950/40 to-slate-950/0" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-16 relative z-10 w-full">
          <Link
            href="/mmwc#marauder-machine"
            className="inline-flex items-center gap-2 text-yellow-300 text-sm font-heading font-semibold hover:text-yellow-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Programs
          </Link>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
            <Image
              src="/images/mm-logo.png"
              alt=""
              width={120}
              height={120}
              priority
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain shrink-0 drop-shadow-[0_4px_24px_rgba(250,204,21,0.35)]"
            />
            <div>
              <span className="text-yellow-300 text-sm font-heading font-semibold tracking-wider uppercase">SDUSD MSA Program</span>
              <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
                Marauder Machine.
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
                Middle school wrestling under the San Diego Unified School District
                Middle School Athletics program. Building the next class of Mira
                Mesa wrestlers since 2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <p className="text-xs text-slate-500 font-heading font-semibold tracking-wider uppercase text-center mb-6">
            Marauder Machine — by the numbers
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatTile icon={Trophy} value="6×" label="Dual Meet Champs (B+G, '24-'26)" />
            <StatTile icon={Trophy} value="6×" label="Team Tournament Champs (B+G, '24-'26)" />
            <StatTile icon={Users} value="28" label="Individual Tournament Champions (since 2024)" />
            <StatTile icon={Calendar} value="50-0" label="Combined Dual Meet Record (2024-2026)" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 md:px-10 lg:px-20 space-y-6">
          <div>
            <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">Program</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
              Three years in. Undefeated and counting.
            </h2>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Marauder Machine wrestles under the SDUSD MSA Program, which
            started in 2024.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            In that time, the Marauder Machine has won the Boys and Girls
            Dual Meet Championships in <strong>2024, 2025 and 2026</strong>.
            They have also won the Individual Team Tournament each year, both
            boys and girls. The first season, boys and girls team scores and
            duals were combined, rather than separated.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            In 2026 the Marauder Machine crowned <strong>15 individual
            champions</strong>, bringing the program total to{" "}
            <strong>28 individual tournament champions</strong> since 2024. The
            boys team has a record of <strong>20-0</strong> and the girls also
            have a record of <strong>20-0</strong>. The combined team from year
            1 went <strong>10-0</strong> in duals.
          </p>
          <div className="pt-2">
            <a
              href="https://docs.google.com/spreadsheets/d/1R-fXOulexK_rqQ0oNvrGGA5NkRAR-JakBP09RFcK__M/edit?gid=1360555423#gid=1360555423"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-blue-700 text-white font-heading font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-sm hover:shadow-md"
            >
              <Trophy className="w-5 h-5 text-yellow-300" />
              See All 28 Champions
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="mb-10 text-center">
            <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">2025-2026 Champions</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
              Western Division — Boys &amp; Girls.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <figure className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/teams/marauder-machine-boys-2026.jpg"
                  alt="Marauder Machine boys wrestling team holding SDUSD Western Division Champions 2025-2026 banners"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <figcaption className="p-5">
                <p className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">Boys</p>
                <p className="mt-1 font-heading font-bold text-slate-900">SDUSD Boys Wrestling Western Division Champions · 2025-2026</p>
                <p className="mt-1 text-sm text-slate-600">20-0 dual record</p>
              </figcaption>
            </figure>
            <figure className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/teams/marauder-machine-girls-2026.jpg"
                  alt="Marauder Machine girls wrestling team holding SDUSD Western Division Champions 2025-2026 banners and trophy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <figcaption className="p-5">
                <p className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">Girls</p>
                <p className="mt-1 font-heading font-bold text-slate-900">SDUSD Girls Wrestling Western Division Champions · 2025-2026</p>
                <p className="mt-1 text-sm text-slate-600">20-0 dual record</p>
              </figcaption>
            </figure>
          </div>

          <figure className="mt-12 max-w-xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/teams/marauder-machine-3x-champs.jpg"
                alt="Khalil and Alexander — first 3-time Marauder Machine MSA individual champions"
                fill
                className="object-cover object-top"
                sizes="(min-width: 768px) 600px, 100vw"
              />
            </div>
            <figcaption className="p-5 text-center">
              <p className="text-xs font-heading font-semibold text-yellow-600 tracking-wider uppercase">Three-Peat</p>
              <p className="mt-1 font-heading font-bold text-slate-900 text-lg">Khalil &amp; Alexander</p>
              <p className="mt-1 text-sm text-slate-600">First 3-time Individual MSA Champions in Marauder Machine history.</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-slate-700 leading-relaxed">
            Marauder Machine pulls from Wangenheim and Challenger Middle Schools
            and runs March through May. The program is free for enrolled students.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/mmwc#marauder-machine"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 text-white font-heading font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              All MMWC Programs
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 text-white font-heading font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Contact Coach Craig
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function StatTile({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-5 h-5" />
      </div>
      <p className="text-3xl font-heading font-extrabold text-slate-900 tabular-nums">{value}</p>
      <p className="mt-2 text-xs font-heading font-semibold text-slate-600 tracking-wider uppercase leading-tight">{label}</p>
    </div>
  );
}
