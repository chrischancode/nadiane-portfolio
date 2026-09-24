"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Play, Eye, Heart, Share2, FolderDown } from "lucide-react";
import { VideoItem, CREATOR_PROFILE } from "@/data/portfolioData";

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (video) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  const driveEmbedUrl = `https://drive.google.com/file/d/${video.driveId}/preview`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-black rounded-[32px] overflow-hidden shadow-2xl border border-zinc-800 flex flex-col lg:flex-row max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-40 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player */}
        <div className="lg:w-1/2 bg-zinc-950 flex items-center justify-center p-4 sm:p-6 shrink-0 border-b lg:border-b-0 lg:border-r border-zinc-800">
          <div className="relative w-[280px] sm:w-[310px] aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-2xl border border-zinc-800">
            <iframe
              src={driveEmbedUrl}
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media; picture-in-picture"
              title={video.title}
            />
          </div>
        </div>

        {/* Video Info */}
        <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto text-white">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[11px] font-mono uppercase font-bold">
                {video.platform}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {video.client}
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl text-white leading-snug mb-4">
              {video.title}
            </h3>

            {/* Hook Box */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 mb-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                Hook Angle:
              </span>
              <p className="text-sm font-medium text-white italic">
                &ldquo;{video.hook}&rdquo;
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-0.5">Views</span>
                <span className="font-display font-bold text-base text-white">{video.views}</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-0.5">Likes</span>
                <span className="font-display font-bold text-base text-white">{video.likes}</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-0.5">Shares</span>
                <span className="font-display font-bold text-base text-white">{video.shares}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
              {video.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {video.tags.map((t) => (
                <span 
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
            <a
              href={`https://drive.google.com/file/d/${video.driveId}/view`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-zinc-300 transition-colors"
            >
              <span>Open in Google Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="py-2.5 px-5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
