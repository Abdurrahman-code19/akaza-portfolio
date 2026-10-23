import Image from "next/image";
import { profile } from "@/lib/data";
import { Icon } from "./Icon";
import { HeroVisual } from "./HeroVisual";
import { MagneticButton } from "./MagneticButton";

const lines = ["BUILDING DIGITAL", "EXPERIENCES", "WITH PURPOSE."];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-deep-space via-void to-void" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" aria-hidden="true" />
      <div
        className="glow-blue ambient absolute -right-[10%] top-[5%] -z-10 h-[70vh] w-[70vh] rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container-akaza">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div>
            <div className="hero-rise flex items-center gap-3" style={{ "--hero-delay": "80ms" } as React.CSSProperties}>
              <span className="status-dot h-1.5 w-1.5 rounded-full bg-cyber-cyan" />
              <p className="eyebrow text-silver">ABDURRAHMAN ORIOLOWO / FRONTEND DEVELOPER</p>
            </div>

            <h1 className="mt-6 font-sans text-[clamp(2.6rem,7.6vw,6.2rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-platinum">
              {lines.map((line, i) => (
                <span
                  key={line}
                  className="hero-rise block"
                  style={{ "--hero-delay": `${160 + i * 110}ms` } as React.CSSProperties}
                >
                  {i === 1 ? (
                    <span className="text-gradient">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <div
              className="hero-rise mt-10 flex items-center gap-4"
              style={{ "--hero-delay": "540ms" } as React.CSSProperties}
            >
              <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-platinum/25 shadow-[0_0_0_3px_rgba(74,163,255,0.12),0_12px_36px_-12px_rgba(74,163,255,0.45)] sm:h-16 sm:w-16">
                <Image
                  src={profile.avatar}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="64px"
                  priority
                  className="object-cover object-[center_25%]"
                />
              </span>
              <div className="min-w-0">
                <p className="font-sans text-[clamp(1.4rem,2.6vw,2.05rem)] font-semibold leading-tight tracking-[-0.02em] text-platinum">
                  {profile.name}
                </p>
                <p className="mt-0.5 text-sm text-silver">
                  {profile.role}
                  <span className="hidden sm:inline"> · AKAZA</span>
                </p>
              </div>
            </div>

            <p
              className="hero-rise mt-4 max-w-lg text-[0.95rem] leading-relaxed text-silver"
              style={{ "--hero-delay": "620ms" } as React.CSSProperties}
            >
              I build responsive, intuitive and visually engaging digital
              experiences while continuously exploring the systems behind them.
            </p>

            <div
              className="hero-rise mt-9 flex flex-wrap items-center gap-3"
              style={{ "--hero-delay": "700ms" } as React.CSSProperties}
            >
              <MagneticButton href="#work">
                Explore My Work
                <Icon name="arrow-down" className="arrow-shift h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost">
                Let&apos;s Talk
                <Icon name="arrow-up-right" className="arrow-shift h-4 w-4" />
              </MagneticButton>
            </div>

            <div
              className="hero-rise mt-10 flex items-center gap-5 border-t border-[color:var(--hairline)] pt-5"
              style={{ "--hero-delay": "780ms" } as React.CSSProperties}
            >
              <p className="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.14em] text-silver/70">
                <span className="status-dot h-1.5 w-1.5 rounded-full bg-cyber-cyan" />
                AVAILABLE FOR WORK
              </p>
              <span className="h-3 w-px bg-[color:var(--hairline-strong)]" />
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-silver/70">
                {profile.location.toUpperCase()}
              </p>
            </div>
          </div>

          <div
            className="hero-rise"
            style={{ "--hero-delay": "420ms" } as React.CSSProperties}
          >
            <HeroVisual />
          </div>
        </div>

        <div className="mt-16 hidden items-center justify-between border-t border-[color:var(--hairline)] pt-5 sm:flex">
          <p className="font-mono text-[0.6rem] tracking-[0.2em] text-silver/50">
            SCROLL TO EXPLORE
          </p>
          <a
            href="#identity"
            aria-label="Scroll to identity section"
            className="scroll-line relative flex h-10 w-px items-start justify-center overflow-hidden bg-[color:var(--hairline-strong)]"
          />
          <p className="font-mono text-[0.6rem] tracking-[0.2em] text-silver/50">
            {profile.tagline.toUpperCase()}
          </p>
        </div>
      </div>
    </section>
  );
}
