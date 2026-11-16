"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Check, Film, Smartphone } from "lucide-react";
import { WhatsAppInteractivePhone } from "@/components/whatsapp-interactive-phone";
import { VantaBirds } from "@/components/vanta-birds";
import { spurMotion } from "@/lib/motion";
import { WHATSAPP_DEMO_URL } from "@/lib/constants";

interface HeroSectionProps {
  onOpenVideoModal: () => void;
}

export function HeroSection({
  onOpenVideoModal,
}: HeroSectionProps) {
  const [showcaseMode, setShowcaseMode] = useState<"flow" | "video">("flow");

  const scrollToDemo = () => {
    const el = document.getElementById("interactive-stage");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(WHATSAPP_DEMO_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32 overflow-hidden bg-white">
      {/* Vanta Birds 3D Interactive Background */}
      <VantaBirds />

      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Hero Typography Box */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow Pill with Spur Conic Glow Sweep */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: spurMotion.ease }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-800 tracking-tight shadow-sm at-conic-pill"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Official Meta Business Infrastructure &bull; 100% Client-Owned</span>
          </motion.div>

          {/* Exact Clean Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: spurMotion.ease }}
            className="hero-h1 max-w-4xl mx-auto"
          >
            Reply First. Book More Viewings.
          </motion.h1>

          {/* Exact Clean Subcopy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: spurMotion.ease }}
            className="subhead-lead max-w-2xl mx-auto"
          >
            From first click to confirmed viewing—every portal and ad inquiry is answered in seconds, qualified by budget and timeline, and booked onto your agent&apos;s calendar.
          </motion.p>

          {/* 2 CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: spurMotion.ease }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 border border-blue-600 rounded-lg transition-all shadow-sm hover:shadow-md cursor-pointer active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>Test Live Demo</span>
              <ArrowRight className="w-4 h-4 text-blue-200" />
            </a>

            <button
              type="button"
              onClick={onOpenVideoModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors shadow-2xs cursor-pointer active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <Play className="w-4 h-4 fill-slate-800 text-slate-800" />
              <span>Watch Overview (1:28)</span>
            </button>
          </motion.div>

          {/* 1-Line Reassurance Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.32, ease: spurMotion.ease }}
            className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium"
          >
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-600 stroke-[2.5]" />
              <span>One-Time Setup</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-600 stroke-[2.5]" />
              <span>100% Client-Owned</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-600 stroke-[2.5]" />
              <span>Zero Monthly Software Fees</span>
            </div>
          </motion.div>
        </div>

        {/* Wide Showcase Container with 3D Settle entrance */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: spurMotion.ease }}
          className="mt-14 sm:mt-18 lg:mt-22 max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 overflow-hidden relative">
            {/* Top Showcase Bar */}
            <div className="px-5 py-3 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <span className="text-xs font-medium text-slate-600 ml-2">
                  Live Lead Qualification &bull; Sub-10s Response
                </span>
              </div>

              {/* Mode Toggle Pills & Modal Trigger */}
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center bg-slate-200/70 p-0.5 rounded-lg border border-slate-200 text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setShowcaseMode("flow")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
                      showcaseMode === "flow"
                        ? "bg-white text-slate-900 shadow-2xs font-semibold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Live Flow</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowcaseMode("video")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
                      showcaseMode === "video"
                        ? "bg-white text-slate-900 shadow-2xs font-semibold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Film className="w-3.5 h-3.5 text-blue-600" />
                    <span>Product Video</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={onOpenVideoModal}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <Play className="w-3 h-3 fill-blue-600 text-blue-600" />
                  <span>Full Screen (01:28)</span>
                </button>
              </div>
            </div>

            {/* Showcase Stage Content */}
            {showcaseMode === "flow" ? (
              <div className="p-6 sm:p-10 lg:p-12 bg-slate-50/40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Side: Clean Broker Dispatch File (7 cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-semibold text-blue-700">
                        <span>Broker Dispatch Ready</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                        Pre-Qualified Before Your Agent Steps In
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Your brokers receive verified buyer criteria, financing status, and a confirmed viewing slot—delivered straight to their WhatsApp with instant CSV export.
                      </p>
                    </div>

                    {/* Clean Spec Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-1">
                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                        <span className="text-[10px] uppercase font-mono text-slate-400 block">Budget</span>
                        <strong className="text-slate-900 text-sm mt-0.5 block">$2M – $3M</strong>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                        <span className="text-[10px] uppercase font-mono text-slate-400 block">Financing</span>
                        <strong className="text-emerald-700 text-sm mt-0.5 block">Pre-Approved</strong>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                        <span className="text-[10px] uppercase font-mono text-slate-400 block">Area</span>
                        <strong className="text-slate-900 text-sm mt-0.5 block">Marina Skyline</strong>
                      </div>
                    </div>

                    {/* Confirmed Viewing Alert */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2 text-xs">
                      <div className="flex items-center justify-between text-slate-900 font-semibold">
                        <span>Private Viewing Confirmed — Sat, 11:30 AM</span>
                        <span className="text-blue-600 font-mono text-[11px]">Calendar Synced</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Assigned: Sarah Jenkins &bull; Brief &amp; calendar invite sent
                      </p>
                    </div>

                    <div className="pt-2 flex items-center gap-4">
                      <button
                        type="button"
                        onClick={scrollToDemo}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                      >
                        <span>Explore the 4-step platform showcase below</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Side: Animated WhatsApp Phone (5 cols) */}
                  <div className="lg:col-span-5 flex justify-center">
                    <WhatsAppInteractivePhone
                      autoPlay={true}
                      initialMode="video"
                      videoSrc="/demos/test2.mp4"
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Video Player Mode right inside the Hero Showcase Container */
              <div className="bg-slate-950 p-2 sm:p-4">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
                  <video
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    className="w-full h-full object-contain"
                  >
                    <source src="/demos/site-visit-booking.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-3 bg-slate-900 text-slate-300 text-xs flex flex-wrap items-center justify-between gap-2 rounded-b-xl border-t border-slate-800">
                  <span className="font-semibold text-white">
                    Site Visit Booking Screencast &bull; 01:28
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="/demo"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2 font-medium"
                    >
                      View all 6 recordings in demo theater &rarr;
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
