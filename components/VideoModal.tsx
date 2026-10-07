"use client";

import React from "react";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import { VideoItem } from "@/data/portfolioData";
import { useDialog } from "@/lib/useDialog";
import { videoPoster } from "./PhoneMockup";

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  const dialogRef = useDialog<HTMLDivElement>(!!video, onClose);

  if (!video) return null;

  const driveEmbedUrl = `https://drive.google.com/file/d/${video.driveId}/preview`;
  const stats = [
    { label: "Views", value: video.views },
    { label: "Likes", value: video.likes },
    { label: "Shares", value: video.shares },
  ];

  return (
    <div
      className="on-dark fixed inset-0 z-overlay flex items-end justify-center bg-ink-950/85 backdrop-blur-md animate-fade sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
        className="relative flex max-h-[100dvh] w-full flex-col overflow-y-auto overscroll-contain bg-ink-900 text-ink-100 shadow-2xl animate-sheet sm:max-h-[92dvh] sm:max-w-4xl sm:rounded-[2rem] sm:border sm:border-ink-800 lg:flex-row lg:overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          data-autofocus
          onClick={onClose}
          className="press absolute right-3 top-[max(0.75rem,env(safe-area-inset-top))] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-ink-850/90 text-ink-100 backdrop-blur hover:bg-ink-800 sm:right-4 sm:top-4"
          aria-label="Close video"
        >
          <X className="h-5 w-5" strokeWidth={1.75} />
        </button>

        {/* Player */}
        <div className="flex shrink-0 items-center justify-center bg-ink-950 px-4 pb-5 pt-[max(4rem,calc(env(safe-area-inset-top)+3.5rem))] sm:p-6 lg:w-1/2">
          <div className="relative aspect-[9/16] h-[min(68dvh,560px)] max-w-full overflow-hidden rounded-2xl bg-black ring-1 ring-ink-800">
            {/* Poster shows through while the Drive player loads */}
            <Image src={videoPoster(video.driveId)} alt="" fill sizes="320px" className="object-cover opacity-60" />
            <iframe
              src={driveEmbedUrl}
              className="relative h-full w-full border-0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              title={video.title}
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between gap-8 p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:p-8 lg:w-1/2 lg:overflow-y-auto">
          <div>
            <p className="font-mono text-xs text-ink-500">
              {video.client}, {video.platform}
            </p>
            <h3 id="video-modal-title" className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-[1.75rem]">
              {video.title}
            </h3>

            <blockquote className="mt-6 border-l-2 border-ink-700 pl-4 text-[15px] italic leading-relaxed text-ink-300">
              &ldquo;{video.hook}&rdquo;
            </blockquote>

            <dl className="mt-6 grid grid-cols-3 divide-x divide-ink-800 rounded-2xl border border-ink-800">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse gap-1 px-4 py-3">
                  <dt className="text-xs text-ink-500">{s.label}</dt>
                  <dd className="tabular font-display text-lg font-semibold">{s.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm leading-relaxed text-ink-300">{video.description}</p>

            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Techniques">
              {video.tags.map((t) => (
                <li key={t} className="rounded-full bg-ink-850 px-3 py-1 text-xs text-ink-300">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={`https://drive.google.com/file/d/${video.driveId}/view`}
            target="_blank"
            rel="noopener noreferrer"
            className="press inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink-100 px-6 text-[15px] font-medium text-ink-950 hover:bg-white"
          >
            Open in Google Drive
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </div>
    </div>
  );
}
