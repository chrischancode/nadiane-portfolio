"use client";

import React from "react";
import { 
  Instagram, 
  Shield, 
  Feather, 
  Sparkles, 
  Clapperboard, 
  HeartHandshake, 
  Gem,
  ArrowUpRight
} from "lucide-react";
import { BRAND_PARTNERS } from "@/data/portfolioData";

export default function BrandLogoCloud() {
  const getBrandLogo = (type: string, name: string) => {
    switch (type) {
      case "youtube":
        return (
          <div className="w-9 h-9 rounded-xl bg-[#FF0000] flex items-center justify-center text-white shadow-sm">
            <svg 
              viewBox="0 0 24 24" 
              className="w-4 h-4 fill-white ml-0.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="8,5.5 19,12 8,18.5" fill="white" />
            </svg>
          </div>
        );
      case "instagram":
        return (
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
            <Instagram className="w-5 h-5" />
          </div>
        );
      case "agency":
        if (name.includes("Birdie")) {
          return (
            <div className="w-9 h-9 rounded-xl bg-rhode-dark text-rhode-light flex items-center justify-center shadow-sm">
              <Feather className="w-5 h-5" />
            </div>
          );
        }
        return (
          <div className="w-9 h-9 rounded-xl bg-rhode-dark text-rhode-light flex items-center justify-center shadow-sm">
            <Clapperboard className="w-5 h-5" />
          </div>
        );
      case "brand":
        if (name.includes("Scooch")) {
          return (
            <div className="w-9 h-9 rounded-xl bg-rhode-dark text-rhode-light flex items-center justify-center shadow-sm">
              <Shield className="w-5 h-5" />
            </div>
          );
        }
        if (name.includes("Damon")) {
          return (
            <div className="w-9 h-9 rounded-xl bg-[#2B2925] text-amber-200 flex items-center justify-center shadow-sm">
              <HeartHandshake className="w-5 h-5" />
            </div>
          );
        }
        if (name.includes("Rebirth")) {
          return (
            <div className="w-9 h-9 rounded-xl bg-[#322F2B] text-rose-200 flex items-center justify-center shadow-sm">
              <Gem className="w-5 h-5" />
            </div>
          );
        }
        return (
          <div className="w-9 h-9 rounded-xl bg-rhode-dark text-rhode-light flex items-center justify-center shadow-sm">
            <Sparkles className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="w-9 h-9 rounded-xl bg-rhode-dark text-rhode-light flex items-center justify-center shadow-sm font-display font-bold text-xs">
            {name.charAt(0)}
          </div>
        );
    }
  };

  return (
    <section className="py-20 bg-rhode-bg border-b border-rhode-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 pb-4 border-b border-rhode-border gap-2">
          <div>
            <span className="text-[11px] font-mono uppercase font-bold tracking-widest text-rhode-muted block">
              Collaborations &amp; International Brand Partners
            </span>
            <p className="text-xs text-rhode-muted mt-0.5">
              Creator accounts, direct-to-consumer labels, and global marketing agencies
            </p>
          </div>
          <span className="text-[11px] font-mono text-rhode-muted">
            USA &bull; Germany &bull; Australia &bull; Canada &bull; Philippines
          </span>
        </div>

        {/* Brand Cards Grid with Authentic Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BRAND_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="p-5 rounded-2xl bg-rhode-card border border-rhode-border hover:border-rhode-dark/40 hover:shadow-luxe transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Logo & Platform Tag */}
                <div className="flex items-center justify-between mb-4">
                  {getBrandLogo(partner.type, partner.name)}
                  
                  {partner.platformBadge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-rhode-surface border border-rhode-border/70 text-[10px] font-mono uppercase tracking-wider text-rhode-dark font-medium">
                      {partner.platformBadge}
                    </span>
                  )}
                </div>

                {/* Partner Name & Social Handle */}
                <div className="flex items-center gap-1.5">
                  <h3 className="font-display font-bold text-base text-rhode-dark tracking-tight group-hover:text-black transition-colors">
                    {partner.name}
                  </h3>
                  {partner.type === "instagram" && (
                    <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-blue-500 text-white text-[9px] font-black">
                      ✓
                    </span>
                  )}
                </div>

                {partner.handle && (
                  <p className="text-[11px] font-mono text-rhode-muted mt-0.5">
                    {partner.handle}
                  </p>
                )}

                <p className="text-xs text-rhode-muted font-normal mt-1">
                  {partner.category} &bull; {partner.country}
                </p>
              </div>

              {/* Scope / Role */}
              <div className="mt-4 pt-3 border-t border-rhode-border/60 flex items-center justify-between">
                <span className="text-[11px] font-medium text-rhode-dark truncate">
                  {partner.role}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-rhode-muted group-hover:text-rhode-dark transition-colors shrink-0" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
