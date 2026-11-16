"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Zap,
  Calendar,
  Share2,
  FileCheck,
  MapPin,
  Bell,
  ArrowRight,
  FileSpreadsheet,
} from "lucide-react";
import { spurMotion } from "@/lib/motion";

interface LifecycleCard {
  title: string;
  tag: string;
  description: string;
  metric: string;
  icon: any;
}

interface StageData {
  id: string;
  label: string;
  summary: string;
  cards: LifecycleCard[];
}

const stages: StageData[] = [
  {
    id: "capture",
    label: "Capture",
    summary: "Engage every portal and ad lead in seconds while intent is peak.",
    cards: [
      {
        title: "Under 10s First Reply",
        tag: "Speed to Lead",
        description: "Engages portal and ad leads immediately on WhatsApp while the buyer is actively reviewing listing details.",
        metric: "8.2s Avg",
        icon: Clock,
      },
      {
        title: "All Lead Sources in One Flow",
        tag: "Unified Inquiries",
        description: "Bayut, PropertyFinder, Meta Lead Ads, and portal inquiries route into one seamless qualification stream.",
        metric: "100% Captured",
        icon: Share2,
      },
      {
        title: "Verified Agency Profile",
        tag: "Official Account",
        description: "Official Meta green verified business profile builds immediate trust and credibility with buyers.",
        metric: "Official Account",
        icon: CheckCircle2,
      },
    ],
  },
  {
    id: "qualify",
    label: "Qualify",
    summary: "Pre-screen buyer purchasing power and criteria before agent dispatch.",
    cards: [
      {
        title: "1-Tap Budget & Area Filters",
        tag: "Mobile Native",
        description: "Buyers tap structured options on mobile to validate target budget brackets and preferred micro-neighborhoods.",
        metric: "94% Completion",
        icon: Zap,
      },
      {
        title: "Financing & Timeline Check",
        tag: "Pre-Screened",
        description: "Checks mortgage pre-approval status and purchase timeframe so agents focus on high-intent buyers.",
        metric: "Pre-Screened",
        icon: FileCheck,
      },
      {
        title: "Zero Unqualified Viewings",
        tag: "Broker Efficiency",
        description: "Brokers never waste hours driving across town for unqualified inquiries or unverified contacts.",
        metric: "0 Wasted Trips",
        icon: CheckCircle2,
      },
    ],
  },
  {
    id: "convert",
    label: "Convert",
    summary: "Hand booked viewing appointments and complete briefs to your brokers.",
    cards: [
      {
        title: "Direct Viewing Booking",
        tag: "Calendar Lock",
        description: "Presents available viewing slots matching broker calendars, locking in confirmed site appointments.",
        metric: "Instant Booking",
        icon: Calendar,
      },
      {
        title: "Real-Time Agent Alerts",
        tag: "Instant Dispatch",
        description: "Assigned agents receive instant WhatsApp and SMS alerts with buyer criteria and property details.",
        metric: "Instant Dispatch",
        icon: CheckCircle2,
      },
      {
        title: "In-Chat Property Forms",
        tag: "Zero Redirects",
        description: "Collects buyer criteria and viewing choices directly inside WhatsApp with zero app downloads or webpage redirects.",
        metric: "Zero Redirects",
        icon: MapPin,
      },
    ],
  },
  {
    id: "follow-up",
    label: "Follow Up",
    summary: "Ensure viewing attendance and maintain relationship momentum.",
    cards: [
      {
        title: "2-Hour Arrival Reminders",
        tag: "Zero No-Shows",
        description: "Automated WhatsApp reminder with location pin dispatches 2 hours prior to viewing to guarantee turnout.",
        metric: "< 5% No-Show",
        icon: Bell,
      },
      {
        title: "Post-Viewing Check-Ins",
        tag: "Deal Velocity",
        description: "Automated post-tour check-in gathers buyer reactions and prompts second-viewing or offer discussions.",
        metric: "Feedback Loop",
        icon: CheckCircle2,
      },
      {
        title: "Clean CSV Export & Phone Log",
        tag: "Zero CRM Complexity",
        description: "Export all qualified contacts, budget brackets, and confirmed appointments in clean CSV format anytime—no complex CRM required.",
        metric: "CSV Export",
        icon: FileSpreadsheet,
      },
    ],
  },
];

export function LifecycleStageSwitcher() {
  const [activeStageId, setActiveStageId] = useState<string>("capture");
  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
            <span>Lifecycle Architecture</span>
          </div>
          <h2 className="section-h2">
            Grow at Every Stage &bull; Capture to Closing
          </h2>
          <p className="subhead-lead">
            A cohesive system that turns cold portal inquiries into confirmed viewings and long-term brokerage relationships.
          </p>
        </div>

        {/* Stage Selector Tabs (Spur Style) */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
            {stages.map((stage) => {
              const isActive = activeStageId === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageId(stage.id)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-950 hover:bg-white"
                  }`}
                >
                  {stage.label}
                </button>
              );
            })}
          </div>

          <div className="text-xs sm:text-sm text-slate-500 font-medium">
            <span>{activeStage.summary}</span>
          </div>

          {/* Cards Grid for Active Stage with Measured Card-Rise & 75ms Stagger */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStageId}
              variants={spurMotion.cardRiseContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {activeStage.cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={spurMotion.cardRise}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium border border-slate-200">
                          {card.tag}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                          {card.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold text-slate-700">
                      <span>{card.metric}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

