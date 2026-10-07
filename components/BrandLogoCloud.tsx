import React from "react";
import {
  Instagram,
  Youtube,
  Shield,
  Feather,
  Sparkles,
  Clapperboard,
  HeartHandshake,
  Gem,
  type LucideIcon,
} from "lucide-react";
import { BRAND_PARTNERS, BrandPartner } from "@/data/portfolioData";
import Reveal from "./Reveal";

function partnerIcon(partner: BrandPartner): LucideIcon {
  const { type, name } = partner;
  if (type === "instagram") return Instagram;
  if (type === "youtube") return Youtube;
  if (type === "agency") return name.includes("Birdie") ? Feather : Clapperboard;
  if (name.includes("Scooch")) return Shield;
  if (name.includes("Damon")) return HeartHandshake;
  if (name.includes("Rebirth")) return Gem;
  return Sparkles;
}

export default function BrandLogoCloud() {
  return (
    <section aria-labelledby="partners-heading" className="border-y border-rhode-border bg-rhode-light/60 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-6 flex flex-col gap-1.5 sm:mb-8 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 id="partners-heading" className="font-display text-xl font-semibold tracking-tight text-rhode-dark sm:text-2xl">
            Brands &amp; studios I&apos;ve worked with
          </h2>
          <p className="text-sm text-rhode-muted">USA, Germany, Australia, Canada &amp; the Philippines</p>
        </div>

        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-rhode-border bg-rhode-border lg:grid-cols-4">
          {BRAND_PARTNERS.map((partner, i) => {
            const Icon = partnerIcon(partner);
            return (
              <Reveal
                as="li"
                key={partner.name}
                delay={(i % 4) * 50}
                className="group flex min-h-[8rem] flex-col justify-between gap-4 bg-rhode-card p-4 transition-colors duration-300 hover:bg-white sm:min-h-[10rem] sm:p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rhode-dark text-rhode-light transition-transform duration-500 ease-out-expo group-hover:-rotate-6 sm:h-10 sm:w-10">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[15px] font-semibold leading-tight tracking-tight text-rhode-dark sm:text-base">
                    {partner.name}
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-rhode-muted sm:text-[13px]">
                    {partner.role}
                    <span className="hidden sm:inline">, {partner.country}</span>
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
