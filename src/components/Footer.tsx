import Image from "next/image";
import { profile, socials } from "@/lib/data";
import { Icon } from "./Icon";

const footerLinks = [
  { href: "#work", label: "Work" },
  { href: "#identity", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[color:var(--hairline)] bg-void">
      <div className="container-akaza py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Image
              src="/assets/logos/AKAZA-footer-logo.png"
              alt="AKAZA"
              width={120}
              height={38}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-silver">
              {profile.tagline}
            </p>
            <p className="mt-2 font-mono text-[0.6rem] tracking-[0.18em] text-silver/45">
              FRONTEND DEVELOPER & PRODUCT BUILDER
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[0.58rem] tracking-[0.2em] text-silver/45">EXPLORE</p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-silver transition-colors hover:text-electric-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[0.58rem] tracking-[0.2em] text-silver/45">CONNECT</p>
            <ul className="mt-4 space-y-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-silver transition-colors hover:text-electric-blue"
                  >
                    {social.label}
                    <Icon name="arrow-up-right" className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-mono text-[0.6rem] tracking-[0.14em] text-silver/45">
              {profile.location.toUpperCase()}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[color:var(--hairline)] pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.6rem] tracking-[0.12em] text-silver/45">
            © {year} {profile.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 font-mono text-[0.6rem] tracking-[0.16em] text-silver/50 transition-colors hover:text-electric-blue"
          >
            BACK TO TOP
            <Icon
              name="arrow-up-right"
              className="arrow-shift h-3 w-3 -rotate-45"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
