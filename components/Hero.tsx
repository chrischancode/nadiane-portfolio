import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CREATOR_PROFILE } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-32">
      {/* Soft ambient light behind the portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,#F7F3EC,transparent)] opacity-90 lg:right-0"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-7 lg:pb-6">
            <div className="animate-rise">
              <p className="mb-4 text-sm font-medium text-rhode-muted sm:mb-5 sm:text-[15px]">
                Video editor, graphic designer &amp; social media manager
              </p>
            </div>

            <div className="animate-rise" style={{ animationDelay: "60ms" }}>
              <h1 className="font-display text-[clamp(3.25rem,13vw,6.75rem)] font-semibold leading-[0.92] tracking-display text-rhode-dark">
                Nadiane
                <br />
                Bandola
              </h1>
            </div>

            <div className="animate-rise" style={{ animationDelay: "120ms" }}>
              <p className="mt-5 max-w-[34ch] text-lg leading-snug text-rhode-charcoal sm:mt-6 sm:text-xl">
                Short-form video ads and brand design for the modern feed. Built to stop the scroll and hold it.
              </p>
            </div>

            <div className="animate-rise" style={{ animationDelay: "180ms" }}>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#videos"
                  className="press inline-flex h-12 shrink-0 items-center whitespace-nowrap justify-center gap-2 rounded-full bg-rhode-dark px-6 text-[15px] font-medium text-rhode-light shadow-luxe hover:bg-black"
                >
                  View selected work
                  <ArrowDown className="h-4 w-4" strokeWidth={2} />
                </a>
                <a
                  href="#contact"
                  className="press inline-flex h-12 shrink-0 items-center whitespace-nowrap justify-center gap-2 rounded-full border border-rhode-border bg-rhode-card px-6 text-[15px] font-medium text-rhode-dark hover:border-rhode-dark/30 hover:bg-white"
                >
                  Let&apos;s collaborate
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </a>
                <a
                  href={CREATOR_PROFILE.portfolioDriveVideos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press inline-flex h-11 shrink-0 items-center whitespace-nowrap justify-center gap-1 rounded-full px-3 text-sm font-medium text-rhode-muted underline decoration-rhode-sand underline-offset-4 hover:text-rhode-dark hover:decoration-rhode-dark sm:h-12"
                >
                  Full Drive archive
                </a>
              </div>
            </div>

            <div className="animate-rise" style={{ animationDelay: "240ms" }}>
              <dl className="mt-9 grid max-w-md grid-cols-3 gap-4 border-t border-rhode-border pt-5 sm:mt-10">
                {CREATOR_PROFILE.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse gap-1">
                    <dt className="text-xs text-rhode-muted sm:text-[13px]">{stat.label}</dt>
                    <dd className="tabular font-display text-[1.75rem] font-semibold leading-none tracking-tight text-rhode-dark sm:text-[2rem]">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Portrait */}
          <div className="animate-rise lg:col-span-5" style={{ animationDelay: "120ms" }}>
            <figure className="mx-auto w-full max-w-[20rem] sm:max-w-sm lg:ml-auto lg:mr-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-rhode-surface shadow-luxe ring-1 ring-rhode-dark/5">
                <Image
                  src={CREATOR_PROFILE.heroImage}
                  alt="Portrait of Nadiane Bandola"
                  fill
                  sizes="(max-width: 640px) 88vw, 384px"
                  className="object-cover object-[50%_30%]"
                  priority
                />
              </div>
              <figcaption className="mt-3 flex items-start justify-between gap-6 px-1 text-[13px] leading-snug text-rhode-muted">
                <span>Based in {CREATOR_PROFILE.location}</span>
                <span className="text-right">Working remotely with brands in 5 countries</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
