"use client";

import React, { useState } from "react";
import { GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import { EXPERIENCES_DATA, CREATOR_PROFILE } from "@/data/portfolioData";

export default function ExperienceSection() {
  const [filter, setFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>("scooch");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filtered = EXPERIENCES_DATA.filter((item) => {
    if (filter === "all") return true;
    if (filter === "video") return item.role.toLowerCase().includes("video");
    if (filter === "design") return item.role.toLowerCase().includes("graphic");
    if (filter === "social") return item.role.toLowerCase().includes("social") || item.role.toLowerCase().includes("affiliate");
    return true;
  });

  return (
    <section id="experience" className="py-24 sm:py-32 bg-rhode-bg border-b border-rhode-border/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-rhode-muted block mb-2">
            Career &amp; Professional Background
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-rhode-dark tracking-tight">
            Work Experience.
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-rhode-muted font-normal leading-relaxed">
            All professional agency contracts, e-commerce brands, and social media positions as detailed on resume.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 mb-10">
          {[
            { id: "all", label: `All Roles (${EXPERIENCES_DATA.length})` },
            { id: "video", label: "Video Editing" },
            { id: "design", label: "Graphic Design" },
            { id: "social", label: "Social Media" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase font-bold tracking-wider transition-all ${
                filter === tab.id
                  ? "bg-rhode-dark text-white"
                  : "bg-white text-rhode-muted border border-rhode-border hover:bg-rhode-surface"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Experience List */}
        <div className="divide-y divide-rhode-border border-y border-rhode-border">
          {filtered.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className="py-6 transition-colors"
              >
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="flex items-start justify-between cursor-pointer select-none group"
                >
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-rhode-muted uppercase mb-1">
                      <span>{exp.company}</span>
                      <span>&bull;</span>
                      <span>{exp.location}</span>
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-rhode-dark group-hover:text-rhode-muted transition-colors">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-rhode-muted whitespace-nowrap">
                      {exp.period}
                    </span>
                    <button
                      className="p-1 text-rhode-muted group-hover:text-rhode-dark transition-colors"
                      aria-label="Expand"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-4 pt-3 text-xs sm:text-sm text-rhode-muted space-y-2 animate-in fade-in duration-200">
                    <ul className="list-disc list-inside space-y-1.5 pl-1 leading-relaxed">
                      {exp.bulletPoints.map((pt, i) => (
                        <li key={i}>
                          {pt}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {exp.tools.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded-full bg-white border border-rhode-border text-[10px] font-mono text-rhode-dark">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Education Card */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-white border border-rhode-border shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-rhode-dark text-white shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-rhode-muted block">
                Education
              </span>
              <h3 className="font-display font-bold text-base sm:text-lg text-rhode-dark mt-0.5">
                {CREATOR_PROFILE.education.degree}
              </h3>
              <p className="text-xs text-rhode-muted font-mono mt-0.5">
                {CREATOR_PROFILE.education.institution} &bull; {CREATOR_PROFILE.education.location} &bull; {CREATOR_PROFILE.education.years}
              </p>
            </div>
          </div>

          {/* MedTech to Video Editor Joke */}
          <div className="mt-5 p-4 rounded-xl bg-[#FAF9F6] border border-rhode-border/70 flex items-start gap-3">
            <span className="text-base select-none mt-0.5">🔬</span>
            <p className="text-xs text-rhode-muted leading-relaxed font-normal">
              <strong className="text-rhode-dark font-medium">Plot twist:</strong> From centrifuges, blood smears, and microscopes to timeline cuts, keyframes, and color grading. If I can analyze cell morphology under 100x oil immersion with zero room for error, your retention curves, pacing, and creative A/B tests are in very safe hands. Diagnosing why an ad stops converting takes the exact same forensic precision, just with much better lighting.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
