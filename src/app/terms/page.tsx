import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Mira Mesa Wrestling terms of use for this website.",
};

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 prose prose-slate">
      <h1>Terms of Use</h1>
      <p>
        These terms cover use of the Mira Mesa Wrestling website. Participation
        in any team, program, or event is governed by separate athletic
        agreements with Mira Mesa High School and/or Mira Mesa Wrestling Club.
      </p>

      <h2>Informational content</h2>
      <p>
        Content on this site — schedules, program information, history, and
        wrestling resources — is provided for general informational purposes.
        Schedules and program details can change; the live Google Calendar
        embedded on the Calendar page is the most current source.
      </p>

      <h2>External links</h2>
      <p>
        We link to USA Wrestling, CIF San Diego Section, FloWrestling, and
        other authoritative sources. We don&rsquo;t control those sites and
        aren&rsquo;t responsible for their content.
      </p>

      <h2>Donations</h2>
      <p>
        All donations are made to Mira Mesa Wrestling Club (MMWC), a 501(c)(3)
        organization (Tax ID 92-4020180). Donations are tax-deductible to the
        extent allowed by law. Refunds for accidental duplicate gifts can be
        requested by emailing MiraMesaWrestling@gmail.com within 30 days.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        Mira Mesa Wrestling and MMWC provide this website &ldquo;as is&rdquo;
        without warranties of any kind. We&rsquo;re not liable for indirect,
        incidental, or consequential damages from your use of the site.
      </p>

      <p className="text-sm text-slate-500 mt-12">Last updated: {new Date().getFullYear()}</p>
    </article>
  );
}
