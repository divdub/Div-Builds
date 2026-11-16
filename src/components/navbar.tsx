"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Play, MessageSquare, ArrowUpRight } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/lib/constants";

interface NavbarProps {
  onOpenVideoModal?: () => void;
}

export function Navbar({ onOpenVideoModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Overview", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Live Demo", href: "/demo" },
    { label: "Ownership & Meta FAQ", href: "/ownership" },
  ];

  const handleVideoAction = () => {
    setMobileMenuOpen(false);
    if (onOpenVideoModal) {
      onOpenVideoModal();
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand Mark */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
              aria-label="Divyansh - Home"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-2xs group-hover:bg-slate-800 transition-colors">
                <span>D</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight leading-tight">
                  Divyansh
                </span>
                <span className="text-[10px] font-medium text-slate-500 tracking-wider uppercase">
                  Real Estate Systems
                </span>
              </div>
            </Link>
          </div>

          {/* Center Links: Desktop */}
          <nav
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200/80 bg-slate-50/80"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1 text-xs lg:text-[13px] rounded-full transition-all duration-150 font-medium ${
                    isActive
                      ? "bg-white text-slate-950 shadow-xs font-semibold"
                      : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs: Desktop */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleVideoAction}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors shadow-2xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 active:translate-y-px"
            >
              <Play className="w-3.5 h-3.5 fill-slate-700 text-slate-700" />
              <span>Watch Demo</span>
            </button>

            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-2xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 active:translate-y-px"
            >
              <MessageSquare className="w-3.5 h-3.5 text-white" />
              <span>Test Live Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-200" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors font-medium ${
                    isActive
                      ? "bg-slate-100 text-slate-950 font-semibold"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={handleVideoAction}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <Play className="w-4 h-4 text-slate-700 fill-slate-700" />
              <span>Watch 60-Second Walkthrough</span>
            </button>
            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Test Live Demo</span>
              <ArrowUpRight className="w-4 h-4 text-blue-200" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
