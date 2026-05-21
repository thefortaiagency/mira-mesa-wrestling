import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Mira Mesa Wrestling privacy policy. How we handle inquiries from athletes, parents, donors, and the information you share with us.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 prose prose-slate">
      <h1>Privacy Policy</h1>
      <p>
        Mira Mesa Wrestling and Mira Mesa Wrestling Club (MMWC, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;) are committed to protecting the privacy of athletes,
        families, donors, and visitors who contact us.
      </p>

      <h2>What we collect</h2>
      <p>
        When you submit a contact form, register for a program, or make a
        donation, we collect the information you provide — name, contact
        details, athlete age and school where relevant, and the message you
        send.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to your inquiry about joining the team or our programs.</li>
        <li>To process donations and provide tax receipts (MMWC is a 501(c)(3), Tax ID 92-4020180).</li>
        <li>To coordinate practices, matches, tournaments, and team communications.</li>
      </ul>

      <h2>How we don&rsquo;t use it</h2>
      <ul>
        <li>We don&rsquo;t sell your information to third parties.</li>
        <li>We don&rsquo;t share athlete or family information outside the coaching staff and program administration.</li>
        <li>We don&rsquo;t add you to outside marketing lists.</li>
      </ul>

      <h2>Athlete photos</h2>
      <p>
        We post team and match photos to our website and social channels
        (Facebook, Instagram). Athletes and parents can request a specific
        photo be removed at any time by emailing us.
      </p>

      <h2>Your rights</h2>
      <p>
        You can request a copy of your information, or ask us to delete it, by
        emailing{" "}
        <a href="mailto:MiraMesaWrestling@gmail.com">MiraMesaWrestling@gmail.com</a>.
      </p>

      <p className="text-sm text-slate-500 mt-12">Last updated: {new Date().getFullYear()}</p>
    </article>
  );
}
