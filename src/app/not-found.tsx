import Image from "next/image";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-deep-space via-void to-void" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" aria-hidden="true" />
      <div
        className="glow-blue ambient absolute left-1/2 top-1/2 -z-10 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="text-center">
        <Image
          src="/assets/logos/AKAZA-header-logo.png"
          alt="AKAZA"
          width={120}
          height={40}
          className="mx-auto h-9 w-auto"
          priority
        />
        <p className="mt-10 font-mono text-[0.65rem] tracking-[0.3em] text-electric-blue">
          404
        </p>
        <h1 className="mt-4 font-sans text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-none tracking-[-0.04em] text-platinum">
          Looks like this page
          <br />
          <span className="text-silver">wandered off.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-silver">
          The page you&apos;re looking for doesn&apos;t exist — but the work is
          still here. Let&apos;s get you back.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-signature-blue to-electric-blue px-6 py-3.5 text-sm font-medium text-white transition-shadow hover:shadow-[0_10px_40px_-8px_rgba(74,163,255,0.5)]"
          >
            Back Home
            <Icon name="arrow-up-right" className="h-4 w-4" />
          </a>
          <a
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline-strong)] px-6 py-3.5 text-sm font-medium text-platinum transition-colors hover:border-electric-blue/50"
          >
            View Work
          </a>
        </div>
      </div>
    </main>
  );
}
