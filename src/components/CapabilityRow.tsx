"use client";

import { useRef, type MouseEvent } from "react";
import { Icon } from "./Icon";

type CapabilityRowProps = {
  index: string;
  title: string;
  summary: string;
  items: string[];
};

export function CapabilityRow({ index, title, summary, items }: CapabilityRowProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="group relative overflow-hidden border-b border-[color:var(--hairline)] transition-colors duration-300 first:border-t hover:border-electric-blue/30"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(74,163,255,0.09), transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div className="relative grid gap-5 py-8 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8 sm:py-10">
        <span className="font-mono text-[0.65rem] tracking-[0.2em] text-silver/50 transition-colors duration-300 group-hover:text-electric-blue sm:pt-1">
          {index}
        </span>

        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.03em] text-platinum transition-transform duration-300 ease-out group-hover:translate-x-1">
              {title}
            </h3>
            <p className="text-sm text-silver/80">{summary}</p>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-[color:var(--hairline)] bg-midnight/40 px-3 py-1 font-mono text-[0.68rem] text-silver transition-colors duration-300 group-hover:border-royal-slate group-hover:text-platinum"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden h-10 w-10 items-center justify-center self-center rounded-full border border-[color:var(--hairline)] text-silver transition-all duration-300 group-hover:rotate-45 group-hover:border-electric-blue/40 group-hover:text-electric-blue sm:flex">
          <Icon name="arrow-up-right" className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
