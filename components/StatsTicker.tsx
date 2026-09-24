"use client";

import React from "react";
import { Sparkles, Video, Flame, Zap, CheckCircle2, TrendingUp, Layers } from "lucide-react";

export default function StatsTicker() {
  const tickerItems = [
    { label: "9:16 Short-Form Specialist", icon: Video },
    { label: "Meta Ads & TikTok Viral Hooks", icon: Flame },
    { label: "A/B Testing & Multiple Cut Variations", icon: Layers },
    { label: "CapCut Motion Graphics & Captions", icon: Zap },
    { label: "Authentic UGC Content Creation", icon: Sparkles },
    { label: "High-Hold 3-Second Intros", icon: TrendingUp },
    { label: "Fast 24-48h Project Delivery", icon: CheckCircle2 },
  ];

  return (
    <div className="w-full bg-ugc-dark py-4 overflow-hidden border-y border-white/10 select-none">
      <div className="flex w-max animate-marquee space-x-8 items-center">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-display font-bold tracking-wider uppercase text-white/90 whitespace-nowrap"
            >
              <span className="p-1 rounded-full bg-ugc-pink/20 text-ugc-pink">
                <Icon className="w-3.5 h-3.5" />
              </span>
              <span>{item.label}</span>
              <span className="text-white/20 ml-6 text-xs">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
