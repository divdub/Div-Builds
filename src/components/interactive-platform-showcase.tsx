"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  CheckCircle2,
  Calendar,
  UserCheck,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Zap,
  Check,
  FileText,
  Download,
  MessageSquare,
} from "lucide-react";
import { spurMotion } from "@/lib/motion";

interface PlatformTab {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  badge: string;
}

const tabs: PlatformTab[] = [
  {
    id: "tab-1",
    number: "01",
    label: "Instant Reply",
    title: "Engage Every Buyer in Under 10 Seconds",
    description:
      "Portal buyers message multiple agencies at once. Reply first while they are still looking at the listing.",
    badge: "8.2s First Contact",
  },
  {
    id: "tab-2",
    number: "02",
    label: "Buyer Qualification",
    title: "1-Tap Budget, Area & Timeline Screening",
    description:
      "Buyers tap quick options on their phone to confirm budget, preferred community, and financing—with zero typing friction.",
    badge: "Pre-Screened Criteria",
  },
  {
    id: "tab-3",
    number: "03",
    label: "Agent Handoff",
    title: "Clean Buyer Briefs Straight to Your Brokers",
    description:
      "Your team receives a structured summary directly on WhatsApp and SMS. Complete transcripts and verified criteria sent straight to the assigned agent.",
    badge: "Instant Broker Brief",
  },
  {
    id: "tab-4",
    number: "04",
    label: "Viewing & Follow-Up",
    title: "Confirmed Slots With Automated Reminders",
    description:
      "Locks in private viewing times, sends location pins, and dispatches 2-hour reminders to eliminate no-shows.",
    badge: "Confirmed Bookings",
  },
];

