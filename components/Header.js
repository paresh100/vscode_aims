"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/starter-guide", label: "Starter Guide" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl shadow-card">
      <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-between gap-4 py-4 min-h-[68px]">
        <Link href="/" className="flex items-center gap-3 font-display text-lg font-bold tracking-tight text-ink">
          <Image
            src="/logo.svg"
            alt="AI Mastery Step"
            width={220}
            height={60}
            priority
            className="block h-12 w-auto object-contain"
          />
        </Link>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-ink shadow-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <div className="flex flex-col items-center gap-1.5">
            <span className="h-0.5 w-6 bg-ink" />
            <span className="h-0.5 w-6 bg-ink" />
            <span className="h-0.5 w-6 bg-ink" />
          </div>
        </button>

        <nav
          className={`absolute right-4 top-20 flex w-64 flex-col gap-2 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-card md:static md:w-auto md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            open ? "flex" : "hidden md:flex"
          }`}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3.5 py-2 font-semibold text-sm transition ${
                  active
                    ? "bg-gradient-to-r from-accent/90 to-accent-2/90 text-white shadow-card"
                    : "text-muted hover:bg-white/70 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/starter-guide"
            className="mt-1 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-r from-accent to-[#ff9a6e] px-3.5 py-2 font-semibold text-sm text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-deep md:mt-0"
          >
            Get the Guide
          </Link>
        </nav>
      </div>
    </header>
  );
}
