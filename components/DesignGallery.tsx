"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { GRAPHICS_DATA, CREATOR_PROFILE } from "@/data/portfolioData";
import { useDialog } from "@/lib/useDialog";
import Reveal from "./Reveal";

const CATEGORIES = Array.from(new Set(GRAPHICS_DATA.map((g) => g.category)));

export default function DesignGallery() {
  // Nothing image-related renders (or downloads) until the visitor opens the gallery.
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const items = useMemo(
    () => (category === "All" ? GRAPHICS_DATA : GRAPHICS_DATA.filter((g) => g.category === category)),
    [category]
  );
  const total = items.length;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setLightboxIndex((i) => (i === null ? i : (i + dir + total) % total)),
    [total]
  );
  const dialogRef = useDialog<HTMLDivElement>(lightboxIndex !== null, closeLightbox);

  // Arrow keys page through the lightbox.
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, step]);

  const openGallery = () => {
    setIsOpen(true);
    requestAnimationFrame(() => gridRef.current?.focus({ preventScroll: true }));
  };

  const closeGallery = () => {
    setIsOpen(false);
    setCategory("All");
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const current = lightboxIndex !== null ? items[lightboxIndex] : null;

  return (
    <section
      ref={sectionRef}
      id="designs"
      aria-labelledby="designs-heading"
      className="border-t border-rhode-border bg-rhode-light/70 py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 id="designs-heading" className="font-display text-[2.5rem] font-semibold leading-[1] tracking-display text-rhode-dark sm:text-6xl">
              Design gallery
            </h2>
            <p className="mt-4 text-base leading-relaxed text-rhode-muted sm:text-lg">
              Amazon listing infographics, community campaigns, brand posts and creator stories.
            </p>
          </div>
          <a
            href={CREATOR_PROFILE.portfolioDriveGraphics}
            target="_blank"
            rel="noopener noreferrer"
            className="press inline-flex items-center gap-1.5 self-start whitespace-nowrap text-[15px] font-medium text-rhode-dark underline decoration-rhode-sand underline-offset-[6px] hover:decoration-rhode-dark sm:self-auto"
          >
            Source files on Google Drive
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </Reveal>

        {!isOpen ? (
          /* Closed: a typographic summary of what's inside. No images load until opened. */
          <Reveal className="rounded-[1.75rem] border border-rhode-border bg-rhode-card p-5 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
              <div className="flex items-baseline gap-3 lg:block lg:shrink-0">
                <p className="tabular font-display text-6xl font-semibold leading-none tracking-display text-rhode-dark sm:text-7xl">
                  {GRAPHICS_DATA.length}
                </p>
                <p className="text-sm leading-snug text-rhode-muted lg:mt-2">
                  designs across
                  <br className="hidden lg:block" /> {CATEGORIES.length} categories
                </p>
              </div>

              <ul className="flex flex-1 flex-wrap gap-2 lg:border-l lg:border-rhode-border lg:pl-10" aria-label="What's in the gallery">
                {CATEGORIES.map((cat) => (
                  <li
                    key={cat}
                    className="inline-flex h-9 items-center gap-2 rounded-full border border-rhode-border bg-rhode-light px-3.5 text-[13px] text-rhode-charcoal sm:text-sm"
                  >
                    {cat}
                    <span className="tabular font-mono text-xs text-rhode-muted">
                      {GRAPHICS_DATA.filter((g) => g.category === cat).length}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={openGallery}
                aria-expanded={false}
                aria-controls="design-grid"
                className="press inline-flex h-14 w-full shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-rhode-dark px-7 text-[15px] font-medium text-rhode-light shadow-luxe hover:bg-black lg:w-auto"
              >
                <Images className="h-[18px] w-[18px]" strokeWidth={1.75} />
                View all designs
              </button>
            </div>
          </Reveal>
        ) : (
          /* Open: every design as a mounted print, filterable */
          <div id="design-grid" ref={gridRef} tabIndex={-1} className="focus:outline-none">
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="tabular text-sm text-rhode-muted" aria-live="polite">
                Showing {items.length} of {GRAPHICS_DATA.length}
              </p>
              <button
                type="button"
                onClick={closeGallery}
                aria-expanded
                aria-controls="design-grid"
                className="press -mr-2 inline-flex h-10 items-center gap-1.5 whitespace-nowrap rounded-full px-3 text-sm font-medium text-rhode-dark hover:bg-rhode-surface"
              >
                Hide designs
                <X className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>

            <div role="group" aria-label="Filter designs" className="snap-row -mx-5 mb-6 gap-2 px-5 sm:mx-0 sm:mb-8 sm:flex-wrap sm:px-0">
              {["All", ...CATEGORIES].map((cat) => {
                const isActive = category === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    aria-pressed={isActive}
                    className={`press inline-flex h-10 shrink-0 items-center whitespace-nowrap rounded-full px-4 text-sm font-medium ${
                      isActive
                        ? "bg-rhode-dark text-rhode-light"
                        : "border border-rhode-border bg-rhode-card text-rhode-charcoal hover:border-rhode-dark/30"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <ul className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-4" aria-label="Design pieces">
              {items.map((item, i) => (
                <li key={item.id} className="animate-rise" style={{ animationDelay: `${Math.min(i, 8) * 45}ms` }}>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    className="press group block w-full text-left active:scale-[0.98]"
                    aria-label={`Open ${item.title}`}
                  >
                    {/* Same frame for every piece; artwork is never cropped */}
                    <span className="relative block aspect-[4/5] overflow-hidden rounded-2xl bg-rhode-card ring-1 ring-rhode-border transition-[box-shadow,background-color] duration-500 group-hover:bg-white group-hover:shadow-luxe">
                      <span className="absolute inset-3 sm:inset-4">
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 44vw, (max-width: 1024px) 30vw, 250px"
                          className="object-contain drop-shadow-[0_8px_16px_rgba(58,48,36,0.18)] transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                        />
                      </span>
                    </span>
                    <span className="mt-2.5 block px-0.5">
                      <span className="line-clamp-2 text-[13px] font-medium leading-snug text-rhode-dark sm:text-sm">{item.title}</span>
                      <span className="mt-0.5 block truncate text-xs text-rhode-muted">{item.client}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {current && lightboxIndex !== null && (
        <div
          className="on-dark fixed inset-0 z-overlay flex items-center justify-center bg-ink-950/90 backdrop-blur-md animate-fade sm:p-6"
          onClick={closeLightbox}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            className="relative flex h-[100dvh] w-full max-w-4xl flex-col overflow-hidden bg-ink-900 text-ink-100 animate-sheet sm:h-auto sm:max-h-[92dvh] sm:rounded-[2rem] sm:border sm:border-ink-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative min-h-0 flex-1 bg-ink-950 sm:h-[68dvh] sm:flex-none">
              <Image
                key={current.id}
                src={current.imageSrc}
                alt={current.title}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-contain p-3 pt-[max(4rem,calc(env(safe-area-inset-top)+3.5rem))] animate-fade sm:p-6"
                priority
              />

              <button
                type="button"
                data-autofocus
                onClick={closeLightbox}
                className="press absolute right-3 top-[max(0.75rem,env(safe-area-inset-top))] flex h-11 w-11 items-center justify-center rounded-full bg-ink-850/90 text-ink-100 backdrop-blur hover:bg-ink-800 sm:right-4 sm:top-4"
                aria-label="Close"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>

              <p className="tabular absolute left-4 top-[max(1.4rem,calc(env(safe-area-inset-top)+0.65rem))] font-mono text-xs text-ink-500 sm:top-6">
                {lightboxIndex + 1} / {total}
              </p>
            </div>

            <div className="flex flex-col gap-4 border-t border-ink-800 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:flex-row sm:items-end sm:justify-between sm:p-6">
              <div className="min-w-0">
                <p className="font-mono text-xs text-ink-500">
                  {current.category}, {current.client}
                </p>
                <h3 id="lightbox-title" className="mt-1 font-display text-lg font-semibold tracking-tight sm:text-xl">
                  {current.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-300">{current.description}</p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="press flex h-12 w-12 items-center justify-center rounded-full border border-ink-700 hover:bg-ink-850"
                  aria-label="Previous piece"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="press flex h-12 w-12 items-center justify-center rounded-full border border-ink-700 hover:bg-ink-850"
                  aria-label="Next piece"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
