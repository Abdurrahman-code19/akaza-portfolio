import { experience } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";

export function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-void via-void to-deep-space" aria-hidden="true" />
      <div
        className="glow-cyan absolute right-0 top-1/4 -z-10 h-[36vh] w-[36vh] rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container-akaza">
        <Reveal className="flex items-center gap-4">
          <span className="eyebrow text-electric-blue">04</span>
          <span className="h-px w-10 bg-[color:var(--hairline-strong)]" />
          <span className="eyebrow">Experience</span>
        </Reveal>

        <SplitHeading
          text="THE WORK BEHIND THE WORK."
          className="mt-8 max-w-4xl font-sans text-[clamp(2.5rem,6.5vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-platinum"
        />

        <div className="relative mt-16 pl-8 sm:pl-12">
          {/* Static track */}
          <span
            className="absolute left-0 top-0 h-full w-px bg-[color:var(--hairline)] sm:left-1"
            aria-hidden="true"
          />
          {/* Animated draw */}
          <Reveal
            variant="line-y"
            className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-electric-blue via-signature-blue to-transparent sm:left-1"
          />

          <div className="space-y-14">
            {experience.map((role, i) => (
              <Reveal key={role.role + role.company} delay={i * 100} as="article" className="relative">
                <span
                  className="absolute -left-8 top-1.5 flex h-3 w-3 -translate-x-1/2 items-center justify-center sm:-left-12"
                  aria-hidden="true"
                >
                  <span className="status-dot absolute h-3 w-3 rounded-full bg-electric-blue/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-electric-blue" />
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="text-[clamp(1.35rem,2.6vw,2rem)] font-semibold tracking-[-0.02em] text-platinum">
                    {role.role}
                  </h3>
                  <p className="font-mono text-[0.65rem] tracking-[0.16em] text-silver/60">
                    {role.period.toUpperCase()}
                  </p>
                </div>
                <p className="mt-1 flex items-center gap-2 text-sm text-electric-blue">
                  {role.company}
                  {role.current && (
                    <span className="rounded-full border border-cyber-cyan/25 bg-cyber-cyan/10 px-2 py-0.5 font-mono text-[0.55rem] tracking-wide text-cyber-cyan">
                      CURRENT
                    </span>
                  )}
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-silver">{role.summary}</p>
                <ul className="mt-4 max-w-xl space-y-2">
                  {role.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-silver/85">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-champagne/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
