"use client";

import React, { useCallback, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import VideoModal from "./VideoModal";
import Reveal from "./Reveal";
import { SHOWCASE_VIDEOS, VideoItem, CREATOR_PROFILE } from "@/data/portfolioData";

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const closeVideo = useCallback(() => setSelectedVideo(null), []);

  return (
    <section id="videos" aria-labelledby="videos-heading" className="py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 id="videos-heading" className="font-display text-[2.5rem] font-semibold leading-[1] tracking-display text-rhode-dark sm:text-6xl">
              Selected work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-rhode-muted sm:text-lg">
              Three vertical edits for Scooch: a fast problem hook, a tactile unboxing and a slower lifestyle cut.
            </p>
          </div>
          <a
            href={CREATOR_PROFILE.portfolioDriveVideos}
            target="_blank"
            rel="noopener noreferrer"
            className="press inline-flex items-center gap-1.5 self-start whitespace-nowrap text-[15px] font-medium text-rhode-dark underline decoration-rhode-sand underline-offset-[6px] hover:decoration-rhode-dark sm:self-auto"
          >
            More edits on Google Drive
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </Reveal>

        {/* Swipeable on phones, three-up from tablet */}
        <ul
          className="snap-row -mx-5 gap-4 px-5 pb-2 sm:-mx-8 sm:gap-6 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-10 lg:overflow-visible lg:px-0"
          aria-label="Video edits"
        >
          {SHOWCASE_VIDEOS.map((video, i) => (
            <Reveal
              as="li"
              key={video.id}
              delay={i * 90}
              className="w-[72vw] max-w-[300px] shrink-0 lg:w-auto lg:max-w-none"
            >
              <PhoneMockup video={video} onSelectVideo={setSelectedVideo} />
            </Reveal>
          ))}
          {/* Keeps the end gutter: some Safari versions drop right padding in scrollers */}
          <li aria-hidden="true" className="w-px shrink-0 lg:hidden" />
        </ul>
      </div>

      <VideoModal video={selectedVideo} onClose={closeVideo} />
    </section>
  );
}
