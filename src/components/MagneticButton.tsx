"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
  strength?: number;
  download?: boolean | string;
  external?: boolean;
  ariaLabel?: string;
};

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  strength = 7,
  download,
  external,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    node.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  }

  function handleLeave() {
    const node = ref.current;
    if (node) node.style.transform = "translate3d(0,0,0)";
  }

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-signature-blue to-electric-blue text-white hover:shadow-[0_10px_40px_-8px_rgba(74,163,255,0.5)]"
      : "border border-[color:var(--hairline-strong)] text-platinum hover:border-electric-blue/50 hover:bg-navy-glass/40";

  return (
    <a
      ref={ref}
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-[transform,background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
