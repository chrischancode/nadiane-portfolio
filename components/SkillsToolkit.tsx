"use client";

import React, { useState } from "react";
import { Check, Video, TrendingUp, Sparkles, Layers } from "lucide-react";
import { SKILL_PILLARS } from "@/data/portfolioData";

export default function SkillsToolkit() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="expertise" className="py-24 sm:py-32 bg-rhode-bg border-b border-rhode-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-rhode-muted block mb-2">
              Capabilities &amp; Creative Methodology
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-rhode-dark tracking-tight">
              Skills &amp; Capabilities.
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-rhode-muted font-normal leading-relaxed">
              Three core pillars engineered to turn fast-scrolling attention into sustained engagement and measurable performance.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rhode-dark animate-pulse" />
            <span className="text-xs font-mono uppercase font-bold text-rhode-muted">
              End-to-End Creative Stack
            </span>
          </div>
        </div>

        {/* 3 Luxury Editorial Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className="bg-rhode-card rounded-3xl p-7 sm:p-8 border border-rhode-border hover:border-rhode-dark/40 hover:shadow-luxe transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Pillar Number & Tagline */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-rhode-border/60">
                  <span className="font-mono text-sm font-bold text-rhode-muted">
                    {pillar.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rhode-muted bg-rhode-surface px-2.5 py-1 rounded-full">
                    {pillar.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-rhode-dark tracking-tight mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-rhode-muted leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>

                {/* Bullet points */}
                <div className="space-y-2.5 pt-2">
                  {pillar.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-2.5 text-xs font-medium text-rhode-charcoal"
                    >
                      <div className="w-4 h-4 rounded-full bg-rhode-surface text-rhode-dark flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="mt-8 pt-4 border-t border-rhode-border/60 flex items-center justify-between text-[11px] font-mono text-rhode-muted">
                <span>Verified in Client Ad Accounts</span>
                <span className="text-rhode-dark font-bold">&bull; Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
