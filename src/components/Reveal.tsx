"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children?: ReactNode;
  as?: ElementType;
  className?: string;
  variant?: "up" | "scale" | "line" | "line-y";
  delay?: number;
  threshold?: number;
  id?: string;
};

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  variant = "up",
  delay = 0,
  threshold = 0.15,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const base =
    variant === "scale"
      ? "reveal-scale"
      : variant === "line"
        ? "reveal-line"
        : variant === "line-y"
          ? "reveal-line-y"
          : "reveal";

  return (
    <Tag
      ref={ref}
      id={id}
      className={`${base} ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
