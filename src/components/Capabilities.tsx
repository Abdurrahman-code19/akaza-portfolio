import { capabilities } from "@/lib/data";
import { CapabilityRow } from "./CapabilityRow";
import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";

export function Capabilities() {
  return (
    <section id="capabilities" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-deep-space via-void to-void" aria-hidden="true" />

      <div className="container-akaza">
        <Reveal className="flex items-center gap-4">
          <span className="eyebrow text-electric-blue">02</span>
          <span className="h-px w-10 bg-[color:var(--hairline-strong)]" />
          <span className="eyebrow">Capabilities</span>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SplitHeading
            text="WHAT I BUILD."
            className="font-sans text-[clamp(2.5rem,6.5vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-platinum"
          />
          <Reveal delay={160}>
            <p className="max-w-sm text-sm leading-relaxed text-silver">
              Four areas I keep returning to — the interface, the system behind
              it, the process that ships it and the people I build it with.
            </p>
          </Reveal>
        </div>

        <div className="mt-14">
          {capabilities.map((capability, i) => (
            <Reveal key={capability.index} delay={i * 70}>
              <CapabilityRow {...capability} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
