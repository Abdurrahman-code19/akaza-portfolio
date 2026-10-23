"use client";

import { useEffect, useState } from "react";
import {
  FolderGit2,
  House,
  Mail,
  UserRound,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const items: { id: string; label: string; Icon: LucideIcon }[] = [
  { id: "top", label: "Home", Icon: House },
  { id: "identity", label: "About", Icon: UserRound },
  { id: "work", label: "Projects", Icon: FolderGit2 },
  { id: "capabilities", label: "Skills", Icon: Wrench },
  { id: "contact", label: "Contact", Icon: Mail },
];

export function MobileDock() {
  const [activeId, setActiveId] = useState("top");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === activeId)
  );

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[105] flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <nav
        aria-label="Mobile"
        className="pointer-events-auto relative w-full max-w-sm overflow-hidden rounded-[22px] border border-platinum/10 bg-deep-space/80 p-1.5 shadow-[0_24px_70px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
      >
        <div
          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent"
          aria-hidden="true"
        />
        <div className="relative flex items-stretch">
          <span
            aria-hidden="true"
            className="absolute inset-y-1 left-1.5 w-[calc((100%-0.75rem)/5)] rounded-2xl border border-electric-blue/25 bg-electric-blue/10 shadow-[0_0_24px_-6px_rgba(74,163,255,0.55)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          />
          {items.map(({ id, label, Icon }, index) => {
            const isActive = index === activeIndex;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "page" : undefined}
                className="group relative z-10 flex flex-1 flex-col items-center gap-1 rounded-2xl px-1 py-2.5 transition-colors duration-300"
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.75}
                  className={`h-[19px] w-[19px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? "-translate-y-px text-electric-blue"
                      : "text-silver/65 group-hover:text-platinum"
                  }`}
                />
                <span
                  className={`font-mono text-[8px] tracking-[0.14em] transition-colors duration-300 ${
                    isActive ? "text-platinum" : "text-silver/55"
                  }`}
                >
                  {label.toUpperCase()}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
