"use client";

import { useEffect, useRef, useState } from "react";

function SplashScreen() {
  const [mounted, setMounted] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("akaza-splash");
    if (seen) {
      setMounted(false);
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduced ? 350 : 1750;
    const fade = reduced ? 150 : 550;
    const leaveTimer = window.setTimeout(() => setLeaving(true), hold);
    const doneTimer = window.setTimeout(() => {
      setMounted(false);
      sessionStorage.setItem("akaza-splash", "1");
    }, hold + fade);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[120] flex items-center justify-center bg-void ${
        leaving ? "splash-out pointer-events-none" : ""
      }`}
    >
      <div className="relative overflow-hidden px-6">
        <div className="flex items-baseline gap-[0.06em] font-sans text-[clamp(2.5rem,9vw,5.5rem)] font-semibold tracking-[0.32em] text-platinum">
          {"AKAZA".split("").map((letter, i) => (
            <span key={i} className="splash-letter" style={{ "--i": i } as React.CSSProperties}>
              {letter}
            </span>
          ))}
        </div>
        <span className="splash-sweep absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent blur-md" />
        <p className="mt-6 text-center font-mono text-[0.65rem] tracking-[0.4em] text-silver/70">
          CODE WITH PURPOSE
        </p>
      </div>
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, Math.max(0, scrollTop / height)) : 0);
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[110] h-0.5 bg-transparent" aria-hidden="true">
      <div
        className="h-full origin-left bg-gradient-to-r from-signature-blue to-electric-blue"
        style={{ transform: `scaleX(${progress})`, transition: "transform 80ms linear" }}
      />
    </div>
  );
}

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frame = 0;
    let active = true;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      const target = (event.target as HTMLElement)?.closest?.(
        "a, button, [data-cursor]"
      ) as HTMLElement | null;
      if (target) {
        setHovering(true);
        setLabel(target.dataset.cursor ?? null);
      } else {
        setHovering(false);
        setLabel(null);
      }
    };

    const loop = () => {
      if (!active) return;
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(loop);
    return () => {
      active = false;
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[115] hidden lg:block" aria-hidden="true">
      <div
        ref={dotRef}
        className="absolute -ml-[2px] -mt-[2px] h-1 w-1 rounded-full bg-electric-blue"
      />
      <div
        ref={ringRef}
        className={`absolute -ml-4 -mt-4 flex h-8 w-8 items-center justify-center rounded-full border transition-[width,height,margin,background-color,border-color] duration-300 ease-out ${
          hovering
            ? "h-14 w-14 -ml-7 -mt-7 border-electric-blue/40 bg-electric-blue/10"
            : "border-platinum/20"
        }`}
      >
        {label ? (
          <span className="font-mono text-[7px] font-medium tracking-[0.12em] text-electric-blue">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export function SiteChrome() {
  return (
    <>
      <SplashScreen />
      <ScrollProgress />
      <CustomCursor />
    </>
  );
}