export function InteractivePlatformShowcase() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const activeTab = tabs[activeIdx];

  // Auto-advancing tab timer (6s duration) with progress bar
  useEffect(() => {
    if (isPaused) return;

    const interval = 50; // 50ms smooth tick
    const totalDuration = 5000; // Measured 5,000ms duration from spurnow.com
    const increment = (interval / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIdx((current) => (current + 1) % tabs.length);
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, activeIdx]);

  const handleTabClick = (idx: number) => {
    setActiveIdx(idx);
    setProgress(0);
    setIsPaused(true);
    // Resume auto-advance after 12s of user inactivity
    setTimeout(() => setIsPaused(false), 12000);
  };

  return (
    <section id="interactive-stage" className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
            <span>The Platform</span>
          </div>
          <h2 className="section-h2">
            Turn Inquiries Into Booked Viewings
          </h2>
          <p className="subhead-lead">
            Instant reply, buyer qualification, agent handoff, and viewing reminders—in one flow.
          </p>
        </div>

        {/* 4-Tab Segmented Track with Framer Motion layoutId & Auto-Advance Progress */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80">
            {tabs.map((tab, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabClick(idx)}
                  className={`relative p-3.5 sm:p-4 rounded-xl text-left transition-colors cursor-pointer flex flex-col justify-between overflow-hidden ${
                    isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {/* Framer Motion Active Pill Background with Spur Ease */}
                  {isActive && (
                    <motion.div
                      layoutId="activePlatformPill"
                      transition={{ duration: 0.25, ease: spurMotion.ease }}
                      className="absolute inset-0 bg-white rounded-xl shadow-xs border border-slate-200/90"
                    />
                  )}

                  {/* Tab Label & Number */}
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isActive ? "text-blue-600" : "text-slate-400"
                      }`}
                    >
                      {tab.number}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    )}
                  </div>

                  <div className="relative z-10 mt-2">
                    <span className="text-xs sm:text-sm font-semibold tracking-tight block leading-snug">
                      {tab.label}
                    </span>
                  </div>

                  {/* Auto-advancing Progress Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-blue-600 transition-all duration-75"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Animated Stage Display */}
          <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`platform-stage-${activeIdx}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: spurMotion.ease }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Side: Step Details & Highlights (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
                    <span>{activeTab.badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900">
                      {activeTab.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                      {activeTab.description}
                    </p>
                  </div>

                  {/* Stage-specific Interactive Breakdown */}
                  {activeIdx === 0 && (
                    <div className="space-y-3 pt-2">
                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2 text-xs">
                        <div className="flex items-center justify-between text-slate-900 font-semibold">
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-emerald-600" />
                            <span>First Contact Benchmark: 8.2s</span>
                          </span>
                          <span className="text-emerald-700 font-mono font-medium">95.6% Delivered</span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          Incoming portal inquiries trigger immediate verified WhatsApp conversations while the buyer is still reviewing listing photos.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeIdx === 1 && (
                    <div className="space-y-3 pt-2">
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-slate-400 font-mono text-[10px] uppercase block">Budget Validation</span>
                          <strong className="text-slate-900 block mt-0.5">$2.0M - $3.0M Verified</strong>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-slate-400 font-mono text-[10px] uppercase block">Financing</span>
                          <strong className="text-emerald-700 block mt-0.5">HSBC Pre-Approved</strong>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeIdx === 2 && (
                    <div className="space-y-3 pt-2">
                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2 text-xs">
                        <div className="flex items-center justify-between font-semibold text-slate-900">
                          <span className="flex items-center gap-2">
                            <UserCheck className="w-4 h-4 text-blue-600" />
                            <span>Agent Dispatch &bull; Sarah Jenkins</span>
                          </span>
                          <span className="text-emerald-700 font-mono text-[11px]">Direct WhatsApp Alert</span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          Your broker receives an instant WhatsApp alert containing the full conversation brief, budget criteria, and property reference with clean CSV export.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeIdx === 3 && (
                    <div className="space-y-3 pt-2">
                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2 text-xs">
                        <div className="flex items-center justify-between font-semibold text-slate-900">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-emerald-600" />
                            <span>Private Viewing Confirmed &bull; Sat 11:30 AM</span>
                          </span>
                          <span className="text-emerald-700 font-mono text-[11px]">Calendar Sync OK</span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          Buyer receives Google Maps navigation pin and reception instructions. Automated WhatsApp reminder dispatches 2 hours prior to viewing.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => handleTabClick((activeIdx + 1) % tabs.length)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                    >
                      <span>Next: {tabs[(activeIdx + 1) % tabs.length].label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Side: Simple Clean Tab Visual (5 cols) */}
                <div className="lg:col-span-5 flex justify-center">
                  <PlatformTabVisual activeIdx={activeIdx} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformTabVisual({ activeIdx }: { activeIdx: number }) {
  return (
    <div data-no-splash="true" className="w-full max-w-[340px] sm:max-w-[360px] mx-auto select-none">
      {/* Device / High-Craft Card Shell */}
      <div className="bg-[#121b22] rounded-[40px] p-2.5 shadow-2xl border-4 border-[#232d36] relative overflow-hidden">
        {/* Inner Phone Screen Container */}
        <div className="bg-[#EFEAE2] rounded-[30px] overflow-hidden flex flex-col h-[480px] relative shadow-inner">
          {/* Subtle WhatsApp Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.055] z-0"
            style={{
              backgroundImage: `radial-gradient(#008069 0.75px, transparent 0.75px), radial-gradient(#008069 0.75px, #EFEAE2 0.75px)`,
              backgroundSize: "28px 28px",
              backgroundPosition: "0 0, 14px 14px",
            }}
          />

          {/* Dynamic Island Pill */}
          <div className="bg-[#008069] text-white pt-2.5 pb-1 px-4 relative z-10">
            <div className="w-20 h-4 bg-black rounded-full mx-auto mb-1 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900/90 mr-auto ml-1.5" />
            </div>
          </div>

          {/* WhatsApp Header */}
          <div className="bg-[#008069] text-white px-3 py-2 flex items-center justify-between shadow-xs relative z-10 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs text-white">
                D
              </div>
              <div className="leading-tight">
                <div className="text-xs font-semibold text-white tracking-tight flex items-center gap-1">
                  <span>Your Agency</span>
                  <CheckCircle2 className="w-3 h-3 text-emerald-300 fill-emerald-300" />
                </div>
                <div className="text-[10px] text-emerald-100/90 font-light">Official WhatsApp Account</div>
              </div>
            </div>
            <div className="text-[10px] font-mono bg-emerald-800/60 px-2 py-0.5 rounded-full text-emerald-200">
              Active Flow
            </div>
          </div>

          {/* Content Body per Tab */}
          <div className="flex-1 p-3.5 flex flex-col justify-between overflow-hidden relative z-10">
            <AnimatePresence mode="wait">
              {activeIdx === 0 && (
                <motion.div
                  key="tab-0-visual"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="text-center text-[10px] font-medium text-slate-500 bg-white/70 py-0.5 px-2 rounded-full w-fit mx-auto border border-slate-200/50">
                    Today &bull; 10:24 AM
                  </div>

                  {/* Inbound lead inquiry */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[90%] shadow-2xs border border-slate-100 text-slate-900 text-xs space-y-1">
                      <p className="font-semibold text-[11px] text-blue-600">Portal Lead via Bayut</p>
                      <p>Hi, is the 3-Bedroom Villa in Dubai Hills still available? Can I see details?</p>
                      <span className="text-[9px] text-slate-400 block text-right">10:24 AM</span>
                    </div>
                  </div>

                  {/* Sub-10s Automated Reply */}
                  <div className="flex justify-end">
                    <div className="bg-[#d9fdd3] rounded-2xl rounded-tr-sm p-3 max-w-[90%] shadow-2xs text-slate-900 text-xs space-y-1.5">
                      <p>
                        Hello! Yes, Villa 42 in Dubai Hills is available. Here is the verified brochure &amp; floor plan:
                      </p>
                      <div className="p-2 rounded-lg bg-white/80 border border-emerald-200 flex items-center gap-2 text-[11px]">
                        <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-medium truncate">Dubai_Hills_Villa42_Brochure.pdf</span>
                      </div>
                      <div className="flex items-center justify-end gap-1 text-[9px] text-slate-500">
                        <span>10:24 AM</span>
                        <span className="text-blue-500 font-bold">&bull; 8.2s</span>
                        <span className="text-blue-600">✓✓</span>
                      </div>
                    </div>
                  </div>

                  {/* Benchmark Callout Pill */}
                  <div className="p-2.5 rounded-xl bg-white/95 border border-emerald-200 shadow-2xs flex items-center justify-between text-xs mt-auto">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                      <span className="text-[11px] font-semibold text-slate-800">First Contact Delivered</span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      8.2 Seconds
                    </span>
                  </div>
                </motion.div>
              )}

              {activeIdx === 1 && (
                <motion.div
                  key="tab-1-visual"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="flex justify-start">
                    <div className="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[95%] shadow-2xs border border-slate-100 text-slate-900 text-xs space-y-2">
                      <p className="leading-snug">
                        To match you with the right specialist, please confirm your planned investment range:
                      </p>
                      <div className="space-y-1.5">
                        <div className="w-full py-2 px-3 rounded-lg bg-slate-50 border border-slate-200 text-center text-xs text-slate-700 font-medium">
                          $1.0M – $2.0M
                        </div>
                        <div className="w-full py-2 px-3 rounded-lg bg-blue-50 border-2 border-blue-600 text-center text-xs text-blue-900 font-bold flex items-center justify-center gap-1.5 shadow-2xs">
                          <Check className="w-3.5 h-3.5 text-blue-600 stroke-[3]" />
                          <span>$2.0M – $3.0M (Selected)</span>
                        </div>
                        <div className="w-full py-2 px-3 rounded-lg bg-slate-50 border border-slate-200 text-center text-xs text-slate-700 font-medium">
                          $3.0M+ Premium
                        </div>
                      </div>
                      <span className="text-[9px] text-slate-400 block text-right">10:25 AM</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/95 border border-blue-200 shadow-2xs space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-800">1-Tap Screened Criteria</span>
                      <span className="text-[10px] font-mono text-blue-600 font-bold">100% Frictionless</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                      <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">Pre-Approved</span>
                      <span>&bull;</span>
                      <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-medium">3-Bedroom Villa</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeIdx === 2 && (
                <motion.div
                  key="tab-2-visual"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="text-center text-[10px] font-medium text-slate-500 bg-white/70 py-0.5 px-2 rounded-full w-fit mx-auto border border-slate-200/50">
                    Broker Dispatch Channel
                  </div>

                  {/* Clean Structured Brief to Agent */}
                  <div className="bg-white rounded-2xl p-3 shadow-2xs border border-slate-200 text-slate-900 text-xs space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px]">
                          SJ
                        </div>
                        <span className="text-[11px] font-bold text-slate-900">Sarah Jenkins (Broker)</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600 font-semibold">Ready for Viewing</span>
                    </div>

                    <div className="space-y-1 text-[11px]">
                      <div className="flex justify-between py-0.5">
                        <span className="text-slate-500">Buyer:</span>
                        <strong className="text-slate-900">Alex Morgan</strong>
                      </div>
                      <div className="flex justify-between py-0.5">
                        <span className="text-slate-500">Budget:</span>
                        <strong className="text-slate-900">$2.0M – $3.0M</strong>
                      </div>
                      <div className="flex justify-between py-0.5">
                        <span className="text-slate-500">Financing:</span>
                        <strong className="text-emerald-700">Pre-Approved (HSBC)</strong>
                      </div>
                      <div className="flex justify-between py-0.5">
                        <span className="text-slate-500">Property:</span>
                        <strong className="text-slate-900">Dubai Hills Villa 42</strong>
                      </div>
                    </div>

                    <div className="pt-1.5 flex items-center gap-2">
                      <div className="flex-1 py-1.5 px-2 rounded-lg bg-blue-600 text-white text-[10px] font-semibold text-center flex items-center justify-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        <span>Open WhatsApp</span>
                      </div>
                      <div className="py-1.5 px-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-semibold flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        <span>CSV</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-200 text-[11px] text-blue-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Broker receives verified brief—zero cold calling required.</span>
                  </div>
                </motion.div>
              )}

              {activeIdx === 3 && (
                <motion.div
                  key="tab-3-visual"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {/* Calendar Viewing Confirmed Card */}
                  <div className="bg-white rounded-2xl p-3 shadow-2xs border border-slate-200 text-slate-900 text-xs space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span className="text-[11px] font-bold text-slate-900">Private Viewing Confirmed</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                        Calendar Synced
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <div className="text-xs font-bold text-slate-900">Saturday, Nov 22 &bull; 11:30 AM</div>
                      <div className="text-[11px] text-slate-600 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>Villa 42, Maple 2, Dubai Hills</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1 text-[11px]">
                      <div className="font-semibold text-emerald-900 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>2-Hour Reminder Dispatched</span>
                      </div>
                      <p className="text-[10px] text-emerald-800/90 leading-tight">
                        Navigation pin &amp; reception gate pass sent to buyer on WhatsApp.
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/95 border border-slate-200 shadow-2xs flex items-center justify-between text-xs">
                    <span className="text-[11px] font-medium text-slate-600">No-Show Elimination</span>
                    <strong className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      &lt; 5% No-Shows
                    </strong>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom WhatsApp Indicator Bar */}
          <div className="bg-[#F0F2F5] px-3 py-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 shrink-0 relative z-10">
            <span className="font-medium">Step {activeIdx + 1} of 4</span>
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3].map((dotIdx) => (
                <span
                  key={dotIdx}
                  className={`h-1.5 rounded-full transition-all ${
                    dotIdx === activeIdx ? "w-4 bg-blue-600" : "w-1.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

