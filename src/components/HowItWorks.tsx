"use client";

import { motion } from "framer-motion";

const letters = [
  {
    letter: "G",
    title: "Gratitude",
    description: "Each morning for another day and the many opportunities that come with it.",
  },
  {
    letter: "R",
    title: "Respect",
    description: "For your opponent, the officials, the sport, yourself, and to those who pour into us.",
  },
  {
    letter: "A",
    title: "Awareness",
    description: "Of your effort, your impact, your influence on the room — both on and off the mat.",
  },
  {
    letter: "C",
    title: "Communication",
    description: "Clear, honest, direct — with teammates, coaches, family, opponents.",
  },
  {
    letter: "E",
    title: "Embrace",
    description: "The grind, the wins, the losses, the people. Wrestling rewards the ones who lean in.",
  },
];

export function HowItWorks() {
  return (
    <section id="grace" className="py-24 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-blue-700 text-sm font-heading font-semibold tracking-wider uppercase">
            Philosophy
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-sofachrome text-slate-900 leading-tight tracking-wide">
            G&middot;R&middot;A&middot;C&middot;E
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Mira Mesa Wrestling seeks to build lifelong success in young men and women
            through the ancient sport of wrestling. GRACE prepares wrestlers for the
            mat — and for what comes after.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {letters.map((l, i) => (
            <motion.div
              key={l.letter}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow ring-1 ring-black/5 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-700 text-white flex items-center justify-center font-sofachrome text-4xl mx-auto leading-none">
                <span className="translate-y-[1px]">{l.letter}</span>
              </div>
              <h3 className="mt-5 text-lg font-heading font-bold text-slate-900">{l.title}</h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">{l.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
