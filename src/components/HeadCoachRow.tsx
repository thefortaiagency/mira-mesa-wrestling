"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Image as ImageIcon } from "lucide-react";

interface Props {
  years: string;
  name: string;
  note?: string;
  photo?: {
    src: string;
    alt: string;
    caption?: string;
  };
}

export function HeadCoachRow({ years, name, note, photo }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
      <div className="text-blue-700 font-heading font-bold text-sm sm:w-32 shrink-0">{years}</div>
      <div className="flex-1">
        <h3 className="font-heading font-bold text-slate-900 text-lg">
          {photo ? (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 underline decoration-yellow-400 decoration-2 underline-offset-4 transition-colors"
              aria-label={`View photo of ${name}`}
            >
              {name}
              <ImageIcon className="w-4 h-4" />
            </button>
          ) : (
            name
          )}
        </h3>
        {note && <p className="text-slate-600 text-sm mt-1">{note}</p>}
      </div>

      {open && photo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`coach-${name.replace(/\s+/g, "-")}-title`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-6 border-b border-slate-200">
              <div>
                <p className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">{years}</p>
                <h2
                  id={`coach-${name.replace(/\s+/g, "-")}-title`}
                  className="mt-1 text-2xl sm:text-3xl font-heading font-extrabold text-slate-900"
                >
                  {name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center shrink-0 transition-colors"
              >
                <X className="w-5 h-5 text-slate-700" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="rounded-xl overflow-hidden border border-slate-200">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1200}
                  height={1500}
                  className="w-full h-auto object-cover"
                  sizes="(min-width: 768px) 560px, 100vw"
                />
              </div>
              {photo.caption && <p className="text-sm text-slate-600 italic text-center">{photo.caption}</p>}
              {note && <p className="text-slate-700 text-sm leading-relaxed">{note}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
