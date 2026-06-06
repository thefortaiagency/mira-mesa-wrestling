import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BadgeCheck,
  ClipboardCheck,
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
    icon: ClipboardCheck,
    title: "Athletic Clearance — Register to Compete",
    href: "https://www.athleticclearance.com/",
  },
  {
    icon: BadgeCheck,
    title: "USA Wrestling Membership",
    href: "https://www.usawmembership.com/",
  },
  {
    icon: Stethoscope,
    title: "Skin Infection — Doctor Form",
    href: "https://www.cifstate.org/sports/wrestling/skin/2019-20_NFHS_Wrestling_Skin_Lesion_Form.pdf",
  },
  {
    icon: ShieldAlert,
    title: "Cauliflower Ear — Treatment Guide 1",
    href: "https://www.caulibuds.com/",
  },
  {
    icon: ShieldAlert,
    title: "Draining Cauliflower Ear",
    href: "https://www.caulibuds.com/pages/how-to-drain-cauliflower-ear",
  },
  {
    icon: ShieldAlert,
    title: "Cauliflower Ear — Treatment Guide 2",
    href: "https://www.caulicure.com/",
  },
];

const wrestlingLinks = [
  { title: "Grit n Gut", description: "Mindset, nutrition, and conditioning for combat athletes.", href: "https://gritngut.com", domain: "gritngut.com" },
  { title: "Aether VTC", description: "Virtual training and visualization for wrestlers.", href: "https://www.aethervtc.ai", domain: "aethervtc.ai" },
  { title: "Pin 'em 4-6", description: "Wrestling community + training resources. By Coach Brown.", href: "https://pinem46.com/", domain: "pinem46.com" },
  { title: "USA Wrestling", description: "National governing body for amateur wrestling in the US.", href: "https://www.themat.com/", domain: "themat.com" },
  { title: "FloWrestling", description: "Live streaming, news, and rankings for all levels of wrestling.", href: "https://www.flowrestling.org/", domain: "flowrestling.org" },
  { title: "CIF San Diego Section", description: "Section governing body for San Diego high school athletics.", href: "https://www.cifsds.org/", domain: "cifsds.org" },
];

const newsArticles = [
  {
    title: "Precin, Nunn earn gold; U.S. tops Freestyle team ranking at Veteran World Championships",
    source: "TheMat.com (USA Wrestling)",
    date: "October 9, 2025",
    href: "https://www.themat.com/news/2025/october/09/precin-nunn-earn-gold-u-s-tops-freestyle-team-ranking-at-veteran-world-championships",
  },
  {
    title: "KUSI Sports — Mira Mesa Wrestling feature",
    source: "KUSI Sports (Instagram · @kusisports)",
    date: "",
    href: "https://www.instagram.com/p/BthlDC8H07G/",
  },
  {
    title: "Mira Mesa captures first CIF boys wrestling title in a decade",
    source: "San Diego Union-Tribune",
    date: "February 10, 2024",
    href: "https://www.sandiegouniontribune.com/sports/high-school-preps/story/2024-02-10/mira-mesa-captures-first-cif-boys-wrestling-title-in-a-decade",
  },
  {
    title: "Mira Mesa grapplers win Girls Masters title",
    source: "San Diego Union-Tribune",
    date: "February 12, 2022",
    href: "https://www.sandiegouniontribune.com/2022/02/12/mira-mesa-grapplers-win-girls-masters-title/",
  },
  {
    title: "Mira Mesa claims its first CIF championship",
    source: "San Diego Union-Tribune",
    date: "February 22, 2014",
    href: "https://www.sandiegouniontribune.com/sports/high-school-preps/sdut-mira-mesa-claims-its-first-championship-2014feb22-story.html",
  },
  {
    title: "Female wrestler at Mira Mesa HS: Birta McCaskill",
    source: "CBS 8 San Diego",
    date: "",
    href: "https://www.cbs8.com/article/sports/female-wrestler-mira-mesa-birta-mccaskill/509-83208e0c-3908-451c-a28b-6498c148ba0c",
  },
  {
    title: "The American Dream: Mira Mesa community helps high school wrestler from Uzbekistan",
    source: "NBC 7 San Diego",
    date: "January 4, 2024",
    href: "https://www.nbcsandiego.com/news/local/the-american-dream-mira-mesa-community-helps-high-school-wrestler-from-uzbekistan/3395629/",
  },
  {
    title: "Immense losses yield great victories for father and son",
    source: "Mira Mesa Living Blog",
    date: "June 14, 2019",
    href: "https://miramesalivingblog.wordpress.com/2019/06/14/immense-losses-yield-great-victories-for-father-and-son/",
  },
  {
    title: "Coast to Coast Champion",
    source: "Mira Mesa Living Blog",
    date: "August 31, 2018",
    href: "https://miramesalivingblog.wordpress.com/2018/08/31/coast-to-coast-champion/",
  },
  {
    title: "Additional Mira Mesa wrestling stories",
    source: "Mira Mesa Living Blog (search)",
    date: "",
    href: "https://miramesalivingblog.wordpress.com/?s=wrestling",
  },
];

