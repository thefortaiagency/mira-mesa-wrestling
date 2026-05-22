import type { Metadata } from "next";
import Image from "next/image";
import { Trophy, Medal, Award, Star, Crown, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "History — Championships & Titles",
  description:
    "Mira Mesa Wrestling championship history. Boys CIF Champions 2014 & 2024. Girls Masters Champions 2022. 15 consecutive Boys League titles. 2026 Boys League + Conference, Girls League + Conference + CIF Runner-up. Full record by team, year, and event.",
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
  { year: "2026", result: "RUNNER-UP", tier: "runner" },
  { year: "2022", result: "RUNNER-UP", tier: "runner" },
  { year: "2021", result: "RUNNER-UP", tier: "runner" },
];

const boysConference = [
  "2026","2024","2023","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2009","2005","2002","1996","1994","1993","1992","1991",
];

const girlsConference = ["2026","2025","2024","2023"];

const girlsLeague = ["2026","2025","2024"];

const boysLeague = [
  "2026","2025","2024","2023","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2010","2009","2003","1996","1995","1993","1988","1986","1983","1980","1978",
];

const individualResults: { label: string; href?: string }[] = [
  { label: "League", href: "https://docs.google.com/spreadsheets/d/14IALu23h9ej6QM2IPNXVfKYrDAcbH_85SbajILIN3uU/edit?gid=1360555423#gid=1360555423" },
  { label: "SD City Conference", href: "https://docs.google.com/spreadsheets/d/1OWj5mReKdLsAII9rGBTCRA9o620f9oSpu77E9KiCH7A/edit?gid=1360555423#gid=1360555423" },
  { label: "CIF", href: "https://docs.google.com/spreadsheets/d/1VkYn176SvsAloL9L30MFchDgUdzby5DdUHjqAPC8tlY/edit?gid=567104251#gid=567104251" },
  { label: "Masters", href: "https://docs.google.com/spreadsheets/d/1CH83yadfvSbOeKsWtwlHm9bYkNYFkfTvNGThwai7n0o/edit?gid=1360555423#gid=1360555423" },
  { label: "State", href: "https://docs.google.com/spreadsheets/d/1X8akDsIvI1y-cNP5zwXM7tq1utSACxwvP-RlszvNcLQ/edit?gid=1360555423#gid=1360555423" },
  { label: "National Qualifiers", href: "https://docs.google.com/spreadsheets/d/1VIZqkUNVw1mEZnQFlOqFSjqLi5yHK-jVZiVzwqbTFYM/edit?gid=1360555423#gid=1360555423" },
];

