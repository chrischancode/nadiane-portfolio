import React from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { CREATOR_PROFILE } from "@/data/portfolioData";

const LINKS = [
  { name: "Videos", href: "#videos" },
  { name: "Designs", href: "#designs" },
  { name: "Expertise", href: "#expertise" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="on-dark border-t border-ink-800 bg-ink-900 pb-[max(2rem,env(safe-area-inset-bottom))] pt-12 text-ink-100">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight">{CREATOR_PROFILE.name}</p>
            <p className="mt-1 max-w-xs text-sm text-ink-500">{CREATOR_PROFILE.role}</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-3 text-[15px] sm:flex sm:flex-wrap sm:gap-x-7">
            {LINKS.map((l) => (
              <a key={l.name} href={l.href} className="text-ink-300 transition-colors hover:text-ink-100">
                {l.name}
              </a>
            ))}
            <a
              href={CREATOR_PROFILE.portfolioDriveVideos}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-ink-300 transition-colors hover:text-ink-100"
            >
              Drive archive
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
          </nav>
        </div>

        <div className="mt-10 flex items-center justify-between gap-6 border-t border-ink-800 pt-6 text-[13px] text-ink-500">
          <p>
            &copy; {new Date().getFullYear()} {CREATOR_PROFILE.name}. Based in {CREATOR_PROFILE.location}.
          </p>
          <a
            href="#main"
            className="press flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink-800 text-ink-100 hover:bg-ink-850"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </footer>
  );
}
