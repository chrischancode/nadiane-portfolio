"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Copy, Mail, MessageCircle, Send } from "lucide-react";
import { CREATOR_PROFILE } from "@/data/portfolioData";
import Reveal from "./Reveal";

const SERVICES = ["Video editing", "Graphic design", "Social media management", "Full project"];

export default function ContactSection() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CREATOR_PROFILE.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    setTimeout(() => setCopyState("idle"), 2500);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (note.trim().length < 10) {
      setError("Add a sentence or two about the project so I can reply with a plan.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Project inquiry: ${selectedService}`);
    const body = encodeURIComponent(
      `Hi Nadiane,\n\nI'd like to talk about: ${selectedService}.\n\nProject details:\n${note}\n\nThanks,`
    );
    window.location.href = `mailto:${CREATOR_PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const channels = [
    {
      label: "Email",
      value: CREATOR_PROFILE.email,
      href: `mailto:${CREATOR_PROFILE.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: "WhatsApp",
      value: "+63 908 370 7067",
      href: "https://wa.me/639083707067",
      icon: MessageCircle,
      external: true,
    },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="on-dark relative overflow-hidden bg-ink-900 py-14 text-ink-100 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[56rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(241,237,230,0.08),transparent)]"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        {/* Pitch + direct channels */}
        <Reveal className="lg:col-span-5">
          <h2 id="contact-heading" className="font-display text-[2.75rem] font-semibold leading-[0.95] tracking-display sm:text-7xl">
            Let&apos;s work
            <br />
            together
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-300 sm:text-lg">
            Open for short-form editing, brand design and social media retainers. Replies within a day.
          </p>

          <ul className="mt-8 divide-y divide-ink-800 border-y border-ink-800">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="press group flex items-center gap-4 py-4 active:opacity-70"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-850 text-ink-100 transition-colors group-hover:bg-ink-100 group-hover:text-ink-950">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-ink-500">{label}</span>
                    <span className="block truncate text-[15px] font-medium">{value}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-100" />
                </a>
              </li>
            ))}
            <li>
              <button type="button" onClick={copyEmail} className="press group flex w-full items-center gap-4 py-4 text-left active:opacity-70">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-850 text-ink-100 transition-colors group-hover:bg-ink-100 group-hover:text-ink-950">
                  {copyState === "copied" ? (
                    <Check className="h-[18px] w-[18px]" strokeWidth={2} />
                  ) : (
                    <Copy className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-ink-500">Quick copy</span>
                  <span className="block text-[15px] font-medium" aria-live="polite">
                    {copyState === "copied"
                      ? "Email copied to clipboard"
                      : copyState === "failed"
                        ? "Couldn't copy. Long-press the email above."
                        : "Copy email address"}
                  </span>
                </span>
              </button>
            </li>
          </ul>
        </Reveal>

        {/* Inquiry form */}
        <Reveal delay={100} className="lg:col-span-7">
          <form
            onSubmit={handleSend}
            noValidate
            className="rounded-[1.75rem] border border-ink-800 bg-ink-850/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8"
          >
            <div className="flex items-center gap-3 border-b border-ink-800 pb-5 sm:pb-6">
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-ink-700">
                <Image src={CREATOR_PROFILE.heroImage} alt="" fill sizes="44px" className="object-cover" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-[15px] font-semibold">Message Nadiane</p>
                <p className="text-[13px] text-ink-500">Typical turnaround 24 to 48 hours</p>
              </div>
            </div>

            <fieldset className="mt-6">
              <legend className="mb-3 text-sm font-medium text-ink-300">What do you need?</legend>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => {
                  const isActive = selectedService === s;
                  return (
                    <label
                      key={s}
                      className={`press relative inline-flex h-10 cursor-pointer items-center rounded-full px-4 text-sm has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink-100 ${
                        isActive ? "bg-ink-100 font-medium text-ink-950" : "bg-ink-800 text-ink-300 hover:bg-ink-700 hover:text-ink-100"
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={s}
                        checked={isActive}
                        onChange={() => setSelectedService(s)}
                        className="sr-only"
                      />
                      {s}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-6">
              <label htmlFor="project-summary" className="mb-2 block text-sm font-medium text-ink-300">
                Project summary
              </label>
              <textarea
                id="project-summary"
                name="summary"
                value={note}
                onChange={(e) => {
                  setNote(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Brand, platform, number of videos or assets, and your deadline."
                rows={4}
                enterKeyHint="send"
                aria-invalid={!!error}
                aria-describedby={error ? "summary-error" : "summary-help"}
                className={`w-full resize-none rounded-2xl border bg-ink-950/60 p-4 text-base leading-relaxed text-ink-100 placeholder:text-ink-500 transition-colors focus:outline-none sm:text-[15px] ${
                  error ? "border-[#E39A8C]" : "border-ink-800 focus:border-ink-300"
                }`}
              />
              {error ? (
                <p id="summary-error" role="alert" className="mt-2 text-sm text-[#E39A8C]">
                  {error}
                </p>
              ) : (
                <p id="summary-help" className="mt-2 text-[13px] text-ink-500">
                  Opens your email app with everything filled in.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="press mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink-100 text-[15px] font-medium text-ink-950 hover:bg-white"
            >
              Send message
              <Send className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
