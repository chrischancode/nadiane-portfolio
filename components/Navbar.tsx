"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { CREATOR_PROFILE } from "@/data/portfolioData";
import { useDialog } from "@/lib/useDialog";

const NAV_LINKS = [
  { name: "Videos", href: "#videos" },
  { name: "Designs", href: "#designs" },
  { name: "Expertise", href: "#expertise" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const sheetRef = useDialog<HTMLDivElement>(menuOpen, () => setMenuOpen(false));

  // Solid bar once the page has moved; observed instead of a scroll listener.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    const inView = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) inView.add(entry.target.id);
          else inView.delete(entry.target.id);
        });
        // Back in the hero (or between sections) nothing is highlighted.
        const current = NAV_LINKS.find((l) => inView.has(l.href.slice(1)));
        setActive(current ? current.href : "");
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the sheet if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handle = () => mq.matches && setMenuOpen(false);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-6 w-px" />

      <header className="fixed inset-x-0 top-0 z-nav px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 sm:pt-4">
        <div
          className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border pl-2 pr-2 transition-[background-color,border-color,box-shadow] duration-500 ease-out-expo sm:h-16 sm:pl-3 ${
            scrolled || menuOpen
              ? "border-rhode-border bg-rhode-bg/85 shadow-luxe backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#main" className="press flex items-center gap-2.5 rounded-full py-1 pr-3 active:scale-100" aria-label={`${CREATOR_PROFILE.name}, back to top`}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rhode-dark pb-0.5 font-display text-[17px] font-medium text-rhode-light">
              n
            </span>
            <span className="whitespace-nowrap font-display text-[15px] font-semibold tracking-tight text-rhode-dark">
              {CREATOR_PROFILE.name}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`press rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                    isActive ? "bg-rhode-surface text-rhode-dark" : "text-rhode-muted hover:text-rhode-dark"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              href="#contact"
              className="press hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-rhode-dark px-5 py-2.5 text-[13px] font-medium text-rhode-light hover:bg-black sm:inline-flex"
            >
              Let&apos;s collaborate
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="press flex h-11 w-11 items-center justify-center rounded-full text-rhode-dark hover:bg-rhode-surface active:bg-rhode-surface lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      {menuOpen && (
        <div
          ref={sheetRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[39] flex flex-col bg-rhode-bg/95 px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[calc(max(0.75rem,env(safe-area-inset-top))+5rem)] backdrop-blur-xl animate-fade lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-1 flex-col">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                data-autofocus={i === 0 ? "" : undefined}
                onClick={() => setMenuOpen(false)}
                className="press flex items-center justify-between border-b border-rhode-border py-4 font-display text-[2rem] font-medium tracking-display text-rhode-dark animate-sheet active:opacity-60"
                style={{ animationDelay: `${i * 40}ms`, animationFillMode: "backwards" }}
              >
                {link.name}
                <ArrowUpRight className="h-5 w-5 text-rhode-muted" strokeWidth={1.75} />
              </a>
            ))}
          </nav>

          <div className="space-y-3 pt-8">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="press flex w-full items-center justify-center gap-2 rounded-full bg-rhode-dark py-4 text-[15px] font-medium text-rhode-light"
            >
              Let&apos;s collaborate
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href={`mailto:${CREATOR_PROFILE.email}`}
              className="block text-center font-mono text-xs text-rhode-muted"
            >
              {CREATOR_PROFILE.email}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
