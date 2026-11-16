"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { DarkCtaBanner } from "@/components/dark-cta-banner";
import { Footer } from "@/components/footer";
import { VideoModal } from "@/components/video-modal";
import { WHATSAPP_DEMO_URL } from "@/lib/constants";
import {
  Building2,
  Share2,
  UserCheck,
  QrCode,
  Clock,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function SolutionsPage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const solutions = [
    {
      title: "Portal Lead Capture & Recovery",
      tagline: "Bayut, PropertyFinder & Zillow Inquiries",
      description:
        "Buyers on Bayut, PropertyFinder, and Zillow message 4–5 agencies at once. Reply in 8.2 seconds and send floor plans before your competitors pick up.",
      points: [
        "Sub-10s automatic response directly from incoming portal inquiries",
        "Instant property brochure and floor plan delivery on WhatsApp",
        "Validates purchasing timeframe and budget before broker dispatch",
      ],
      icon: Building2,
      metric: "8.2s Avg Response",
    },
    {
      title: "Meta Lead Ad Conversion",
      tagline: "Instagram & Facebook Campaign Optimization",
      description:
        "Turn Instagram and Facebook ad clicks into instant WhatsApp conversations with 1-tap budget and timeline buttons.",
      points: [
        "Eliminates drop-off between ad click and first broker conversation",
        "1-tap interactive response buttons for maximum mobile completion",
        "Pre-screens mortgage pre-approval status automatically",
      ],
      icon: Share2,
      metric: "94% Mobile Completion",
    },
    {
      title: "Broker Dispatch & WhatsApp Handoff",
      tagline: "Zero Unqualified Sales Calls",
      description:
        "Send only pre-screened buyers to your listing agents—complete with transcript, budget, and viewing slots delivered directly on WhatsApp.",
      points: [
        "Full conversation transcript delivered to agent WhatsApp & SMS",
        "Instant viewing calendar invite and buyer criteria summary",
        "Clean CSV contact export with zero CRM setup required",
      ],
      icon: UserCheck,
      metric: "100% Pre-Screened",
    },
    {
      title: "Open House QR & CSV Phone Import",
      tagline: "Unified Inbound Channel",
      description:
        "Turn signboard and brochure QR scans into instant floor plans, or bulk import past buyer phone numbers via CSV to trigger qualification flows.",
      points: [
        "Instant contact capture from physical QR scans with no paper forms",
        "Bulk import past buyer numbers in standard CSV format",
        "Official Meta-compliant message delivery with 0% ban risk",
      ],
      icon: QrCode,
      metric: "Instant Inbound",
    },
  ];

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar
        onOpenVideoModal={() => setVideoModalOpen(true)}
      />

      <main className="flex-1">
        {/* Solutions Hero */}
        <section className="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
                <span>Agency Solutions</span>
              </div>
              <h1 className="hero-h1">
                Engineered for High-Volume Real Estate Operations
              </h1>
              <p className="subhead-lead max-w-2xl">
                Eliminate lead decay across portals, paid advertising, open-house events, and luxury property portfolios—with 100% client-owned infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Solutions Deep-Dive Cards */}
        <section className="py-20 sm:py-24 bg-slate-50/60 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                          {item.metric}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
                          {item.tagline}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                          {item.title}
                        </h2>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        {item.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <a
                        href={WHATSAPP_DEMO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Test this workflow on your phone</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <DarkCtaBanner />
      </main>

      <Footer />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoSrc="/demos/hero-walkthrough.mp4"
      />
    </div>
  );
}

