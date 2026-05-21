import Link from "next/link";
import Image from "next/image";

const programs = [
  { label: "Boys & Girls HS Wrestling", href: "/about" },
  { label: "Fall Guys Youth (5-14)", href: "/mmwc#fall-guys" },
  { label: "MMWC Summer (MS/HS)", href: "/mmwc" },
  { label: "Adult / Veteran / Masters", href: "/masters" },
  { label: "Marauder Machine", href: "/mmwc#marauder-machine" },
];

const quickLinks = [
  { label: "Coaches", href: "/about" },
  { label: "Calendar", href: "/calendar" },
  { label: "History", href: "/history" },
  { label: "Photos", href: "/photos" },
  { label: "Resources", href: "/resources" },
  { label: "Programs", href: "/mmwc" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950">
      {/* CTA strip */}
      <div className="bg-blue-700">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-lg font-heading font-bold text-white">
            Support the Marauders — MMWC is a 501(c)(3).
          </h3>
          <Link
            href="/donation"
            className="px-6 py-2.5 bg-white text-blue-700 rounded-lg font-heading font-semibold hover:bg-slate-100 transition-colors text-sm"
          >
            Donate
          </Link>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/mm-logo.png"
                alt="Mira Mesa Marauders logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-white font-heading font-semibold text-lg">
                Mira Mesa Wrestling
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Boys &amp; Girls high school wrestling at Mira Mesa HS, plus
              year-round Mira Mesa Wrestling Club (MMWC) programs for ages 5 to 60.
              San Diego, California.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4 text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-slate-400 hover:text-yellow-300 transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4 text-sm tracking-wider uppercase">
              Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-slate-400 hover:text-yellow-300 transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4 text-sm tracking-wider uppercase">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <span className="text-white/40 text-xs uppercase tracking-wider block mb-1">Email</span>
                <a href="mailto:MiraMesaWrestling@gmail.com" className="hover:text-yellow-300 transition-colors">
                  MiraMesaWrestling@gmail.com
                </a>
              </li>
              <li>
                <span className="text-white/40 text-xs uppercase tracking-wider block mb-1">Mail</span>
                Mira Mesa Wrestling<br />
                9450 Mira Mesa Blvd. #309<br />
                San Diego, CA 92126
              </li>
              <li>
                <span className="text-white/40 text-xs uppercase tracking-wider block mb-1">501(c)(3) Tax ID</span>
                92-4020180
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} Mira Mesa Wrestling. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">
              Built by{" "}
              <a href="https://thefortaiagency.ai" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-300 transition-colors font-medium">
                The Fort AI Agency
              </a>
              {" "}&times;{" "}
              <a href="https://aimpactnexus.ai" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-300 transition-colors font-medium">
                AImpact Nexus
              </a>
            </span>
            <span className="hidden sm:inline w-px h-3 bg-slate-700" />
            <Link href="/privacy-policy" className="hover:text-yellow-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-yellow-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
