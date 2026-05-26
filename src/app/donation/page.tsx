import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Heart, CreditCard, Mail, Smartphone, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Donate to Mira Mesa Wrestling Club",
  description:
    "Support Mira Mesa Wrestling Club — a 501(c)(3) Tax ID 92-4020180. Donate via GiveButter, Zelle, Venmo, check, or bank transfer. Every dollar funds youth, high school, and adult wrestling at Mira Mesa.",
};

export default function DonationPage() {
  return (
    <>
      <section className="relative min-h-[55vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/donation-hero.jpg"
            alt="Mira Mesa wrestlers leaping in joy in front of the Mira Mesa High School Marauders sign"
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
            <span className="text-yellow-300 text-sm font-heading font-semibold tracking-wider uppercase">Donate</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
              Help young athletes live their dreams
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-200 leading-relaxed">
              Mira Mesa Wrestling Club is a 501(c)(3) (Tax ID 92-4020180). Every
              contribution is tax-deductible and goes directly to wrestlers —
              youth, high school, and adult — training at Mira Mesa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DonateCard
              icon={Heart}
              title="GiveButter (recommended)"
              description="Multiple options through one form: Google Pay, PayPal, Venmo, bank transfer, or bank check."
              cta="Donate via GiveButter"
              href="https://givebutter.com/"
              external
              featured
            />
            <DonateCard
              icon={Smartphone}
              title="Zelle (preferred direct method)"
              description="Send directly via Zelle to:"
              detail="MiraMesaWrestlingClub@gmail.com"
            />
            <DonateCard
              icon={CreditCard}
              title="Venmo"
              description="Send via Venmo to:"
              detail="@MMwrestlingclub"
            />
            <DonateCard
              icon={Mail}
              title="Donate by Check"
              description="Make checks payable to Mira Mesa Wrestling and mail to:"
              detail={"Mira Mesa Wrestling\n9450 Mira Mesa Blvd. #309\nSan Diego, CA 92126"}
            />
            <DonateCard
              icon={Building}
              title="Employer Matching"
              description="Many employers match charitable gifts to 501(c)(3)s. Ask your HR department about matching gifts to MMWC (Tax ID 92-4020180)."
            />
            <DonateCard
              icon={Heart}
              title="Direct Contact"
              description="For larger gifts, sponsorships, or in-kind donations, reach out to Coach Craig directly."
              cta="Email Coach Craig"
              href="mailto:MiraMesaWrestling@gmail.com"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading font-bold text-slate-900">Where does your gift go?</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Tournament entry fees, travel for state and national competition,
            wrestling shoes and gear for athletes who need them, mat repairs,
            youth program scholarships, and the equipment that keeps a
            championship room running.
          </p>
          <p className="mt-6 text-sm text-slate-500">
            MMWC Tax ID: <span className="font-mono font-semibold">92-4020180</span>
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-heading font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Questions? Email Coach Craig
          </Link>
        </div>
      </section>
    </>
  );
}

function DonateCard({
  icon: Icon,
  title,
  description,
  detail,
  cta,
  href,
  external,
  featured,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  detail?: string;
  cta?: string;
  href?: string;
  external?: boolean;
  featured?: boolean;
}) {
  return (
    <div
      className={`p-8 rounded-2xl border bg-white flex flex-col ${
        featured ? "border-yellow-300 ring-2 ring-blue-100 shadow-md" : "border-slate-200 hover:border-blue-200 hover:shadow-md"
      } transition-all`}
    >
      <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="mt-5 font-heading font-bold text-slate-900 text-lg">{title}</h3>
      <p className="mt-3 text-slate-600 text-sm leading-relaxed">{description}</p>
      {detail && (
        <p className="mt-3 text-slate-900 font-mono font-semibold text-sm whitespace-pre-line">
          {detail}
        </p>
      )}
      {cta && href && (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="mt-auto pt-5 inline-flex items-center gap-1 text-blue-700 font-heading font-semibold text-sm hover:text-blue-800"
        >
          {cta}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      )}
    </div>
  );
}
