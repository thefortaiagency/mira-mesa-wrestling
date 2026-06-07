import type { Metadata } from "next";
import Link from "next/link";
import GearCard from "@/components/GearCard";

export const metadata: Metadata = {
  title: "Gear — Mira Mesa Wrestling",
  description:
    "Mira Mesa Wrestling gear available for in-person purchase. All purchases support the Mira Mesa Wrestling Programs.",
};

const gearItems = [
  {
    name: "MMWC T-Shirt",
    description: "Royal blue MMWC logo tee with California outline on the left sleeve and Mira Mesa Wrestling on the right. Some sizes also available in white.",
    price: "$30",
    images: [
      { src: "/images/gear-tshirt.jpg", alt: "MMWC royal blue t-shirt with MMWC logo and California outline" },
      { src: "/images/gear-tshirt-white.jpg", alt: "MMWC white t-shirt with MMWC logo and California outline" },
    ],
    containImage: true,
  },
  {
    name: "MM T-Shirt",
    description: "Royal blue tee with the Marauder MM logo in blue and gold.",
    price: "$30",
    images: [
      { src: "/images/gear-mm-tshirt.jpg", alt: "Mira Mesa Wrestling navy blue t-shirt with MM logo in blue and gold" },
    ],
    containImage: true,
  },
  {
    name: "MM Hoodie",
    description: "Black pullover hoodie with the Marauder MM logo in blue and gold.",
    price: "$40",
    images: [
      { src: "/images/gear-mm-hoodie.jpg", alt: "Mira Mesa Wrestling black hoodie with MM logo in blue and gold" },
    ],
    containImage: true,
  },
  {
    name: "2014 CIF Championship Challenge Coin",
    description: "Commemorative challenge coin from the 2014 Boys CIF San Diego Section Division I Championship. MM logo on the front, CIF Champions on the back. A piece of program history.",
    price: "$10",
    images: [
      { src: "/images/gear-coin.jpg", alt: "2014 Mira Mesa Wrestling CIF Championship challenge coin — front and back" },
    ],
    containImage: true,
  },
  {
    name: "MMWC Towel",
    description: "Mira Mesa Wrestling Club towel with MMWC logo, navy and gold, USA Wrestling branding along the bottom.",
    price: "$10",
    images: [
      { src: "/images/gear-towel.jpg", alt: "MMWC white towel with navy and gold MMWC logo and USA Wrestling branding" },
    ],
    containImage: true,
  },
  {
    name: "Mira Mesa Wrestling Sunglasses",
    description: "Blue and black frames with the Mira Mesa Wrestling logo. Available while supplies last.",
    price: "$8",
    images: [
      { src: "/images/gear-sunglasses.jpg", alt: "Mira Mesa Wrestling sunglasses — blue and black frames with MM logo on arm" },
      { src: "/images/gear-sunglasses-2.jpg", alt: "Mira Mesa Wrestling sunglasses — logo detail on frame" },
    ],
  },
  {
    name: "Marauder Logo Sticker",
    description: "Reusable MM Marauder logo sticker. Sticks to water bottles, tumblers, laptops, and more.",
    price: "$5",
    images: [
      { src: "/images/gear-sticker.jpg", alt: "Mira Mesa Wrestling reusable MM logo sticker on a tumbler" },
    ],
    containImage: true,
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
              <GearCard key={item.name} {...item} />
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
