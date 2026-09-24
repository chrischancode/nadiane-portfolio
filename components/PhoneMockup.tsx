"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Play, 
  Heart, 
  MessageCircle, 
  Bookmark, 
  Share2, 
  Music
} from "lucide-react";
import { VideoItem } from "@/data/portfolioData";

interface PhoneMockupProps {
  video: VideoItem;
  onSelectVideo: (video: VideoItem) => void;
  className?: string;
}

export default function PhoneMockup({
  video,
  onSelectVideo,
  className = "",
}: PhoneMockupProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(video.likes);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLiked) {
      setIsLiked(true);
      setLikeCount((prev) => {
        const num = parseFloat(prev.replace("K", ""));
        return !isNaN(num) ? `${(num + 0.1).toFixed(1)}K` : prev;
      });
    } else {
      setIsLiked(false);
    }
  };

  return (
    <div className={`flex flex-col items-center group/phone ${className}`}>
      
      {/* Top Client Label */}
      <div className="w-full max-w-[275px] mb-2.5 flex items-center justify-between px-1">
        <span className="text-[11px] font-mono uppercase font-bold text-rhode-muted truncate">
          {video.client}
        </span>
        <span className="text-[10px] font-mono uppercase font-bold text-rhode-muted">
          {video.platform}
        </span>
      </div>

      {/* Realistic Matte Graphite Phone Mockup */}
      <div
        onClick={() => onSelectVideo(video)}
        className="phone-frame w-[265px] sm:w-[280px] aspect-[9/19] cursor-pointer select-none relative"
        role="button"
        tabIndex={0}
        aria-label={`Watch ${video.title}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onSelectVideo(video);
          }
        }}
      >
        {/* Dynamic Island */}
        <div className="dynamic-island">
          <div className="sensor-dot" />
          <div className="camera-lens" />
        </div>

        {/* Status Bar */}
        <div className="absolute top-2 left-6 right-6 flex items-center justify-between text-[10px] font-mono text-zinc-400 z-30 pointer-events-none">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px]">5G</span>
            <div className="w-3.5 h-2 rounded-[2px] border border-zinc-400 p-[1px] flex items-center">
              <div className="w-full h-full bg-zinc-300 rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="absolute inset-0 w-full h-full bg-[#121110] flex flex-col justify-between p-4 overflow-hidden">
          
          {/* Hook Display on Screen */}
          <div className="my-auto text-center px-2 z-10">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[9px] font-mono tracking-widest uppercase mb-3">
              Hook Preview
            </span>
            <h4 className="font-display font-bold text-lg sm:text-xl text-white leading-tight mb-4">
              &ldquo;{video.hook}&rdquo;
            </h4>

            {/* Play Button */}
            <div className="w-14 h-14 mx-auto rounded-full bg-white text-rhode-dark flex items-center justify-center shadow-lg group-hover/phone:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </div>
            <span className="text-[10px] font-mono uppercase text-zinc-400 mt-2 block tracking-wider">
              Tap to Play Video
            </span>
          </div>

          {/* Right Action Icons (Reels / TikTok) */}
          <div className="absolute right-2.5 bottom-16 flex flex-col items-center gap-3.5 z-20">
            
            {/* Creator Avatar */}
            <div className="w-8 h-8 rounded-full border border-white/60 overflow-hidden">
              <Image
                src="/images/nadiane-hero-main.jpg"
                alt="Nadiane"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>

            {/* Like */}
            <button
              onClick={handleLike}
              className="flex flex-col items-center focus:outline-none"
              aria-label="Like"
            >
              <div className={`p-2 rounded-full transition-colors ${
                isLiked ? "bg-white text-black" : "bg-black/40 text-white"
              }`}>
                <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
              </div>
              <span className="text-[9px] font-mono text-white mt-0.5">{likeCount}</span>
            </button>

            {/* Comments */}
            <div className="flex flex-col items-center">
              <div className="p-2 rounded-full bg-black/40 text-white">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-mono text-white mt-0.5">{video.comments}</span>
            </div>

            {/* Share */}
            <div className="flex flex-col items-center">
              <div className="p-2 rounded-full bg-black/40 text-white">
                <Share2 className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-mono text-white mt-0.5">{video.shares}</span>
            </div>

            {/* Vinyl Audio Disc */}
            <div className="w-8 h-8 rounded-full bg-black border border-zinc-700 flex items-center justify-center animate-vinyl">
              <Music className="w-3 h-3 text-zinc-300" />
            </div>

          </div>

          {/* Bottom Caption Overlay */}
          <div className="z-10 pr-12 text-left pointer-events-none">
            <p className="font-display font-bold text-xs text-white">
              @nadianebandola
            </p>
            <p className="text-[11px] text-zinc-300 line-clamp-2 mt-0.5">
              {video.title}
            </p>
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-400 mt-1">
              <Music className="w-2.5 h-2.5" />
              <span className="truncate">{video.client} &bull; Original Cut</span>
            </div>
          </div>

        </div>

        {/* Home Bar */}
        <div className="home-indicator" />

      </div>

      {/* Video Caption & Click Action */}
      <div className="w-full max-w-[275px] mt-3 text-center">
        <h3 className="font-display font-bold text-sm text-rhode-dark line-clamp-1 group-hover/phone:text-black transition-colors">
          {video.title}
        </h3>
        <p className="text-xs font-mono text-rhode-muted mt-0.5">
          {video.views} Views &bull; {video.client}
        </p>
      </div>

    </div>
  );
}
