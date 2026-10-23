"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/lib/data";
import { Icon } from "./Icon";
import { ProjectVisual } from "./ProjectVisual";

const statusStyles: Record<string, string> = {
  Completed: "border-cyber-cyan/30 bg-cyber-cyan/10 text-cyber-cyan",
  Live: "border-cyber-cyan/30 bg-cyber-cyan/10 text-cyber-cyan",
  "In Progress": "border-champagne/30 bg-champagne/10 text-champagne",
  "Concept / Planned": "border-electric-blue/30 bg-electric-blue/10 text-electric-blue",
};

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const sections: Array<[string, string]> = [
    ["Overview", project.caseStudy.overview],
    ["The Problem", project.caseStudy.problem],
    ["Approach", project.caseStudy.approach],
    ["Solution", project.caseStudy.solution],
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-[118] flex items-start justify-center overflow-y-auto bg-void/80 p-3 backdrop-blur-md sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative my-4 w-full max-w-4xl overflow-hidden rounded-3xl border border-[color:var(--hairline-strong)] bg-deep-space shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[color:var(--hairline)] bg-deep-space/90 px-5 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] text-electric-blue">
              {project.index}
            </span>
            <span className="font-mono text-[0.65rem] tracking-[0.2em] text-silver/60">
              CASE STUDY
            </span>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--hairline-strong)] text-silver transition-colors hover:border-electric-blue/50 hover:text-platinum"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>

        <div className="p-5 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] text-silver/60">
              {project.category.toUpperCase()}
            </span>
            <span
              className={`rounded-full border px-2.5 py-0.5 font-mono text-[0.6rem] tracking-wide ${
                statusStyles[project.status] ?? "border-[color:var(--hairline-strong)] text-silver"
              }`}
            >
              {project.status}
            </span>
          </div>

          <h2
            id="project-modal-title"
            className="mt-3 font-sans text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-none tracking-[-0.04em] text-platinum"
          >
            {project.title}
          </h2>
          <p className="mt-2 text-base text-silver">{project.subtitle}</p>

          <div className="mt-6 aspect-[16/10] overflow-hidden rounded-2xl border border-[color:var(--hairline)]">
            <ProjectVisual variant={project.variant} />
          </div>

          <div className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {sections.map(([title, body]) => (
              <div key={title}>
                <h3 className="font-mono text-[0.62rem] tracking-[0.2em] text-electric-blue">
                  {title.toUpperCase()}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 border-t border-[color:var(--hairline)] pt-6 sm:grid-cols-2">
            <div>
              <h3 className="font-mono text-[0.62rem] tracking-[0.2em] text-silver/50">
                MY ROLE
              </h3>
              <p className="mt-2 text-sm text-platinum">{project.caseStudy.role}</p>
            </div>
            <div>
              <h3 className="font-mono text-[0.62rem] tracking-[0.2em] text-silver/50">
                TECHNOLOGY
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-[color:var(--hairline)] bg-midnight/50 px-2.5 py-1 font-mono text-[0.65rem] text-silver"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {(project.github || project.live) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.live && (
                <a
                  href={project.live}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-signature-blue to-electric-blue px-5 py-2.5 text-sm font-medium text-white"
                >
                  View Live
                  <Icon name="arrow-up-right" className="h-4 w-4" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--hairline-strong)] px-5 py-2.5 text-sm font-medium text-platinum transition-colors hover:border-electric-blue/50"
                >
                  View on GitHub
                  <Icon name="github" className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
