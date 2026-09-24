"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, FolderDown } from "lucide-react";
import { CREATOR_PROFILE } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-rhode-dark text-white border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-neutral-900">
          
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-800">
              <Image
                src={CREATOR_PROFILE.heroImage}
                alt={CREATOR_PROFILE.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-display font-bold text-base text-white tracking-tight uppercase">
                {CREATOR_PROFILE.name}
              </span>
              <p className="text-xs text-neutral-400 font-mono">
                {CREATOR_PROFILE.role}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-400">
            <a href="#videos" className="hover:text-white transition-colors">Videos</a>
            <a href="#designs" className="hover:text-white transition-colors">Designs</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a 
              href={CREATOR_PROFILE.portfolioDriveVideos} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-neutral-300 transition-colors flex items-center gap-1"
            >
              <span>Drive</span>
              <FolderDown className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center transition-colors border border-neutral-800"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {CREATOR_PROFILE.name}. All rights reserved.
          </p>

          <p>
            Based in {CREATOR_PROFILE.location}
          </p>
        </div>

      </div>
    </footer>
  );
}
