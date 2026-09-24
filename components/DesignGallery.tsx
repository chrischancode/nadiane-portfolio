"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FolderDown, ZoomIn, X, ArrowUpRight } from "lucide-react";
import { GRAPHICS_DATA, GraphicItem, CREATOR_PROFILE } from "@/data/portfolioData";

export default function DesignGallery() {
  const [lightboxItem, setLightboxItem] = useState<GraphicItem | null>(null);

  // Close lightbox on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxItem(null);
      }
    };

    if (lightboxItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxItem]);

  return (
    <section id="designs" className="py-24 sm:py-32 bg-rhode-bg border-b border-rhode-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-rhode-muted block mb-2">
              Visual Design &bull; Amazon EBC &bull; Social Branding
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-rhode-dark tracking-tight">
              Design Gallery.
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-rhode-muted font-normal leading-relaxed">
              Conversion-focused Amazon listing infographics, community brand campaigns, and promotional digital assets.
            </p>
          </div>

          <a
            href={CREATOR_PROFILE.portfolioDriveGraphics}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-rhode-dark hover:text-white border border-rhode-border text-xs font-bold uppercase tracking-wider text-rhode-dark transition-all self-start md:self-auto shadow-sm"
          >
            <FolderDown className="w-3.5 h-3.5" />
            <span>Google Drive Graphics</span>
          </a>
        </div>

        {/* Minimalist Editorial Grid: No images visible until clicked */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {GRAPHICS_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group cursor-pointer border-t border-rhode-border hover:border-rhode-dark pt-5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-rhode-muted tracking-wider block">
                    {item.category}
                  </span>
                  <span className="p-1.5 rounded-full bg-rhode-card group-hover:bg-rhode-dark group-hover:text-white text-rhode-muted transition-colors">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-rhode-dark group-hover:text-black transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-rhode-muted font-normal mt-2 leading-relaxed line-clamp-2">
                  {item.client} &bull; {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-rhode-border/50 flex items-center justify-between text-xs font-mono text-rhode-dark">
                <span className="text-[11px] text-rhode-muted group-hover:text-rhode-dark transition-colors">
                  Click to inspect asset
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-rhode-muted group-hover:text-rhode-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal: Shows the full graphic when an item is clicked */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-rhode-card rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] border border-rhode-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High-Resolution Graphic Display */}
            <div className="relative w-full h-[65vh] bg-[#171614] flex items-center justify-center p-4">
              <Image
                src={lightboxItem.imageSrc}
                alt={lightboxItem.title}
                fill
                className="object-contain p-2"
                unoptimized
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-6 bg-rhode-card border-t border-rhode-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-rhode-muted block">
                  {lightboxItem.category} &bull; {lightboxItem.client}
                </span>
                <h3 className="font-display font-bold text-lg text-rhode-dark mt-0.5">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs text-rhode-muted mt-1 max-w-xl">
                  {lightboxItem.description}
                </p>
              </div>
              <a
                href={CREATOR_PROFILE.portfolioDriveGraphics}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-rhode-dark hover:bg-black text-white text-xs font-bold font-display uppercase tracking-wider transition-colors shrink-0"
              >
                Drive Folder &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
