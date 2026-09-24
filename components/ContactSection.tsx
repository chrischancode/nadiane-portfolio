"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { CREATOR_PROFILE } from "@/data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState("Video Editing");
  const [note, setNote] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(CREATOR_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${selectedService} with Nadiane`);
    const body = encodeURIComponent(
      `Hi Nadiane,\n\nI would like to inquire about: ${selectedService}.\n\nProject details:\n${note}\n\nLooking forward to your response!`
    );
    window.location.href = `mailto:${CREATOR_PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-rhode-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-2">
            Get In Touch
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            Let&apos;s Work Together.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 font-normal leading-relaxed max-w-lg mx-auto">
            Open for short-form video editing commissions, brand visual design, and social media management partnerships.
          </p>
        </div>

        {/* Big Tap Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          
          {/* Email */}
          <a
            href={`mailto:${CREATOR_PROFILE.email}`}
            className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-white transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <Mail className="w-5 h-5 text-white" />
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-neutral-400 block">Email</span>
              <p className="font-display font-bold text-sm text-white truncate mt-0.5">
                {CREATOR_PROFILE.email}
              </p>
            </div>
          </a>

          {/* WhatsApp / Phone */}
          <a
            href="https://wa.me/639083707067"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-white transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <Phone className="w-5 h-5 text-white" />
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-neutral-400 block">WhatsApp / Call</span>
              <p className="font-display font-bold text-sm text-white mt-0.5">
                {CREATOR_PROFILE.phone}
              </p>
            </div>
          </a>

          {/* Copy Email */}
          <div
            onClick={copyEmail}
            className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-white transition-all flex flex-col justify-between cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5 text-white" />}
              <span className="text-[10px] font-mono uppercase text-neutral-400">
                {copied ? "Copied" : "Click to Copy"}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-neutral-400 block">Quick Copy</span>
              <p className="font-display font-bold text-sm text-white mt-0.5">
                {copied ? "Copied to Clipboard!" : "Copy Email Address"}
              </p>
            </div>
          </div>

        </div>

        {/* Minimal Inquiry Box */}
        <form onSubmit={handleSend} className="p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-neutral-800">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-700">
              <Image
                src={CREATOR_PROFILE.heroImage}
                alt="Nadiane"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-display font-bold text-sm text-white">
                Message Nadiane
              </p>
              <p className="text-xs text-neutral-400 font-mono">
                Kabankalan, Philippines &bull; 24-48h Project Turnaround
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                Select Service:
              </label>
              <div className="flex flex-wrap gap-2">
                {["Video Editing", "Graphic Design", "Social Media Management", "Full Project"].map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setSelectedService(s)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                      selectedService === s
                        ? "bg-white text-black font-bold"
                        : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                Project Summary:
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Describe your video editing or design project requirements..."
                rows={3}
                className="w-full p-4 rounded-xl bg-black border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
