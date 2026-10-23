import Image from "next/image";
import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";

const roles = [
  "Frontend Developer",
  "Product Builder",
  "Frontend Tutor",
  "CS Undergraduate",
];

export function Identity() {
  return (
    <section id="identity" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-void via-void to-deep-space" aria-hidden="true" />
      <div
        className="glow-gold absolute -left-40 top-1/3 -z-10 h-[40vh] w-[40vh] rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container-akaza">
        <Reveal className="flex items-center gap-4" delay={0}>
          <span className="eyebrow text-electric-blue">01</span>
          <span className="h-px w-10 bg-[color:var(--hairline-strong)]" />
          <span className="eyebrow">Identity</span>
        </Reveal>

        <SplitHeading
          text="WHO IS AKAZA?"
          className="mt-8 font-sans text-[clamp(2.5rem,6.5vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-platinum"
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal delay={60}>
              <p className="max-w-2xl text-[clamp(1.15rem,2vw,1.5rem)] leading-relaxed text-platinum">
                I&apos;m <span className="text-electric-blue">Abdurrahman Oriolowo</span>,
                professionally known as AKAZA — a frontend developer, product
                builder, tutor and Computer Science undergraduate.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Reveal delay={120}>
                <p className="text-sm leading-relaxed text-silver">
                  I care about the space where clarity meets craft: interfaces
                  that are easy to understand, deliberate in their details and
                  honest about the problem they solve.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p className="text-sm leading-relaxed text-silver">
                  My work sits between development and product thinking. I build
                  with React, Next.js and Tailwind CSS — and I teach what I learn
                  along the way.
                </p>
              </Reveal>
            </div>

            <Reveal delay={120} className="mt-14">
              <p className="font-mono text-[0.65rem] tracking-[0.22em] text-silver/60">
                A PRINCIPLE
              </p>
              <p className="mt-4 font-sans text-[clamp(1.8rem,4.5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.03em] text-platinum">
                Learning is part of
                <br />
                <span className="text-silver">the build.</span>
              </p>
            </Reveal>

            <Reveal delay={160} className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-[color:var(--hairline)] pt-6">
              <div>
                <p className="font-mono text-[0.6rem] tracking-[0.18em] text-silver/50">
                  BASED IN
                </p>
                <p className="mt-1 text-sm text-platinum">{profile.location}</p>
              </div>
              <div>
                <p className="font-mono text-[0.6rem] tracking-[0.18em] text-silver/50">
                  CURRENTLY
                </p>
                <p className="mt-1 text-sm text-platinum">Frontend Tutor @ RIIT</p>
              </div>
              <div>
                <p className="font-mono text-[0.6rem] tracking-[0.18em] text-silver/50">
                  FOCUS
                </p>
                <p className="mt-1 text-sm text-platinum">Interfaces & product</p>
              </div>
            </Reveal>
          </div>

          {/* Editorial visual panel */}
          <Reveal variant="scale" delay={200} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[24px] border border-[color:var(--hairline)] bg-gradient-to-b from-midnight/70 to-void">
              <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
              <div className="relative flex items-start justify-between p-6">
                <span className="font-mono text-[0.6rem] tracking-[0.2em] text-silver/50">
                  AKAZA / 001
                </span>
                <span className="font-mono text-[0.6rem] tracking-[0.2em] text-champagne/80">
                  EST. 2024
                </span>
              </div>

              <div className="relative px-6 pb-2">
                <p className="font-sans text-[clamp(3rem,7vw,4.6rem)] font-bold leading-none tracking-[-0.05em] text-platinum">
                  AKAZA
                </p>
                <span className="mt-3 block h-px w-16 bg-champagne/60" />
              </div>

              <div className="relative mt-6 flex items-center justify-between border-y border-[color:var(--hairline)] px-6 py-4">
                <ul className="space-y-1.5">
                  {roles.map((role) => (
                    <li key={role} className="flex items-center gap-2 text-[0.8rem] text-silver">
                      <span className="h-1 w-1 rounded-full bg-electric-blue/70" />
                      {role}
                    </li>
                  ))}
                </ul>
                <div className="relative h-24 w-24 shrink-0">
                  <Image
                    src="/assets/logos/AKAZA-secondary-logo.png"
                    alt="AKAZA secondary logo"
                    fill
                    sizes="96px"
                    className="object-contain opacity-80"
                  />
                </div>
              </div>

              <div className="relative flex items-center justify-between px-6 py-4">
                <p className="font-mono text-[0.6rem] tracking-[0.16em] text-silver/50">
                  LAGOS, NIGERIA
                </p>
                <p className="font-mono text-[0.6rem] tracking-[0.16em] text-silver/50">
                  CODE / DESIGN / TEACH
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
