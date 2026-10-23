"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { Icon } from "./Icon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["work", "identity", "experience", "capabilities", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <div className="container-akaza">
          <nav
            aria-label="Primary"
            className={`flex items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-5 ${
              scrolled
                ? "h-14 border border-[color:var(--hairline)] bg-deep-space/70 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl"
                : "h-16 border border-transparent bg-transparent"
            }`}
          >
            <a href="#top" className="flex items-center" aria-label="AKAZA — back to top">
              <Image
                src="/assets/logos/AKAZA-header-logo.png"
                alt="AKAZA"
                width={120}
                height={40}
                priority
                className="h-8 w-auto sm:h-9"
              />
            </a>

            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = active === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.8rem] font-medium transition-colors duration-300 ${
                        isActive ? "text-platinum" : "text-silver hover:text-platinum"
                      }`}
                    >
                      <span
                        className={`h-1 w-1 rounded-full transition-all duration-300 ${
                          isActive ? "bg-electric-blue opacity-100" : "bg-transparent opacity-0"
                        }`}
                      />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="hidden lg:block">
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 rounded-full border border-[color:var(--hairline-strong)] px-5 py-2.5 text-[0.8rem] font-medium text-platinum transition-all duration-300 hover:border-electric-blue/50 hover:bg-navy-glass/40"
              >
                Let&apos;s Talk
                <Icon name="arrow-up-right" className="arrow-shift h-3.5 w-3.5" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--hairline-strong)] text-platinum transition-colors hover:border-electric-blue/50 lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[99] lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-void/80 backdrop-blur-xl transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-x-3 top-24 rounded-3xl border border-[color:var(--hairline)] bg-deep-space/95 p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-[color:var(--hairline)] py-4 text-2xl font-medium tracking-tight text-platinum transition-colors hover:text-electric-blue"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-[0.65rem] text-silver/60">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-signature-blue to-electric-blue px-5 py-3.5 text-sm font-medium text-white"
          >
            Let&apos;s Talk
            <Icon name="arrow-up-right" className="h-4 w-4" />
          </a>
          <p className="mt-4 text-center font-mono text-[0.65rem] tracking-[0.2em] text-silver/60">
            {profile.location.toUpperCase()}
          </p>
        </div>
      </div>
    </>
  );
}
