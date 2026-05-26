import { Trophy } from "lucide-react";

const titles = [
  "2024 Boys CIF Champions",
  "2014 Boys CIF Champions",
  "2022 Girls SDS Masters Champions",
];

export function ChampionshipBanner() {
  return (
    <section className="bg-blue-900 border-y-2 border-yellow-400/40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-5">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {titles.map((title) => (
            <span
              key={title}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/60 text-yellow-300 text-xs sm:text-sm font-heading font-semibold tracking-wider uppercase border border-yellow-400/40"
            >
              <Trophy className="w-4 h-4" />
              {title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
