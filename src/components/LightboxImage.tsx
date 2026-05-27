"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  objectPosition?: string;
}

export function LightboxImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  sizes,
  objectPosition,
}: Props) {
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
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge: ${alt}`}
        className={`relative block w-full h-full cursor-zoom-in group ${fill ? "" : ""}`}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className={className}
            sizes={sizes}
            style={objectPosition ? { objectPosition } : undefined}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 1200}
            height={height || 800}
            className={className}
            sizes={sizes}
          />
        )}
        <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-slate-900/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
          <ZoomIn className="w-4 h-4" />
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-950/90 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label="Close enlarged image"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative max-w-[95vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1280}
              className="object-contain max-w-[95vw] max-h-[90vh] w-auto h-auto rounded-lg shadow-2xl"
              sizes="95vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
