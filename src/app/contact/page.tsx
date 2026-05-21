import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
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
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-slate-950 to-slate-950" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 relative z-10">
          <span className="text-red-400 text-sm font-heading font-semibold tracking-wider uppercase">Contact</span>
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
              <ContactForm />
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

              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-slate-900">Fall Guys Youth Wrestling</h3>
                <p className="mt-2 text-sm text-slate-700">
                  Separate intake email for Fall Guys (ages 5-14):
                </p>
                <a
                  href="mailto:FallGuysWrestling@gmail.com"
                  className="mt-2 inline-block text-red-600 font-semibold"
                >
                  FallGuysWrestling@gmail.com
                </a>
              </div>

              <div className="text-center pt-2">
                <Link href="/donation" className="text-red-600 font-heading font-semibold hover:text-red-700">
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
        <div className="w-11 h-11 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
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
                className="text-slate-900 font-semibold hover:text-red-600"
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
