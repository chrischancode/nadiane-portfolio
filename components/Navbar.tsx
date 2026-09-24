"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { CREATOR_PROFILE } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Videos", href: "#videos" },
    { name: "Designs", href: "#designs" },
    { name: "Expertise", href: "#expertise" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-5 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-5 sm:px-7 py-3 flex items-center justify-between ${
          scrolled
            ? "bg-[#EDE8E1]/95 backdrop-blur-md shadow-sm border border-rhode-border"
            : "bg-[#EDE8E1]/80 backdrop-blur-sm border border-rhode-border/60"
        }`}
      >
        {/* Creator Brand / Custom 'n' Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-rhode-dark text-rhode-light flex items-center justify-center font-display font-medium text-base group-hover:scale-105 transition-transform shadow-sm">
            n
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-rhode-dark group-hover:text-black transition-colors uppercase">
              {CREATOR_PROFILE.name}
            </span>
            <span className="text-[10px] text-rhode-muted font-mono tracking-wider">
              Video &bull; Design &bull; Social
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase font-mono font-bold tracking-wider text-rhode-muted hover:text-rhode-dark transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile menu toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-rhode-dark hover:bg-black text-white font-display text-xs font-bold tracking-wide transition-all shadow-sm hover:-translate-y-0.5"
          >
            <span>Let&apos;s Collaborate</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-rhode-dark hover:bg-rhode-surface md:hidden transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto bg-rhode-card border border-rhode-border rounded-3xl p-6 shadow-xl animate-in fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-rhode-dark hover:bg-rhode-surface rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-rhode-dark text-white font-display text-xs font-bold uppercase tracking-wider"
            >
              <span>Let&apos;s Collaborate</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
