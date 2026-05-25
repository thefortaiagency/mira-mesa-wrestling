import type { Metadata } from "next";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Coach Craig",
  description:
    "Contact Mira Mesa Wrestling — questions about joining the team, MMWC programs, donations, or any other inquiry. Email MiraMesaWrestling@gmail.com.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative py-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-slate-950 to-slate-950" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 relative z-10">
          <span className="text-yellow-300 text-sm font-heading font-semibold tracking-wider uppercase">Contact</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
            Reach Coach Craig.
          </h1>
          <p className="mt-5 text-xl text-slate-300 max-w-2xl">
            Joining the team, questions about programs, MMWC, donations — drop a
            note and Coach will get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-10">
                <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">
                  Email Coach Craig
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
                  Send a short email and Coach will get right back to you.
                </h2>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  To help Coach Craig route your message quickly, please include:
                </p>
                <ul className="mt-4 space-y-2 text-slate-700">
                  <li className="flex items-baseline gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0 translate-y-[-2px]" />
                    Your <strong>name</strong>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0 translate-y-[-2px]" />
                    Which <strong>program</strong> you&apos;re asking about (HS, MMWC Adults, Fall Guys, Marauder Machine, etc.)
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0 translate-y-[-2px]" />
                    Wrestler&apos;s <strong>age &amp; grade</strong> (if applicable)
                  </li>
                </ul>
                <a
                  href="mailto:MiraMesaWrestling@gmail.com?subject=Mira%20Mesa%20Wrestling%20inquiry"
                  className="mt-8 inline-flex items-center gap-3 px-7 py-3.5 bg-blue-700 text-white font-heading font-semibold rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  MiraMesaWrestling@gmail.com
                </a>
                <p className="mt-4 text-sm text-slate-500">
                  Coach responds within one business day.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <ContactCard
                icon={Mail}
                title="Email"
                primary="MiraMesaWrestling@gmail.com"
                primaryHref="mailto:MiraMesaWrestling@gmail.com"
                secondary="Response within one business day"
              />
              <ContactCard
                icon={MapPin}
                title="Mailing address (MMWC)"
                primary={"9450 Mira Mesa Blvd. #309\nSan Diego, CA 92126"}
                secondary="For check donations to MMWC 501(c)(3)"
              />
              <ContactCard
                icon={ExternalLink}
                title="Athletic Clearance Packet"
                primary="AthleticClearance.com"
                primaryHref="https://www.athleticclearance.com"
                secondary="Required to participate in MMHS wrestling"
                external
              />

              <div className="text-center pt-2">
                <Link href="/donation" className="text-blue-700 font-heading font-semibold hover:text-blue-800">
                  Want to donate instead? Donation options →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  primary,
  primaryHref,
  secondary,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  primary: string;
  primaryHref?: string;
  secondary?: string;
  external?: boolean;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-heading font-bold text-slate-900 text-base">{title}</h3>
          <p className="mt-1 whitespace-pre-line">
            {primaryHref ? (
              <a
                href={primaryHref}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-slate-900 font-semibold hover:text-blue-700"
              >
                {primary}
              </a>
            ) : (
              <span className="text-slate-900 font-semibold">{primary}</span>
            )}
          </p>
          {secondary && <p className="mt-1 text-sm text-slate-600">{secondary}</p>}
        </div>
      </div>
    </div>
  );
}
