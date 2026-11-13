"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/content";
import { Logo } from "./Logo";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || menuOpen
          ? "bg-ivory/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(24,37,29,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className={`flex items-center gap-2.5 font-serif text-xl tracking-[0.08em] uppercase transition-colors ${
            scrolled || menuOpen ? "text-forest" : "text-ivory"
          }`}
        >
          <Logo className="h-7 w-7 shrink-0" />
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-sans text-[13px] font-medium uppercase tracking-[0.12em] transition-colors hover:opacity-70 ${
                scrolled ? "text-forest" : "text-ivory"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={siteConfig.ctaHref}
            className={`border px-6 py-2.5 font-sans text-[13px] font-medium uppercase tracking-[0.12em] transition-colors ${
              scrolled
                ? "border-forest text-forest hover:bg-forest hover:text-ivory"
                : "border-ivory text-ivory hover:bg-ivory hover:text-forest"
            }`}
          >
            {siteConfig.ctaLabel}
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col gap-1.5 lg:hidden"
        >
          <span
            className={`h-[1.5px] w-6 transition-colors ${
              scrolled || menuOpen ? "bg-forest" : "bg-ivory"
            }`}
          />
          <span
            className={`h-[1.5px] w-6 transition-colors ${
              scrolled || menuOpen ? "bg-forest" : "bg-ivory"
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-6 border-t border-forest/10 bg-ivory px-6 py-8 lg:hidden">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-2xl text-forest"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.ctaHref}
            onClick={() => setMenuOpen(false)}
            className="mt-2 border border-forest px-6 py-3 text-center font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-forest"
          >
            {siteConfig.ctaLabel}
          </Link>
        </div>
      )}
    </header>
  );
}
