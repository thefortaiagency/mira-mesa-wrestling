import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gear — Mira Mesa Wrestling",
  description:
    "Mira Mesa Wrestling gear available for in-person purchase. All purchases support the Mira Mesa Wrestling Programs.",
};

const gearItems = [
  {
    name: "Mira Mesa Wrestling Sunglasses",
    description: "Blue and black frames with the Mira Mesa Wrestling logo. Available while supplies last.",
    price: "$8",
    image: "/images/gear-sunglasses.jpg",
    alt: "Mira Mesa Wrestling branded sunglasses — blue and black frames with MM logo",
  },
  {
    name: "Marauder Logo Sticker",
    description: "Reusable MM Marauder logo sticker. Sticks to water bottles, tumblers, laptops, and more.",
    price: "$5",
    image: "/images/gear-sticker.jpg",
    alt: "Mira Mesa Wrestling reusable MM logo sticker on a tumbler",
  },
];

export default function GearPage() {
  return (
    <>
      <section className="py-20 bg-blue-700">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <span className="text-yellow-300 text-sm font-heading font-semibold tracking-wider uppercase">
            Gear
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
            Mira Mesa Wrestling Gear
          </h1>
          <p className="mt-4 text-blue-100 text-lg max-w-2xl">
            All purchases help support the Mira Mesa Wrestling Programs. Available for in-person purchase — stop by the room or contact Coach Craig to arrange.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gearItems.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-heading font-extrabold text-slate-900 text-lg leading-snug">
                      {item.name}
                    </h2>
                    <span className="text-blue-700 font-heading font-extrabold text-xl shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-slate-200 pt-12 text-center">
            <p className="text-slate-600 text-lg mb-6">
              To purchase, stop by the wrestling room or reach out directly.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-heading font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Contact Coach Craig
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
