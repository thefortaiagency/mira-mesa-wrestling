"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Calendar", href: "/calendar" },
  { label: "History", href: "/history" },
  { label: "Photos", href: "/photos" },
  { label: "Resources", href: "/resources" },
  { label: "MMWC", href: "/mmwc" },
  { label: "Masters", href: "/masters" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-slate-950 text-sm hidden md:block">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 text-slate-400">
            <a href="mailto:MiraMesaWrestling@gmail.com" className="hover:text-white transition-colors">
              MiraMesaWrestling@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-xs">
              Facebook
            </a>
            <span className="w-px h-3 bg-slate-700" />
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-xs">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/mm-logo.png"
              alt="Mira Mesa Marauders logo"
              width={44}
              height={44}
              className="w-11 h-11 object-contain"
              priority
            />
            <div>
              <span className="text-slate-900 font-heading font-bold text-lg tracking-tight">
                Mira Mesa Wrestling
              </span>
              <span className="hidden lg:block text-[10px] text-slate-500 tracking-widest uppercase">
                Marauders &middot; San Diego
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/donation"
              className="hidden sm:inline-flex px-6 py-2.5 bg-blue-700 text-white font-heading font-semibold text-sm rounded-lg hover:bg-blue-800 transition-colors"
            >
              Donate
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-50 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-slate-900 rounded-full"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-0.5 w-full bg-slate-900 rounded-full"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-slate-900 rounded-full"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-slate-200"
            >
              <nav className="px-6 py-4 flex flex-col gap-1 bg-white">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors font-medium"
                >
                  Contact
                </Link>
                <Link
                  href="/donation"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 px-6 py-3.5 bg-blue-700 text-white font-heading font-semibold text-center rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Donate
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
