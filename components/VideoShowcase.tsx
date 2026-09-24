"use client";

import React, { useState } from "react";
import { FolderDown } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import VideoModal from "./VideoModal";
import { SHOWCASE_VIDEOS, VideoItem, CREATOR_PROFILE } from "@/data/portfolioData";

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <section id="videos" className="py-24 sm:py-32 bg-rhode-light border-b border-rhode-border/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-rhode-muted block mb-2">
              Featured 9:16 Video Showcase
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-rhode-dark tracking-tight">
              Selected Work.
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-rhode-muted font-normal leading-relaxed">
              Three key vertical edits demonstrating fast hook retention, tactile unboxing pacing, and clean aesthetic lifestyle cuts.
            </p>
          </div>

          <a
            href={CREATOR_PROFILE.portfolioDriveVideos}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-rhode-dark hover:text-white border border-rhode-border text-xs font-bold uppercase tracking-wider text-rhode-dark transition-all self-start md:self-auto shadow-sm"
          >
            <FolderDown className="w-3.5 h-3.5" />
            <span>Google Drive Archive</span>
          </a>
        </div>

        {/* Exactly 3 Phone Mockups in balanced 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
          {SHOWCASE_VIDEOS.map((video) => (
            <PhoneMockup
              key={video.id}
              video={video}
              onSelectVideo={(v) => setSelectedVideo(v)}
            />
          ))}
        </div>

        {/* Minimalist Bottom Note */}
        <div className="mt-14 pt-8 border-t border-rhode-border/70 text-center">
          <p className="text-xs font-mono text-rhode-muted">
            Tap any device mockup above to stream the high-resolution edit natively.
          </p>
        </div>

      </div>

      {/* Modal Player */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}
