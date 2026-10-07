"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Heart, MessageCircle, Share2, Music } from "lucide-react";
import { VideoItem, CREATOR_PROFILE } from "@/data/portfolioData";

interface PhoneMockupProps {
  video: VideoItem;
  onSelectVideo: (video: VideoItem) => void;
  className?: string;
}

/** First frame of the Drive video, served by Google's public thumbnail CDN. */
export function videoPoster(driveId: string, width = 640) {
  return `https://lh3.googleusercontent.com/d/${driveId}=w${width}`;
}

export default function PhoneMockup({ video, onSelectVideo, className = "" }: PhoneMockupProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  const likeCount = (() => {
    if (!isLiked) return video.likes;
    const num = parseFloat(video.likes.replace("K", ""));
    return !isNaN(num) && video.likes.endsWith("K") ? `${(num + 0.1).toFixed(1)}K` : video.likes;
  })();

  return (
    <article className={`group/phone flex flex-col ${className}`}>
      <div className="phone-frame aspect-[9/19] w-full">
        {/* Whole screen opens the player; sits under the like button. */}
        <button
          type="button"
          onClick={() => onSelectVideo(video)}
          className="absolute inset-0 z-10 rounded-[35px] focus-visible:outline-offset-[-4px]"
          aria-label={`Play video: ${video.title}`}
        />

        <div className="dynamic-island pointer-events-none">
          <div className="sensor-dot" />
          <div className="camera-lens" />
        </div>

        {/* Status bar */}
        <div className="pointer-events-none absolute left-6 right-6 top-[9px] z-30 flex items-center justify-between font-mono text-[10px] font-medium text-white/90">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px]">5G</span>
            <div className="flex h-2 w-3.5 items-center rounded-[2px] border border-white/80 p-[1px]">
              <div className="h-full w-full rounded-[1px] bg-white/90" />
            </div>
          </div>
        </div>

        {/* Screen */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#121110]">
          {!posterFailed ? (
            <Image
              src={videoPoster(video.driveId)}
              alt=""
              fill
              sizes="(max-width: 768px) 75vw, 300px"
              className="object-cover transition-transform duration-700 ease-out-expo group-hover/phone:scale-[1.03]"
              onError={() => setPosterFailed(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center">
              <p className="font-display text-lg font-semibold leading-tight text-white">&ldquo;{video.hook}&rdquo;</p>
            </div>
          )}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/55 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        {/* Play affordance */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-md transition-transform duration-500 ease-out-expo group-hover/phone:scale-110 group-active/phone:scale-95">
            <Play className="ml-1 h-6 w-6 fill-current" strokeWidth={1.5} />
          </span>
        </div>

        {/* Right action rail */}
        <div className="absolute bottom-16 right-2.5 z-20 flex flex-col items-center gap-3 text-white">
          <div className="pointer-events-none relative h-9 w-9 overflow-hidden rounded-full border-2 border-white">
            <Image src={CREATOR_PROFILE.heroImage} alt="" fill sizes="36px" className="object-cover" />
          </div>

          <button
            type="button"
            onClick={() => setIsLiked((v) => !v)}
            className="flex flex-col items-center"
            aria-label={isLiked ? "Unlike" : "Like"}
            aria-pressed={isLiked}
          >
            <span className={`press rounded-full p-1.5 active:scale-90 ${isLiked ? "text-[#FF4D67]" : ""}`}>
              <Heart className={`h-6 w-6 drop-shadow ${isLiked ? "fill-current" : ""}`} strokeWidth={1.75} />
            </span>
            <span className="tabular font-mono text-[10px] font-medium drop-shadow">{likeCount}</span>
          </button>

          <div className="pointer-events-none flex flex-col items-center" aria-hidden="true">
            <MessageCircle className="h-6 w-6 drop-shadow" strokeWidth={1.75} />
            <span className="tabular mt-0.5 font-mono text-[10px] font-medium drop-shadow">{video.comments}</span>
          </div>

          <div className="pointer-events-none flex flex-col items-center" aria-hidden="true">
            <Share2 className="h-6 w-6 drop-shadow" strokeWidth={1.75} />
            <span className="tabular mt-0.5 font-mono text-[10px] font-medium drop-shadow">{video.shares}</span>
          </div>

          <div className="pointer-events-none flex h-8 w-8 items-center justify-center rounded-full border-[5px] border-[#1d1c1a] bg-[#3a3632] animate-vinyl" aria-hidden="true">
            <Music className="h-3 w-3 text-white/80" />
          </div>
        </div>

        {/* Caption overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-4 pb-6 pr-14 text-white">
          <p className="font-display text-[13px] font-semibold">@nadianebandola</p>
          <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-white/85">{video.title}</p>
          <p className="mt-1.5 flex items-center gap-1.5 font-mono text-[10px] text-white/70">
            <Music className="h-2.5 w-2.5 shrink-0" />
            <span className="truncate">Original cut for {video.client}</span>
          </p>
        </div>

        <div className="home-indicator pointer-events-none" />
      </div>

      {/* Details below the device */}
      <div className="mt-5 px-1">
        <div className="flex items-center justify-between gap-3 font-mono text-[11px] text-rhode-muted">
          <span className="truncate">{video.client}</span>
          <span className="shrink-0">{video.platform}</span>
        </div>
        <h3 className="mt-2 font-display text-[17px] font-semibold leading-snug tracking-tight text-rhode-dark">
          {video.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-rhode-muted">
          Hook: &ldquo;{video.hook}&rdquo;
        </p>
      </div>
    </article>
  );
}
