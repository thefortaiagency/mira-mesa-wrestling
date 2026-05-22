import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Globe, Users, Zap, CheckCircle2, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Adult / Veteran / Masters Wrestling Training in San Diego",
  description:
    "MMWC adult, veteran, and masters wrestling training in San Diego for ages 18-60. Coached by Team USA Veteran National Team Co-Head Coach Craig VanDyke — Veteran Freestyle World Champions 2021, 2022, 2023, 2024, 2025. Year-round Freestyle, Greco-Roman, and Folkstyle (Collegiate). Sundays & Wednesdays. $100/month.",
  keywords: [
    "Adult Wrestling San Diego",
    "Veteran Wrestling San Diego",
    "Masters Wrestling San Diego",
    "Wrestling training adults California",
    "USA Wrestling Masters Club",
    "Freestyle wrestling San Diego adults",
    "Greco-Roman wrestling adults",
    "Team USA Veteran Wrestling",
    "Veteran World Championships training",
  ],
};

const trainingFAQ = [
  {
    q: "What is Veteran / Masters wrestling?",
    a: "USA Wrestling Veteran (also called Masters in some federations) is the adult competitive division for wrestlers age 35 and up, with weight classes and age-group brackets through age 60+. It's organized internationally by United World Wrestling. MMWC's adult program prepares wrestlers for local, national (USAW Veteran Nationals), and World-level events.",
  },
  {
    q: "Why train at MMWC specifically?",
    a: "Coach VanDyke is an active Team USA Veteran National Team Co-Head Coach — meaning he's coaching at the highest level of adult international wrestling. Veteran Freestyle World Champions 2021, 2022, 2023, 2024, 2025. Veteran Greco-Roman World Champions 2022 and 2023. The technique you get is the technique the team is actually winning Worlds with.",
  },
  {
    q: "I haven't wrestled in years (or ever). Can I start?",
    a: "Yes. The adult program ranges from former NCAA wrestlers tuning up for Worlds to total beginners learning a position for the first time. Coach scales practice to who's in the room.",
  },
  {
    q: "Do I need a USA Wrestling card?",
    a: "Yes — a current USA Wrestling membership is required to train (and to compete at any sanctioned event). You can purchase your card at usawmembership.com — pick the Adult / Athlete card.",
  },
  {
    q: "What about all three styles — Folkstyle, Freestyle, Greco?",
    a: "All three are taught. Folkstyle dominates high school in the US, but adult international competition (and Veteran Worlds) is Freestyle and Greco-Roman. The program builds across all three so wrestlers are competition-ready in whichever style they choose.",
  },
];

export default function MastersPage() {
  return (
    <>
      <section className="relative py-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-slate-950 to-slate-950" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 relative z-10">
          <span className="text-yellow-300 text-sm font-heading font-semibold tracking-wider uppercase">Adult · Veteran · Masters</span>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight max-w-4xl">
            Train under a Team USA coach.
          </h1>
          <p className="mt-5 text-xl text-slate-300 max-w-2xl">
            San Diego&apos;s wrestling room for adult competitors, returning athletes, and total beginners — ages 18 to 60.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-blue-700 text-white font-heading font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Start training
            </Link>
            <a
              href="https://www.usawmembership.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-white/10 text-white font-heading font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20 inline-flex items-center gap-2"
            >
              Get your USA Wrestling card
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Program facts */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "Age range", value: "18 - 60" },
              { icon: Zap, label: "Cost", value: "$100 / month" },
              { icon: Globe, label: "Schedule", value: "Year-round · Sun & Wed" },
              { icon: Trophy, label: "Styles", value: "Freestyle · Greco-Roman · Folkstyle (Collegiate)" },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <Icon className="w-7 h-7 text-blue-700" />
                  <p className="mt-4 text-xs text-slate-500 font-heading font-semibold tracking-wider uppercase">
                    {s.label}
                  </p>
                  <p className="mt-1 text-slate-900 font-heading font-extrabold text-2xl">{s.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why MMWC */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">
                Why MMWC for adults
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
                Coached by an active Team USA assistant.
              </h2>
              <p className="mt-6 text-slate-700 leading-relaxed text-lg">
                Most adult wrestling rooms in Southern California are open mats —
                you come, you partner up, you spar, you leave. The technique
                doesn&apos;t evolve.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed text-lg">
                MMWC is run as a coached program. Coach VanDyke is currently on
                the Team USA Veteran National Team coaching staff — Freestyle
                World Champions <strong>2021, 2022, 2023, 2024, and 2025</strong>;
                Greco-Roman World Champions <strong>2022 and 2023</strong>. The
                technique you drill is the technique that&apos;s winning World
                titles right now.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Active Team USA Veteran coaching staff",
                  "All three styles: Freestyle, Greco-Roman, Folkstyle (Collegiate)",
                  "Year-round training (not just seasonal)",
                  "Beginner-friendly — scaled to who's in the room",
                  "Competition prep for USA Wrestling Veteran events through Worlds",
                ].map((b) => (
                  <li key={b} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-transparent to-transparent" />
              <div className="relative z-10">
                <span className="text-xs text-yellow-300 font-heading font-semibold tracking-wider uppercase">
                  At a glance
                </span>
                <h3 className="mt-3 text-2xl font-heading font-extrabold">MMWC Adult Training</h3>
                <dl className="mt-6 space-y-4">
                  <Row label="Schedule" value="Year-round · Sundays & Wednesdays" />
                  <Row label="Tuition" value="$100 / month" />
                  <Row label="Ages" value="18 - 60" />
                  <Row label="Styles" value="Freestyle · Greco-Roman · Folkstyle (Collegiate)" />
                  <Row label="Required" value="Current USA Wrestling card" />
                  <Row label="Location" value="Mira Mesa High School wrestling room, San Diego" />
                  <Row label="Coach" value="Craig VanDyke — Team USA Veteran asst." />
                </dl>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-blue-700 text-white font-heading font-semibold rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Start training
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
            Common questions about adult wrestling.
          </h2>
          <div className="mt-12 space-y-6">
            {trainingFAQ.map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="font-heading font-bold text-slate-900 text-lg">{f.q}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: trainingFAQ.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pb-3 border-b border-white/10 last:border-0">
      <dt className="text-xs text-slate-400 font-heading font-semibold tracking-wider uppercase">{label}</dt>
      <dd className="text-white text-sm font-medium">{value}</dd>
    </div>
  );
}
