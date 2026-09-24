"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, FolderDown, Play } from "lucide-react";
import { CREATOR_PROFILE } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-rhode-bg border-b border-rhode-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Rhode Inspired Simple Luxury Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Minimal Location & Field Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rhode-card border border-rhode-border text-[11px] font-mono tracking-wider text-rhode-muted uppercase mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-rhode-dark" />
              <span>Kabankalan, Philippines</span>
            </div>

            {/* Editorial Title */}
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tighter text-rhode-dark leading-[1.02] mb-5">
              Nadiane Bandola.
            </h1>

            {/* Sub-headline */}
            <p className="font-display font-medium text-xl sm:text-2xl text-rhode-charcoal tracking-tight mb-5">
              Video editing &amp; design for the modern feed.
            </p>

            {/* Thoughtful, concise luxury copy */}
            <p className="text-sm sm:text-base text-rhode-muted leading-relaxed max-w-xl mb-8 font-normal">
              Specializing in short-form video ads for Meta, TikTok, and YouTube Shorts, alongside brand design and social strategy. Every cut, hook, and layout is crafted with intention: stopping the scroll, holding audience attention, and driving measurable conversion with quiet sophistication.
            </p>

            {/* Clean Pill Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="#videos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-rhode-dark hover:bg-black text-white font-display text-xs font-bold tracking-wide transition-all shadow-luxe hover:-translate-y-0.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Selected Videos (3)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-rhode-card hover:bg-rhode-surface text-rhode-dark border border-rhode-border font-display text-xs font-bold tracking-wide transition-all shadow-sm hover:-translate-y-0.5"
              >
                <span>Let&apos;s Collaborate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={CREATOR_PROFILE.portfolioDriveVideos}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-transparent hover:bg-rhode-card text-rhode-muted hover:text-rhode-dark border border-rhode-border text-xs font-medium transition-all"
                title="Google Drive Archive"
              >
                <FolderDown className="w-3.5 h-3.5" />
                <span>Drive Archive</span>
              </a>
            </div>

            {/* Clean Stats Strip (No 9:16 Aspect Ratio mention as requested) */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-rhode-border w-full max-w-lg">
              {CREATOR_PROFILE.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display font-black text-2xl sm:text-3xl text-rhode-dark tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rhode-muted mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Single Hero Image in Rhode Luxury Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm">
              <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden bg-rhode-surface border border-rhode-border shadow-luxe group">
                <Image
                  src={CREATOR_PROFILE.heroImage}
                  alt="Nadiane Bandola - Video Editor & Graphic Designer"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-top filter contrast-[1.02] transition-transform duration-700 group-hover:scale-102"
                  priority
                />

                {/* Minimalist Top Chip */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-rhode-card/90 backdrop-blur-md text-[10px] font-mono tracking-wider uppercase text-rhode-dark border border-rhode-border/60 shadow-sm">
                    Nadiane Bandola
                  </span>
                  <span className="w-2 h-2 rounded-full bg-rhode-card animate-pulse shadow-sm" />
                </div>

                {/* Understated Bottom Bar */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/75 via-black/25 to-transparent text-white">
                  <p className="font-display font-bold text-base tracking-tight">
                    {CREATOR_PROFILE.name}
                  </p>
                  <p className="text-xs text-white/80 font-mono mt-0.5">
                    Video &bull; Design &bull; Social
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