function ResultRow({ year, result, tier }: { year: string; result: string; tier: string }) {
  const isChamp = tier === "champion";
  return (
    <div
      className={`flex items-center justify-between gap-4 p-4 rounded-lg border ${
        isChamp ? "bg-blue-50 border-blue-200" : "bg-white border-slate-200"
      }`}
    >
      <span className={`font-heading font-bold text-lg ${isChamp ? "text-blue-800" : "text-slate-700"}`}>
        {year}
      </span>
      <span
        className={`font-heading font-semibold text-sm tracking-wider uppercase ${
          isChamp ? "text-blue-800" : "text-slate-500"
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
              ? "bg-blue-700 text-white"
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
      <section className="relative min-h-[60vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/history-hero.jpg"
            alt="Mira Mesa claims its first CIF championship — 2014 U-T San Diego front page"
            fill
            priority
            className="object-cover object-left-top"
            sizes="100vw"
          />
          {/* Newspaper photo is busy — heavy dark gradient on the left so text reads cleanly,
              softer fade to the right so the headline "MIRA MESA CLAIMS ITS FIRST CHAMPIONSHIP" remains visible. */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/30 lg:hidden" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 from-15% via-slate-950/55 to-slate-950/0" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-16 relative z-10 w-full">
          <div className="flex flex-col-reverse md:flex-row md:items-center gap-8 md:gap-12">
            <div className="flex-1 max-w-2xl">
              <span className="text-yellow-300 text-sm font-heading font-semibold tracking-wider uppercase">History</span>
              <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
                The trophy case.
              </h1>
              <p className="mt-5 text-xl text-slate-300 leading-relaxed">
                Mira Mesa Wrestling has been collecting hardware since 1981. Boys, Girls,
                CIF, Masters, Conference, League — every banner earned.
              </p>
            </div>
            <Image
              src="/images/mm-logo.png"
              alt="Mira Mesa Marauders logo"
              width={240}
              height={240}
              priority
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain shrink-0 drop-shadow-[0_4px_32px_rgba(250,204,21,0.45)]"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 space-y-20">
          {/* Boys CIF */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Medal className="w-7 h-7 text-blue-700" />
              <h2 className="text-3xl font-heading font-extrabold text-slate-900">Boys CIF</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {boysCIF.map((r) => <ResultRow key={r.year} {...r} />)}
            </div>
          </div>

          {/* Girls Masters */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Crown className="w-7 h-7 text-blue-700" />
              <h2 className="text-3xl font-heading font-extrabold text-slate-900">Girls Masters</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {girlsMasters.map((r) => <ResultRow key={r.year} {...r} />)}
            </div>
          </div>

          {/* Girls CIF */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Medal className="w-7 h-7 text-blue-700" />
              <h2 className="text-3xl font-heading font-extrabold text-slate-900">Girls CIF</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {girlsCIF.map((r) => <ResultRow key={r.year} {...r} />)}
            </div>
          </div>

          {/* Boys Conference */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-7 h-7 text-blue-700" />
              <h2 className="text-3xl font-heading font-extrabold text-slate-900">Boys San Diego City Conference Championships</h2>
              <span className="text-sm text-slate-500 ml-2">{boysConference.length} titles</span>
            </div>
            <TitleStrip years={boysConference} color="red" />
            <p className="mt-3 text-xs text-slate-500">*1991 Inaugural Tournament</p>
          </div>

          {/* Girls Conference */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-7 h-7 text-blue-700" />
              <h2 className="text-3xl font-heading font-extrabold text-slate-900">Girls San Diego City Conference Championships</h2>
              <span className="text-sm text-slate-500 ml-2">{girlsConference.length} titles — {girlsConference.length} consecutive</span>
            </div>
            <TitleStrip years={girlsConference} color="red" />
            <p className="mt-3 text-xs text-slate-500">*2023 Inaugural Tournament</p>
          </div>

          {/* Girls League */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-7 h-7 text-blue-700" />
              <h2 className="text-3xl font-heading font-extrabold text-slate-900">Girls Western League Championships</h2>
              <span className="text-sm text-slate-500 ml-2">{girlsLeague.length} titles — {girlsLeague.length} consecutive</span>
            </div>
            <TitleStrip years={girlsLeague} />
            <p className="mt-3 text-xs text-slate-500">*2024 Inaugural Year</p>
          </div>

          {/* Boys League */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-7 h-7 text-blue-700" />
              <h2 className="text-3xl font-heading font-extrabold text-slate-900">Boys League Championships</h2>
              <span className="text-sm text-slate-500 ml-2">{boysLeague.length} titles — 15 consecutive</span>
            </div>
            <TitleStrip years={boysLeague} />
            <p className="mt-3 text-xs text-slate-500">
              Mira Mesa has competed in both leagues over time — Western (1978), Eastern (1980-2018), then Western again (2019-present).
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
              Individual Results
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Full Marauder individual results, year by year, by event.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {individualResults.map((r) =>
              r.href ? (
                <a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 p-5 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <span className="font-heading font-bold text-slate-900 text-lg">{r.label}</span>
                  <ExternalLink className="w-5 h-5 text-blue-700 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ) : (
                <div
                  key={r.label}
                  className="flex items-center justify-between gap-3 p-5 bg-white rounded-xl border border-dashed border-slate-300"
                >
                  <span className="font-heading font-bold text-slate-700 text-lg">{r.label}</span>
                  <span className="text-xs font-heading font-semibold text-slate-400 tracking-wider uppercase">Link coming</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
