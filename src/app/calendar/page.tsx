import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Calendar — Schedule",
  description:
    "Mira Mesa Wrestling practice schedule, dual meets, tournaments, and CIF dates. Live Google Calendar — what's on Coach Craig's calendar is what's on the page.",
};

// "Wrestling Team" — the public Google Calendar Craig maintains for the program.
const CALENDAR_EMBED_URL =
  "https://calendar.google.com/calendar/embed?src=69f7uqmgp62uciabmgdr7cdf14%40group.calendar.google.com&ctz=America%2FLos_Angeles&mode=AGENDA&showTitle=0&showPrint=0&showCalendars=0&showTz=0";

export default function CalendarPage() {
  return (
    <>
      <section className="relative py-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-slate-950 to-slate-950" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 relative z-10">
          <span className="text-yellow-300 text-sm font-heading font-semibold tracking-wider uppercase">Calendar</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
            Practices, matches, tournaments.
          </h1>
          <p className="mt-5 text-xl text-slate-300 max-w-2xl">
            Live from Coach Craig&apos;s Google Calendar. Updates here in real-time —
            no separate website calendar to keep in sync.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-6 h-6 text-blue-700" />
              <h2 className="font-heading font-bold text-slate-900 text-xl">
                MMW Master Calendar
              </h2>
            </div>
            <a
              href="https://calendar.google.com/calendar/u/0/r?cid=MiraMesaWrestling@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-700 font-heading font-semibold hover:text-blue-800 text-sm"
            >
              Add to your Google Calendar
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              src={CALENDAR_EMBED_URL}
              style={{ border: 0 }}
              width="100%"
              height="700"
              frameBorder="0"
              scrolling="no"
              title="Mira Mesa Wrestling Calendar"
            />
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Calendar not showing yet? The embed pulls from{" "}
            <code className="font-mono">MiraMesaWrestling@gmail.com</code>. The
            calendar owner needs to make it public in Google Calendar settings
            (Settings &rarr; Calendar &rarr; Access permissions &rarr; &ldquo;Make
            available to public&rdquo;) for the embed to display.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-slate-600 mb-6">Questions about a specific event?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-700 text-white font-heading font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Email Coach Craig
          </Link>
        </div>
      </section>
    </>
  );
}
