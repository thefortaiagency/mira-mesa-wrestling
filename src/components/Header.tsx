"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";

const navItems = [
  { label: "Coaches", href: "/about" },
  { label: "Calendar", href: "/calendar" },
  { label: "History", href: "/history" },
  { label: "Photos", href: "/photos" },
  { label: "Resources", href: "/resources" },
  { label: "Programs", href: "/mmwc" },
  { label: "Adults", href: "/masters" },
];

function isActive(pathname: string, href: string): boolean {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-slate-950 text-sm hidden md:block">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-2 flex items-center justify-end text-slate-400">
          <a href="mailto:MiraMesaWrestling@gmail.com" className="hover:text-white transition-colors">
            MiraMesaWrestling@gmail.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group hover:no-underline">
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
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors font-medium underline-offset-4 ${
                    active
                      ? "text-slate-900 underline decoration-yellow-400 decoration-2"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50 decoration-slate-300"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Socials + Mobile toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://www.facebook.com/MiraMesaWrestling"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mira Mesa Wrestling on Facebook"
              className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-85 transition-opacity hover:no-underline"
            >
              <Facebook className="w-4 h-4 fill-current" />
            </a>
            <a
              href="https://www.instagram.com/miramesawrestling/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mira Mesa Wrestling on Instagram"
              className="w-9 h-9 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center hover:opacity-85 transition-opacity hover:no-underline"
            >
              <Instagram className="w-4 h-4" />
            </a>
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
                {navItems.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`px-4 py-3 rounded-lg transition-colors font-medium underline-offset-4 ${
                        active
                          ? "text-slate-900 underline decoration-yellow-400 decoration-2"
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-50 decoration-slate-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
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
