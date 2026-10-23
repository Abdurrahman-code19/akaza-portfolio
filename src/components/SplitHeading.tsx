"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type SplitHeadingProps = {
  text: string;
  as?: ElementType;
  className?: string;
  wordClassName?: string;
  delay?: number;
  step?: number;
  /** Optional node appended after the split text (e.g. a gradient word). */
  trailing?: ReactNode;
};

export function SplitHeading({
  text,
  as: Tag = "h2",
  className = "",
  wordClassName = "",
  delay = 0,
  step = 55,
  trailing,
}: SplitHeadingProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const words = text.split(" ");

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
      { threshold: 0.25, rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`${visible ? "is-visible" : ""} ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="word-mask">
            <span
              className={`word-inner ${wordClassName}`}
              style={{
                "--word-delay": `${delay + i * step}ms`,
              } as React.CSSProperties}
            >
              {word}
            </span>
            {i < words.length - 1 || trailing ? "\u00A0" : null}
          </span>
        ))}
        {trailing ? (
          <span className="word-mask">
            <span
              className="word-inner"
              style={{
                "--word-delay": `${delay + words.length * step}ms`,
              } as React.CSSProperties}
            >
              {trailing}
            </span>
          </span>
        ) : null}
      </span>
    </Tag>
  );
}
