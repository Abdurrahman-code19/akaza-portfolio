"use client";

import { useEffect, useRef } from "react";

export function HeroVisual() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (event: MouseEvent) => {
      const rect = scene.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };
    const loop = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = Number(layer.dataset.depth ?? index + 1);
        layer.style.transform = `translate3d(${currentX * depth * 8}px, ${currentY * depth * 8}px, 0)`;
      });
      frame = requestAnimationFrame(loop);
    };

    scene.addEventListener("mousemove", onMove);
    scene.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(loop);
    return () => {
      scene.removeEventListener("mousemove", onMove);
      scene.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  const setLayer = (index: number) => (node: HTMLDivElement | null) => {
    if (node) layersRef.current[index] = node;
  };

  return (
    <div
      ref={sceneRef}
      className="relative mx-auto aspect-[5/5.4] w-full max-w-[560px] select-none"
      role="img"
      aria-label="A composition of AKAZA interface mockups: a browser dashboard, a mobile contribution app and floating interface details."
    >
      <div className="glow-blue ambient absolute inset-0 -z-10 blur-2xl" aria-hidden="true" />

      {/* Browser frame */}
      <div
        ref={setLayer(1)}
        className="absolute inset-x-2 top-[7%] overflow-hidden rounded-[20px] border border-[color:var(--hairline-strong)] bg-deep-space shadow-[0_40px_120px_-30px_rgba(0,0,0,0.85)] will-change-transform"
      >
        <div className="flex items-center gap-2 border-b border-[color:var(--hairline)] bg-midnight/80 px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]/70" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]/60" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]/60" />
          <div className="ml-3 flex-1 rounded-md border border-[color:var(--hairline)] bg-void/40 px-3 py-1 font-mono text-[9px] tracking-wide text-silver/60">
            akaza.dev / workspace
          </div>
        </div>
        <div className="grid grid-cols-[64px_1fr]">
          <div className="flex flex-col items-center gap-4 border-r border-[color:var(--hairline)] bg-void/30 py-4">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-signature-blue to-electric-blue font-mono text-[9px] font-bold text-white">
              A
            </div>
            <span className="h-5 w-5 rounded-md border border-electric-blue/50 bg-electric-blue/10" />
            <span className="h-5 w-5 rounded-md border border-platinum/10" />
            <span className="h-5 w-5 rounded-md border border-platinum/10" />
            <span className="mt-6 h-5 w-5 rounded-md border border-platinum/10" />
          </div>
          <div className="p-4">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="font-mono text-[8px] tracking-[0.2em] text-silver/50">DASHBOARD</p>
                <p className="text-sm font-semibold tracking-tight text-platinum">Good to see you</p>
              </div>
              <span className="rounded-full border border-cyber-cyan/25 bg-cyber-cyan/10 px-2 py-0.5 font-mono text-[7px] tracking-wide text-cyber-cyan">
                LIVE
              </span>
            </div>
            <div className="mb-3 grid grid-cols-3 gap-2">
              {[
                ["Components", "24"],
                ["Projects", "04"],
                ["Commits", "312"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-[color:var(--hairline)] bg-midnight/50 p-2"
                >
                  <p className="font-mono text-[6px] tracking-[0.12em] text-silver/50">
                    {label.toUpperCase()}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-platinum">{value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-[color:var(--hairline)] bg-midnight/40 p-2.5">
              <div className="mb-2 flex items-center justify-between">
                <p className="font-mono text-[6px] tracking-[0.12em] text-silver/50">
                  BUILD ACTIVITY
                </p>
                <p className="font-mono text-[6px] text-electric-blue">+18%</p>
              </div>
              <div className="flex h-14 items-end gap-1">
                {[38, 55, 30, 72, 48, 85, 60, 95, 70, 52, 80, 66].map((height, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-signature-blue/30 to-electric-blue/70"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phone frame */}
      <div
        ref={setLayer(2)}
        className="absolute -left-3 bottom-[5%] w-[30%] overflow-hidden rounded-[22px] border border-[color:var(--hairline-strong)] bg-void shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] will-change-transform sm:-left-6"
      >
        <div className="mx-auto mt-2 h-1 w-8 rounded-full bg-platinum/20" />
        <div className="px-3 py-3">
          <p className="font-mono text-[6px] tracking-[0.18em] text-silver/50">AJO.NG</p>
          <p className="mt-1 text-[10px] font-semibold text-platinum">Contribution Pool</p>
          <div className="mt-2 rounded-lg border border-electric-blue/20 bg-signature-blue/10 p-2">
            <p className="font-mono text-[6px] text-silver/60">POOL BALANCE</p>
            <p className="mt-0.5 text-[13px] font-bold text-platinum">₦240,000</p>
            <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-void/60">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-signature-blue to-electric-blue" />
            </div>
          </div>
          <div className="mt-2 space-y-1.5">
            {["Amaka", "Tunde", "Zainab"].map((name, i) => (
              <div key={name} className="flex items-center gap-1.5">
                <span
                  className={`h-3 w-3 rounded-full ${
                    i === 0 ? "bg-electric-blue/70" : "bg-platinum/10"
                  }`}
                />
                <span className="text-[7px] text-silver/70">{name}</span>
                <span className="ml-auto font-mono text-[6px] text-cyber-cyan/80">
                  {i === 0 ? "NEXT" : "PAID"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating role card */}
      <div
        ref={setLayer(3)}
        className="float-slow absolute -right-2 top-[2%] rounded-xl border border-[color:var(--hairline-strong)] bg-deep-space/90 px-3 py-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md will-change-transform sm:-right-4"
      >
        <p className="font-mono text-[6px] tracking-[0.18em] text-silver/50">ROLE</p>
        <p className="mt-0.5 text-[10px] font-semibold tracking-tight text-platinum">
          Frontend Developer
        </p>
        <span className="mt-1 block h-px w-10 bg-champagne/60" />
      </div>

      {/* Floating code chip */}
      <div
        ref={setLayer(4)}
        className="float-slower absolute -right-1 bottom-[12%] rounded-lg border border-[color:var(--hairline)] bg-void/90 px-2.5 py-2 font-mono text-[8px] leading-relaxed text-silver/70 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] will-change-transform sm:-right-3"
      >
        <span className="text-electric-blue">const</span> build = {"{"}
        <br />
        &nbsp;&nbsp;purpose: <span className="text-cyber-cyan">true</span>,
        <br />
        &nbsp;&nbsp;impact: <span className="text-champagne">true</span>
        <br />
        {"}"};
      </div>

      {/* Now building card */}
      <div
        ref={setLayer(2)}
        className="absolute bottom-[0%] right-2 rounded-xl border border-[color:var(--hairline-strong)] bg-deep-space/90 px-3 py-2.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md will-change-transform sm:right-0"
      >
        <div className="flex items-center gap-1.5">
          <span className="status-dot h-1.5 w-1.5 rounded-full bg-cyber-cyan" />
          <p className="font-mono text-[6px] tracking-[0.18em] text-silver/50">NOW BUILDING</p>
        </div>
        <p className="mt-1 text-[10px] font-medium tracking-tight text-platinum">
          AKAZA Digital Experience
        </p>
        <div className="mt-1.5 flex gap-1">
          {["React", "TS", "Tailwind"].map((tag) => (
            <span
              key={tag}
              className="rounded border border-[color:var(--hairline)] px-1 py-0.5 font-mono text-[5px] text-silver/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Gold signature detail */}
      <div
        className="absolute -bottom-1 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-champagne/50 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" aria-hidden="true" />
    </div>
  );
}
