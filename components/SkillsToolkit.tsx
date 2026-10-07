import React from "react";
import { SKILL_PILLARS, TOOLKIT } from "@/data/portfolioData";
import Reveal from "./Reveal";

export default function SkillsToolkit() {
  const [lead, ...rest] = SKILL_PILLARS;

  return (
    <section id="expertise" aria-labelledby="expertise-heading" className="py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-8 max-w-xl sm:mb-10">
          <h2 id="expertise-heading" className="font-display text-[2.5rem] font-semibold leading-[1] tracking-display text-rhode-dark sm:text-6xl">
            What I do
          </h2>
          <p className="mt-4 text-base leading-relaxed text-rhode-muted sm:text-lg">
            Three disciplines that turn a fast scroll into watch time, clicks and sales.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-5 lg:grid-rows-[auto_auto_auto]">
          {/* Lead pillar: the core craft, given the most room */}
          <Reveal className="on-dark relative flex flex-col overflow-hidden rounded-[1.75rem] bg-ink-900 p-6 text-ink-100 sm:p-10 lg:col-span-3 lg:row-span-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(241,237,230,0.12),transparent)]"
            />
            <p className="font-mono text-xs text-ink-500">{lead.number}</p>
            <h3 className="mt-6 max-w-md font-display text-[1.75rem] font-semibold leading-[1.05] tracking-tight sm:mt-10 sm:text-[2.5rem] lg:text-5xl">
              {lead.title}
            </h3>
            <p className="mt-2 text-sm text-ink-300">{lead.tagline}</p>
            <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-ink-300">{lead.description}</p>
            <ul className="mt-7 flex flex-wrap gap-2 lg:mt-auto lg:pt-8" aria-label={`${lead.title} capabilities`}>
              {lead.capabilities.map((cap) => (
                <li key={cap} className="rounded-full border border-ink-700 px-3.5 py-1.5 text-[13px] text-ink-100">
                  {cap}
                </li>
              ))}
            </ul>
          </Reveal>

          {rest.map((pillar, i) => (
            <Reveal
              key={pillar.number}
              delay={(i + 1) * 80}
              className="rounded-[1.75rem] border border-rhode-border bg-rhode-card p-6 sm:p-8 lg:col-span-2"
            >
              <p className="font-mono text-xs text-rhode-muted">{pillar.number}</p>
              <h3 className="mt-4 font-display text-[1.375rem] font-semibold leading-tight tracking-tight text-rhode-dark sm:text-2xl">
                {pillar.title}
              </h3>
              <p className="mt-1.5 text-sm text-rhode-muted">{pillar.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-rhode-charcoal/80">{pillar.description}</p>
              <ul className="mt-6 flex flex-wrap gap-1.5" aria-label={`${pillar.title} capabilities`}>
                {pillar.capabilities.map((cap) => (
                  <li key={cap} className="rounded-full bg-rhode-surface px-3 py-1 text-xs text-rhode-charcoal">
                    {cap}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          {/* Toolkit strip */}
          <Reveal
            delay={240}
            className="flex flex-col gap-4 rounded-[1.75rem] border border-dashed border-rhode-sand p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:col-span-5"
          >
            <h3 className="shrink-0 font-display text-lg font-semibold tracking-tight text-rhode-dark">Daily toolkit</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-rhode-charcoal sm:justify-end" aria-label="Software">
              {TOOLKIT.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
