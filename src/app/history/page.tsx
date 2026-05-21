import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Medal, Award, Star, Crown } from "lucide-react";

export const metadata: Metadata = {
  title: "History — Championships & Titles",
  description:
    "Mira Mesa Wrestling championship history. Boys CIF Champions 2014 & 2024. Girls Masters Champions 2022. 14 consecutive Boys League titles. Full record by team, year, and event.",
};

const boysCIF = [
  { year: "2024", result: "CHAMPIONS", tier: "champion" },
  { year: "2023", result: "RUNNER-UP", tier: "runner" },
  { year: "2022", result: "RUNNER-UP", tier: "runner" },
  { year: "2021", result: "RUNNER-UP", tier: "runner" },
  { year: "2020", result: "RUNNER-UP", tier: "runner" },
  { year: "2019", result: "RUNNER-UP", tier: "runner" },
  { year: "2014", result: "CHAMPIONS", tier: "champion" },
  { year: "2005", result: "RUNNER-UP", tier: "runner" },
];

const girlsMasters = [
  { year: "2023", result: "RUNNER-UP", tier: "runner" },
  { year: "2022", result: "CHAMPIONS", tier: "champion" },
];

const girlsCIF = [
  { year: "2022", result: "RUNNER-UP", tier: "runner" },
  { year: "2021", result: "RUNNER-UP", tier: "runner" },
];

const boysConference = [
  "2024","2023","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2009","2005","2002","1996","1994","1993","1992","1991",
];

const girlsConference = ["2025","2024","2023"];

const girlsLeague = ["2025","2024"];

const boysLeague = [
  "2025","2024","2023","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2010","2009","2003","1996","1995","1993",
];

function ResultRow({ year, result, tier }: { year: string; result: string; tier: string }) {
  const isChamp = tier === "champion";
  return (
    <div
      className={`flex items-center justify-between gap-4 p-4 rounded-lg border ${
        isChamp ? "bg-red-50 border-red-200" : "bg-white border-slate-200"
      }`}
    >
      <span className={`font-heading font-bold text-lg ${isChamp ? "text-red-700" : "text-slate-700"}`}>
        {year}
      </span>
      <span
        className={`font-heading font-semibold text-sm tracking-wider uppercase ${
          isChamp ? "text-red-700" : "text-slate-500"
        }`}
      >
        {result}
      </span>
    </div>
  );
}

function TitleStrip({ years, color = "slate" }: { years: string[]; color?: "red" | "slate" }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-2">
      {years.map((y) => (
        <span
          key={y}
          className={`text-center font-heading font-bold text-sm py-2 rounded-lg ${
            color === "red"
              ? "bg-red-600 text-white"
              : "bg-slate-100 text-slate-800"
          }`}
        >
          {y}
        </span>
      ))}
    </div>
  );
}

export default function HistoryPage() {
  return (
    <>
      <section className="relative py-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-slate-950 to-slate-950" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 relative z-10">
          <span className="text-red-400 text-sm font-heading font-semibold tracking-wider uppercase">History</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white leading-tight max-w-4xl">
            The trophy case.
          </h1>
          <p className="mt-5 text-xl text-slate-300 max-w-2xl">
            Mira Mesa Wrestling has been collecting hardware since 1981. Boys, Girls,
            CIF, Masters, Conference, League — every banner earned.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 space-y-20">
          {/* Boys CIF */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Medal className="w-7 h-7 text-red-600" />
              <h2 className="text-3xl font-heading font-extrabold text-slate-900">Boys CIF</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {boysCIF.map((r) => <ResultRow key={r.year} {...r} />)}
            </div>
          </div>

          {/* Girls Masters */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Crown className="w-7 h-7 text-red-600" />
              <h2 className="text-3xl font-heading font-extrabold text-slate-900">Girls Masters</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {girlsMasters.map((r) => <ResultRow key={r.year} {...r} />)}
            </div>
          </div>

          {/* Girls CIF */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Medal className="w-7 h-7 text-red-600" />
              <h2 className="text-3xl font-heading font-extrabold text-slate-900">Girls CIF</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {girlsCIF.map((r) => <ResultRow key={r.year} {...r} />)}
            </div>
          </div>

          {/* Boys Conference */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-7 h-7 text-red-600" />
              <h2 className="text-3xl font-heading font-extrabold text-slate-900">Boys Conference</h2>
              <span className="text-sm text-slate-500 ml-2">{boysConference.length} titles</span>
            </div>
            <TitleStrip years={boysConference} color="red" />
            <p className="mt-3 text-xs text-slate-500">*1991 Inaugural Tournament</p>
          </div>

          {/* Girls Conference */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-7 h-7 text-red-600" />
              <h2 className="text-3xl font-heading font-extrabold text-slate-900">Girls Conference</h2>
              <span className="text-sm text-slate-500 ml-2">{girlsConference.length} titles (3 in a row)</span>
            </div>
            <TitleStrip years={girlsConference} color="red" />
            <p className="mt-3 text-xs text-slate-500">*2023 Inaugural Tournament</p>
          </div>

          {/* Girls League */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-7 h-7 text-red-600" />
              <h2 className="text-3xl font-heading font-extrabold text-slate-900">Girls Western League</h2>
            </div>
            <TitleStrip years={girlsLeague} />
          </div>

          {/* Boys League */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-7 h-7 text-red-600" />
              <h2 className="text-3xl font-heading font-extrabold text-slate-900">Boys League</h2>
              <span className="text-sm text-slate-500 ml-2">{boysLeague.length} titles — 14 consecutive</span>
            </div>
            <TitleStrip years={boysLeague} />
            <p className="mt-3 text-xs text-slate-500">
              Mira Mesa transitioned from Eastern League (1993-2018) to Western League (2019-present).
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-slate-600 mb-2">
            Individual results — League, City, CIF, Masters, State, National Qualifiers — are maintained in a live Google Sheet by Coach VanDyke.
          </p>
          <p className="text-slate-500 text-sm mb-6">
            (Coach: drop the sheet URL with Craig and we&apos;ll embed it here.)
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-heading font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            Request the Individual Results sheet
          </Link>
        </div>
      </section>
    </>
  );
}
