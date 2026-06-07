"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GearCardProps {
  name: string;
  description: string;
  price: string;
  images: { src: string; alt: string }[];
  containImage?: boolean;
}

export default function GearCard({ name, description, price, images, containImage }: GearCardProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i! > 0 ? i! - 1 : images.length - 1));
  const next = () => setLightboxIndex((i) => (i! < images.length - 1 ? i! + 1 : 0));

  return (
    <>
      <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-lg transition-shadow">
        <button
          onClick={() => open(0)}
          className="relative w-full aspect-[4/3] bg-slate-100 block group"
          aria-label={`View ${name} photos`}
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className={containImage ? "object-contain p-4" : "object-cover"}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
          </div>
          {images.length > 1 && (
            <span className="absolute bottom-2 right-2 bg-black/50 text-white text-xs font-heading font-semibold px-2 py-1 rounded-md">
              1 / {images.length}
            </span>
          )}
        </button>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-heading font-extrabold text-slate-900 text-lg leading-snug">{name}</h2>
            <span className="text-blue-700 font-heading font-extrabold text-xl shrink-0">{price}</span>
          </div>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">{description}</p>
          {images.length > 1 && (
            <div className="mt-4 flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => open(i)}
                  className="relative w-14 h-14 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors shrink-0"
                  aria-label={`View photo ${i + 1}`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="56px" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative w-full max-w-2xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 text-white/80 hover:text-white"
                aria-label="Previous"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 text-white/80 hover:text-white"
                aria-label="Next"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                    className={`w-2 h-2 rounded-full transition-colors ${i === lightboxIndex ? "bg-white" : "bg-white/40"}`}
                    aria-label={`Go to photo ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
