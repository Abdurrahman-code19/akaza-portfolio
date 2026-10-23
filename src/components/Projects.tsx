"use client";

import { useState } from "react";
import { projects, type Project } from "@/lib/data";
import { Icon } from "./Icon";
import { ProjectModal } from "./ProjectModal";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";

const statusStyles: Record<string, string> = {
  Completed: "border-cyber-cyan/30 bg-cyber-cyan/10 text-cyber-cyan",
  Live: "border-cyber-cyan/30 bg-cyber-cyan/10 text-cyber-cyan",
  "In Progress": "border-champagne/30 bg-champagne/10 text-champagne",
  "Concept / Planned": "border-electric-blue/30 bg-electric-blue/10 text-electric-blue",
};

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="font-mono text-[0.65rem] tracking-[0.2em] text-electric-blue">
        {project.index}
      </span>
      <span className="h-px w-6 bg-[color:var(--hairline-strong)]" />
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
  );
}

function ProjectBody({
  project,
  onOpen,
  align = "left",
}: {
  project: Project;
  onOpen: () => void;
  align?: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "lg:text-right" : ""}>
      <ProjectMeta project={project} />
      <h3 className="mt-4 font-sans text-[clamp(2rem,4.5vw,3.6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-platinum">
        {project.title}
      </h3>
      <p className="mt-1 text-base text-silver">{project.subtitle}</p>
      <p className={`mt-4 max-w-md text-sm leading-relaxed text-silver/90 ${align === "right" ? "lg:ml-auto" : ""}`}>
        {project.description}
      </p>
      <ul className={`mt-5 flex flex-wrap gap-2 ${align === "right" ? "lg:justify-end" : ""}`}>
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-[color:var(--hairline)] bg-midnight/40 px-3 py-1 font-mono text-[0.68rem] text-silver"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className={`mt-6 flex flex-wrap items-center gap-4 ${align === "right" ? "lg:justify-end" : ""}`}>
        <button
          type="button"
          onClick={onOpen}
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-platinum transition-colors hover:text-electric-blue"
        >
          <span className="link-underline">Explore Project</span>
          <Icon name="arrow-up-right" className="arrow-shift h-4 w-4" />
        </button>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-silver transition-colors hover:text-platinum"
          >
            GitHub
            <Icon name="github" className="h-4 w-4" />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            className="inline-flex items-center gap-1.5 text-sm text-silver transition-colors hover:text-platinum"
          >
            Live
            <Icon name="external" className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectVisualButton({
  project,
  onOpen,
  className = "",
}: {
  project: Project;
  onOpen: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      data-cursor="VIEW"
      aria-label={`Open ${project.title} case study`}
      className={`group relative block w-full overflow-hidden rounded-[24px] border border-[color:var(--hairline)] bg-midnight/30 text-left transition-[border-color,box-shadow] duration-500 hover:border-electric-blue/35 hover:shadow-[0_0_60px_-10px_rgba(48,130,197,0.25)] ${className}`}
    >
      <div className="aspect-[16/10] w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]">
        <ProjectVisual variant={project.variant} />
      </div>
      <span className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-[color:var(--hairline-strong)] bg-void/80 px-3 py-1.5 font-mono text-[0.6rem] tracking-[0.16em] text-platinum opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
        VIEW PROJECT
        <Icon name="arrow-up-right" className="h-3 w-3" />
      </span>
    </button>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-void via-deep-space to-void" aria-hidden="true" />

      <div className="container-akaza">
        <Reveal className="flex items-center gap-4">
          <span className="eyebrow text-electric-blue">03</span>
          <span className="h-px w-10 bg-[color:var(--hairline-strong)]" />
          <span className="eyebrow">Selected Work</span>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SplitHeading
            text="THINGS I'VE BUILT."
            className="font-sans text-[clamp(2.5rem,6.5vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-platinum"
          />
          <Reveal delay={160}>
            <p className="max-w-sm text-sm leading-relaxed text-silver">
              A selection of projects, experiments and product ideas exploring
              frontend development, digital products and practical problem
              solving.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 space-y-24 sm:space-y-32">
          {projects.map((project) => {
            if (project.layout === "wide") {
              return (
                <Reveal key={project.id} className="group">
                  <div className="max-w-2xl">
                    <ProjectBody project={project} onOpen={() => setSelected(project)} />
                  </div>
                  <div className="mt-8">
                    <ProjectVisualButton project={project} onOpen={() => setSelected(project)} />
                  </div>
                </Reveal>
              );
            }

            if (project.layout === "split") {
              return (
                <Reveal key={project.id} className="group">
                  <div className="grid items-center gap-8 lg:grid-cols-12">
                    <div className="order-2 lg:order-1 lg:col-span-5">
                      <ProjectBody project={project} onOpen={() => setSelected(project)} />
                    </div>
                    <div className="order-1 lg:order-2 lg:col-span-7">
                      <ProjectVisualButton project={project} onOpen={() => setSelected(project)} />
                    </div>
                  </div>
                </Reveal>
              );
            }

            const visualFirst = project.layout === "left";
            return (
              <Reveal key={project.id} className="group">
                <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  <div
                    className={`${
                      visualFirst
                        ? "lg:order-1 lg:col-span-7"
                        : "lg:order-2 lg:col-span-7"
                    }`}
                  >
                    <ProjectVisualButton project={project} onOpen={() => setSelected(project)} />
                  </div>
                  <div
                    className={`${
                      visualFirst
                        ? "lg:order-2 lg:col-span-5"
                        : "lg:order-1 lg:col-span-5"
                    }`}
                  >
                    <ProjectBody
                      project={project}
                      onOpen={() => setSelected(project)}
                      align={visualFirst ? "left" : "right"}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
