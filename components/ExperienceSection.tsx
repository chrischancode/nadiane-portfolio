"use client";

import React, { useState } from "react";
import { GraduationCap, Microscope, Plus } from "lucide-react";
import { EXPERIENCES_DATA, CREATOR_PROFILE, ExperienceItem } from "@/data/portfolioData";
import Reveal from "./Reveal";

const FILTERS = [
  { id: "all", label: "All roles" },
  { id: "video", label: "Video editing" },
  { id: "design", label: "Graphic design" },
  { id: "social", label: "Social media" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

const INITIAL_VISIBLE = 6;

function matches(item: ExperienceItem, filter: FilterId) {
  const role = item.role.toLowerCase();
  if (filter === "video") return role.includes("video");
  if (filter === "design") return role.includes("graphic");
  if (filter === "social") return role.includes("social") || role.includes("affiliate");
  return true;
}

export default function ExperienceSection() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES_DATA[0]?.id ?? null);
  const [showAll, setShowAll] = useState(false);

  const filtered = EXPERIENCES_DATA.filter((item) => matches(item, filter));
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hiddenCount = filtered.length - visible.length;

  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-t border-rhode-border bg-rhode-light/70 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        {/* Sticky intro column on desktop */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <h2 id="experience-heading" className="font-display text-[2.5rem] font-semibold leading-[1] tracking-display text-rhode-dark sm:text-6xl">
                Experience
              </h2>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-rhode-muted sm:text-lg">
                Agency contracts, e-commerce brands and social roles, most of them running in parallel.
              </p>
            </Reveal>

            {/* Filters: one swipeable row on phones */}
            <div
              role="group"
              aria-label="Filter roles"
              className="snap-row -mx-5 mt-6 gap-2 px-5 sm:mx-0 sm:flex-wrap sm:px-0 lg:mt-8"
            >
              {FILTERS.map((tab) => {
                const isActive = filter === tab.id;
                const count = EXPERIENCES_DATA.filter((e) => matches(e, tab.id)).length;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setFilter(tab.id);
                      setShowAll(false);
                    }}
                    aria-pressed={isActive}
                    className={`press inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium ${
                      isActive
                        ? "bg-rhode-dark text-rhode-light"
                        : "border border-rhode-border bg-rhode-card text-rhode-charcoal hover:border-rhode-dark/30"
                    }`}
                  >
                    {tab.label}
                    <span className={`tabular font-mono text-xs ${isActive ? "text-rhode-light/60" : "text-rhode-muted"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ul className="border-t border-rhode-dark/80">
            {visible.map((exp) => {
              const isExpanded = expandedId === exp.id;
              const panelId = `exp-${exp.id}`;
              return (
                <li key={exp.id} className="border-b border-rhode-border">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                      aria-expanded={isExpanded}
                      aria-controls={panelId}
                      className="group grid w-full grid-cols-[1fr_auto] items-start gap-x-4 py-4 text-left sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-x-8 sm:py-5"
                    >
                      <span className="min-w-0">
                        <span className="block font-display text-lg font-semibold leading-snug tracking-tight text-rhode-dark transition-colors group-hover:text-rhode-charcoal sm:text-xl">
                          {exp.role}
                        </span>
                        <span className="mt-1 block text-sm text-rhode-muted">
                          {exp.company}, {exp.location}
                        </span>
                        {/* Period sits under the company on phones */}
                        <span className="mt-1 block font-mono text-xs text-rhode-muted sm:hidden">{exp.period}</span>
                      </span>

                      <span className="hidden whitespace-nowrap font-mono text-xs text-rhode-muted sm:block">{exp.period}</span>

                      <span
                        aria-hidden="true"
                        className={`mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-300 ease-out-expo sm:mt-0 ${
                          isExpanded
                            ? "rotate-45 border-rhode-dark bg-rhode-dark text-rhode-light"
                            : "border-rhode-border text-rhode-dark group-hover:border-rhode-dark/40"
                        }`}
                      >
                        <Plus className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                    </button>
                  </h3>

                  {/* Height animates via grid rows, no measuring needed */}
                  <div
                    id={panelId}
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out-expo ${
                      isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                    inert={!isExpanded ? ("" as unknown as boolean) : undefined}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-2 pb-5 pr-2 text-[15px] leading-relaxed text-rhode-charcoal/85 sm:pr-14">
                        {exp.bulletPoints.map((pt, i) => (
                          <li key={i} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-rhode-sand">
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <ul className="flex flex-wrap gap-1.5 pb-5" aria-label="Tools and skills">
                        {exp.tools.map((t) => (
                          <li key={t} className="rounded-full bg-rhode-surface px-3 py-1 text-xs text-rhode-charcoal">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {hiddenCount > 0 && (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="press mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-rhode-border bg-rhode-card px-5 text-sm font-medium text-rhode-dark hover:border-rhode-dark/30"
            >
              Show {hiddenCount} more {hiddenCount === 1 ? "role" : "roles"}
              <Plus className="h-4 w-4" strokeWidth={1.75} />
            </button>
          )}

          {/* Education */}
          <Reveal className="mt-10 rounded-[1.75rem] border border-rhode-border bg-rhode-card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rhode-dark text-rhode-light">
                <GraduationCap className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <p className="text-sm text-rhode-muted">Education</p>
                <h3 className="mt-0.5 font-display text-lg font-semibold leading-snug tracking-tight text-rhode-dark">
                  {CREATOR_PROFILE.education.degree}
                </h3>
                <p className="mt-1 text-sm text-rhode-muted">
                  {CREATOR_PROFILE.education.institution}, {CREATOR_PROFILE.education.location}
                  <span className="tabular whitespace-nowrap font-mono text-xs"> {CREATOR_PROFILE.education.years}</span>
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 border-t border-rhode-border pt-6">
              <Microscope className="mt-0.5 h-5 w-5 shrink-0 text-rhode-muted" strokeWidth={1.5} aria-hidden="true" />
              <p className="text-sm leading-relaxed text-rhode-muted">
                <strong className="font-medium text-rhode-dark">Plot twist:</strong> From centrifuges, blood smears and microscopes to timeline cuts, keyframes and color grading. If I can read cell morphology under 100x oil immersion with zero room for error, your retention curves, pacing and creative A/B tests are in safe hands. Diagnosing why an ad stops converting takes the same forensic precision, just with much better lighting.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