const classicMatches = [
  { title: "McIlravy vs Abas — NCAA National Title Match", href: "https://www.youtube.com/watch?v=OKr7_PfQX5s" },
  { title: "Greco-Roman: Gardner vs Karelin — Olympic Title Match", href: "https://www.youtube.com/watch?v=oVT3-wbL8HU" },
  { title: "Freestyle: Gable Steveson — Olympic Title Match", href: "https://www.youtube.com/watch?v=fSXPmihrX3c" },
  { title: "Freestyle: Cael Sanderson — Olympic Title Match", href: "https://www.youtube.com/watch?v=0y7SQ8_nwpg" },
  { title: "Freestyle: Tom Brands — Olympic Title Match", href: "https://www.youtube.com/watch?v=HB9-018lX7s" },
  { title: "Dan Gable Documentary", href: "https://www.youtube.com/watch?v=TZyz4Jk1LrY" },
];

const readingLinks = [
  {
    title: "Top 10 Wrestlers Who Played in the NFL",
    source: "National Wrestling Hall of Fame",
    href: "https://nwhof.org/news/top-10-wrestlers-who-played-in-nfl",
  },
  {
    title: "MMHS Wrestler on the Wrestling Benefit",
    source: "Instagram",
    href: "https://www.instagram.com/p/C7prMiVv2gS/",
  },
  {
    title: "Why Mike Gundy loves finding ex-wrestlers for Oklahoma State's defense",
    source: "ESPN",
    href: "https://www.espn.com/college-football/story/_/id/32770530/why-mike-gundy-loves-finding-ex-wrestlers-oklahoma-state-defense",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="relative min-h-[55vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/resources-hero.jpg"
            alt="Mira Mesa boys wrestling team celebrating the 2024 CIF San Diego Section Division II Championship"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/20 lg:hidden" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 from-8% via-slate-950/35 to-slate-950/0" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-16 relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="text-yellow-300 text-sm font-heading font-semibold tracking-wider uppercase">Resources</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
              For wrestlers, families, and the wrestling-curious
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-200 leading-relaxed">
              Health and hygiene guidance, the wrestling sites we actually use,
              and the classic matches every Marauder should study.
            </p>
          </div>
        </div>
      </section>

      {/* Health & Hygiene */}
      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">Health & Hygiene</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
              Stay on the mat — clean skin, intact ears, cleared to compete.
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {healthSection.map((h) => {
              const Icon = h.icon;
              return (
                <li key={h.title}>
                  <a
                    href={h.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all hover:no-underline"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading font-bold text-slate-900 text-sm leading-snug flex items-start gap-1.5">
                        <span>{h.title}</span>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-700 transition-colors shrink-0 mt-1" />
                      </h3>
                    </div>
                  </a>
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
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">News & Media</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
              Marauders in the media.
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Articles, results write-ups, and coverage involving Mira Mesa Wrestling and the staff.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((n) => (
              <a
                key={n.href}
                href={n.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-yellow-300 hover:shadow-md transition-all hover:no-underline"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Newspaper className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-1.5 leading-snug">
                    <span>{n.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-yellow-400 transition-colors shrink-0" />
                  </h3>
                </div>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{n.source}</p>
                {n.date && <p className="mt-3 text-xs text-slate-400 font-mono">{n.date}</p>}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Classic Matches */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">Watch</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
              Classic matches every wrestler should know.
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Film study isn&apos;t just for football. The wrestlers below changed how
              the sport is wrestled at the highest level.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {classicMatches.map((m) => (
              <a
                key={m.href}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-yellow-300 hover:shadow-md transition-all hover:no-underline"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <PlayCircle className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-1.5 leading-snug">
                    <span>{m.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-yellow-400 transition-colors shrink-0" />
                  </h3>
                </div>
                <p className="mt-3 text-xs text-slate-400 font-mono">youtube.com</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Football crossover + community articles */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">Reading</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
              Wrestling makes you a better everything.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {readingLinks.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-yellow-300 hover:shadow-md transition-all hover:no-underline"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-1.5 leading-snug">
                    <span>{r.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-yellow-400 transition-colors shrink-0" />
                  </h3>
                </div>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{r.source}</p>
              </a>
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
            Have a resource to add? Email Coach Craig
          </Link>
        </div>
      </section>
    </>
  );
}
