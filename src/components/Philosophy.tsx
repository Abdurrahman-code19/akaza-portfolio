import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";

export function Philosophy() {
  return (
    <section className="relative overflow-hidden py-[clamp(6rem,16vw,12rem)]">
      <div className="absolute inset-0 -z-10 bg-void" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-25" aria-hidden="true" />
      <div
        className="glow-blue ambient absolute left-1/2 top-1/2 -z-10 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container-akaza">
        <Reveal className="mb-10 flex items-center justify-center gap-4">
          <span className="h-px w-8 bg-champagne/60" />
          <span className="font-mono text-[0.62rem] tracking-[0.3em] text-champagne/80">
            THE PRINCIPLE
          </span>
          <span className="h-px w-8 bg-champagne/60" />
        </Reveal>

        <SplitHeading
          text="CODE WITH PURPOSE."
          as="p"
          className="text-center font-sans text-[clamp(2.4rem,8.5vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.05em] text-platinum"
        />
        <SplitHeading
          text="BUILD WITH IMPACT."
          as="p"
          delay={200}
          className="text-center font-sans text-[clamp(2.4rem,8.5vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.05em] text-silver/40"
        />

        <Reveal delay={200} className="mx-auto mt-12 max-w-xl text-center">
          <p className="text-sm leading-relaxed text-silver">
            Every interface is a decision. Every detail is a chance to make
            something clearer, calmer and more useful. That is the standard I
            build toward.
          </p>
          <p className="mt-6 font-mono text-[0.62rem] tracking-[0.24em] text-silver/50">
            — {profile.name.toUpperCase()}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
