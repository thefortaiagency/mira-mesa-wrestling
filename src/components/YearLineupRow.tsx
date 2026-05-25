"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Users } from "lucide-react";

export interface Wrestler {
  name: string;
  grade: number;
}

export interface YearLineupData {
  title: string;
  lineup: Wrestler[];
  coaches?: { headCoach?: string; assistants?: string[] };
  photoSrc?: string;
  photoAlt?: string;
}

interface Props {
  year: string;
  result: string;
  tier: "champion" | "runner";
  data?: YearLineupData;
}

export function YearLineupRow({ year, result, tier, data }: Props) {
  const [open, setOpen] = useState(false);
  const isChamp = tier === "champion";
  const clickable = !!data;

  // Lock body scroll while modal is open + close on Esc
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

  const rowClass = `flex items-center justify-between gap-4 p-4 rounded-lg border w-full text-left transition-all ${
    isChamp ? "bg-blue-50 border-blue-200" : "bg-white border-slate-200"
  } ${clickable ? "hover:border-yellow-400 hover:shadow-md cursor-pointer" : ""}`;

  const row = (
    <>
      <span className={`font-heading font-bold text-lg ${isChamp ? "text-blue-800" : "text-slate-700"}`}>
        {year}
      </span>
      <div className="flex items-center gap-3">
        {clickable && (
          <span className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-blue-700">
            <Users className="w-3.5 h-3.5" />
            View lineup
          </span>
        )}
        <span
          className={`font-heading font-semibold text-sm tracking-wider uppercase ${
            isChamp ? "text-blue-800" : "text-slate-500"
          }`}
        >
          {result}
        </span>
      </div>
    </>
  );

  return (
    <>
      {clickable ? (
        <button type="button" onClick={() => setOpen(true)} className={rowClass}>
          {row}
        </button>
      ) : (
        <div className={rowClass}>{row}</div>
      )}

      {open && data && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`lineup-${year}-title`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-6 border-b border-slate-200 sticky top-0 bg-white">
              <div>
                <p className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase">
                  Lineup
                </p>
                <h2
                  id={`lineup-${year}-title`}
                  className="mt-1 text-2xl sm:text-3xl font-heading font-extrabold text-slate-900"
                >
                  {data.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close lineup"
                className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center shrink-0 transition-colors"
              >
                <X className="w-5 h-5 text-slate-700" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {data.photoSrc ? (
                <div className="rounded-xl overflow-hidden border border-slate-200">
                  <Image
                    src={data.photoSrc}
                    alt={data.photoAlt || `${data.title} team photo`}
                    width={1600}
                    height={1000}
                    className="w-full h-auto object-cover"
                    sizes="(min-width: 768px) 720px, 100vw"
                  />
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500 italic">
                  Team photo coming.
                </div>
              )}

              {data.coaches && (data.coaches.headCoach || data.coaches.assistants?.length) && (
                <div>
                  <p className="text-xs font-heading font-semibold text-slate-500 tracking-wider uppercase mb-3">
                    Coaches
                  </p>
                  <div className="space-y-2">
                    {data.coaches.headCoach && (
                      <div className="flex items-baseline gap-3">
                        <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase w-20 shrink-0">
                          Head
                        </span>
                        <span className="font-heading font-semibold text-slate-900">{data.coaches.headCoach}</span>
                      </div>
                    )}
                    {data.coaches.assistants && data.coaches.assistants.length > 0 && (
                      <div className="flex items-baseline gap-3">
                        <span className="text-xs font-heading font-semibold text-blue-700 tracking-wider uppercase w-20 shrink-0">
                          Assistants
                        </span>
                        <span className="font-heading font-semibold text-slate-900">
                          {data.coaches.assistants.join(", ")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div>
                <p className="text-xs font-heading font-semibold text-slate-500 tracking-wider uppercase mb-3">
                  Roster ({data.lineup.length})
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {data.lineup.map((w) => (
                    <li
                      key={w.name}
                      className="flex items-baseline justify-between gap-3 py-1.5 border-b border-slate-100 last:border-0"
                    >
                      <span className="font-heading font-semibold text-slate-900">{w.name}</span>
                      <span className="text-xs font-heading font-semibold text-slate-500 tabular-nums">
                        Grade {w.grade}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
