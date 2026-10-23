"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { certificates, education } from "@/lib/data";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";

type Certificate = (typeof certificates)[number];

export function Proof() {
  const [active, setActive] = useState<Certificate | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="proof" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-deep-space via-void to-void" aria-hidden="true" />

      <div className="container-akaza">
        <Reveal className="flex items-center gap-4">
          <span className="eyebrow text-electric-blue">05</span>
          <span className="h-px w-10 bg-[color:var(--hairline-strong)]" />
          <span className="eyebrow">Proof</span>
        </Reveal>

        <SplitHeading
          text="LEARNING IS PART OF THE BUILD."
          className="mt-8 max-w-4xl font-sans text-[clamp(2.5rem,6.5vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-platinum"
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[0.62rem] tracking-[0.2em] text-silver/50">
                EDUCATION
              </span>
              <span className="h-px flex-1 bg-[color:var(--hairline)]" />
            </Reveal>

            <div className="space-y-1">
              {education.map((item, i) => (
                <Reveal key={item.institution} delay={i * 80}>
                  <div className="group grid gap-1 border-b border-[color:var(--hairline)] py-6 sm:grid-cols-[1fr_auto] sm:items-baseline">
                    <div>
                      <h3 className="text-lg font-medium tracking-tight text-platinum transition-colors group-hover:text-electric-blue">
                        {item.institution}
                      </h3>
                      <p className="mt-1 text-sm text-silver">{item.qualification}</p>
                    </div>
                    <p className="font-mono text-[0.62rem] tracking-[0.14em] text-silver/50 sm:text-right">
                      {item.meta.toUpperCase()}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <Reveal className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[0.62rem] tracking-[0.2em] text-silver/50">
                CERTIFICATIONS
              </span>
              <span className="h-px flex-1 bg-[color:var(--hairline)]" />
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {certificates.map((certificate, i) => (
                <Reveal key={certificate.name} delay={i * 90}>
                  <button
                    type="button"
                    onClick={() => setActive(certificate)}
                    data-cursor="VIEW"
                    aria-label={`View ${certificate.name} from ${certificate.issuer}`}
                    className="group block w-full overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-midnight/30 text-left transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/35 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden border-b border-[color:var(--hairline)] bg-void/40">
                      <Image
                        src={certificate.image}
                        alt={certificate.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 300px"
                        loading="lazy"
                        className="object-contain p-2 opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
                    </div>
                    <div className="p-4">
                      <p className="font-mono text-[0.58rem] tracking-[0.16em] text-champagne/80">
                        {certificate.issuer.toUpperCase()}
                      </p>
                      <p className="mt-1 text-sm font-medium text-platinum">
                        {certificate.name}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[0.6rem] tracking-[0.14em] text-silver/60 transition-colors group-hover:text-electric-blue">
                        VIEW CERTIFICATE
                        <Icon name="arrow-up-right" className="arrow-shift h-3 w-3" />
                      </span>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} certificate`}
          className="fixed inset-0 z-[118] flex items-center justify-center bg-void/90 p-4 backdrop-blur-md sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <div className="relative w-full max-w-3xl">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="font-mono text-[0.6rem] tracking-[0.18em] text-champagne/80">
                  {active.issuer.toUpperCase()}
                </p>
                <p className="text-sm text-platinum">{active.name}</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close certificate"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--hairline-strong)] text-silver transition-colors hover:border-electric-blue/50 hover:text-platinum"
              >
                <Icon name="close" className="h-4 w-4" />
              </button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--hairline-strong)] bg-deep-space">
              <Image
                src={active.image}
                alt={active.alt}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
