"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { Icon } from "./Icon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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

            <div className="flex items-center gap-2.5 lg:hidden">
              <span className="status-dot h-1.5 w-1.5 rounded-full bg-cyber-cyan" aria-hidden="true" />
              <span className="text-right font-mono text-[0.55rem] leading-[1.5] tracking-[0.16em] text-silver/70">
                ABDURRAHMAN
                <br />
                ORIOLOWO
              </span>
            </div>

            <div className="hidden lg:block">
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 rounded-full border border-[color:var(--hairline-strong)] px-5 py-2.5 text-[0.8rem] font-medium text-platinum transition-all duration-300 hover:border-electric-blue/50 hover:bg-navy-glass/40"
              >
                Let&apos;s Talk
                <Icon name="arrow-up-right" className="arrow-shift h-3.5 w-3.5" />
              </a>
            </div>
          </nav>
        </div>
      </header>

    </>
  );
}
