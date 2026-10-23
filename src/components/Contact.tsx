import { profile, socials } from "@/lib/data";
import { Icon } from "./Icon";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";

const contactRows = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "mail" as const },
  { label: "LinkedIn", value: "Abdurrahman Oriolowo", href: profile.linkedin, icon: "linkedin" as const },
  { label: "GitHub", value: "@Abdurrahman-code19", href: profile.github, icon: "github" as const },
  { label: "WhatsApp", value: "Message directly", href: profile.whatsapp, icon: "whatsapp" as const },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-void via-deep-space to-void" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-25" aria-hidden="true" />
      <div
        className="ambient absolute -left-1/4 top-0 -z-10 h-[60vh] w-[70vw] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(48,130,197,0.18), transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 select-none overflow-hidden text-center"
        aria-hidden="true"
      >
        <span className="block translate-y-[18%] font-sans text-[24vw] font-bold leading-none tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_rgba(226,232,240,0.06)]">
          AKAZA
        </span>
      </div>

      <div className="container-akaza py-[clamp(6rem,14vw,11rem)]">
        <Reveal className="flex items-center gap-4">
          <span className="eyebrow text-electric-blue">06</span>
          <span className="h-px w-10 bg-[color:var(--hairline-strong)]" />
          <span className="eyebrow">Contact</span>
        </Reveal>

        <SplitHeading
          text="LET'S BUILD SOMETHING."
          className="mt-8 max-w-5xl font-sans text-[clamp(2.6rem,8vw,7rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-platinum"
        />

        <Reveal delay={140} className="mt-8 max-w-lg">
          <p className="text-base leading-relaxed text-silver">
            Have a project, opportunity or idea worth exploring? Let&apos;s talk.
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-10 flex flex-wrap items-center gap-3">
          <MagneticButton href={`mailto:${profile.email}`} ariaLabel="Email Abdurrahman Oriolowo">
            Start a Conversation
            <Icon name="arrow-up-right" className="arrow-shift h-4 w-4" />
          </MagneticButton>
          <MagneticButton href={profile.github} variant="ghost" external>
            View GitHub
            <Icon name="github" className="h-4 w-4" />
          </MagneticButton>
        </Reveal>

        <Reveal variant="line" className="mt-16 h-px w-full bg-[color:var(--hairline)]" />

        <div className="mt-2 grid sm:grid-cols-2 lg:grid-cols-4">
          {contactRows.map((row, i) => (
            <Reveal key={row.label} delay={i * 70}>
              <a
                href={row.href}
                target={row.label === "Email" ? undefined : "_blank"}
                rel={row.label === "Email" ? undefined : "noopener noreferrer"}
                className="group flex items-start gap-3 border-b border-[color:var(--hairline)] py-6 transition-colors hover:border-electric-blue/30 sm:pr-6 lg:border-b-0 lg:border-r lg:pl-0 lg:last:border-r-0"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color:var(--hairline)] text-silver transition-colors group-hover:border-electric-blue/40 group-hover:text-electric-blue">
                  <Icon name={row.icon} className="h-3.5 w-3.5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[0.58rem] tracking-[0.18em] text-silver/50">
                    {row.label.toUpperCase()}
                  </span>
                  <span className="mt-1 block truncate text-sm text-platinum transition-colors group-hover:text-electric-blue">
                    {row.value}
                  </span>
                </span>
                <Icon
                  name="arrow-up-right"
                  className="ml-auto mt-1 h-3.5 w-3.5 shrink-0 text-silver/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric-blue"
                />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-14 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[0.6rem] tracking-[0.2em] text-silver/50">
            {profile.location.toUpperCase()} · OPEN TO OPPORTUNITIES
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.6rem] tracking-[0.16em] text-silver/60 transition-colors hover:text-electric-blue"
              >
                {social.label.toUpperCase()}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
