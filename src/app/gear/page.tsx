import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Gear — Mira Mesa Wrestling",
  description:
    "Mira Mesa Wrestling gear available for in-person purchase. Hoodies, singlets, spirit wear and more. Contact Coach Craig to inquire.",
};

export default function GearPage() {
  return (
    <>
      <section className="py-24 bg-blue-700">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <span className="text-yellow-300 text-sm font-heading font-semibold tracking-wider uppercase">
            Gear
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
            Mira Mesa Wrestling Gear
          </h1>
          <p className="mt-5 text-lg text-blue-100 leading-relaxed max-w-2xl">
            Available for in-person purchase. Stop by the room or reach out to Coach Craig to inquire about availability.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-heading font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Inquire about gear
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <p className="text-slate-500 text-lg">Gear listings coming soon.</p>
        </div>
      </section>
    </>
  );
}
