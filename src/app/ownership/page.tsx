"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { DarkCtaBanner } from "@/components/dark-cta-banner";
import { Footer } from "@/components/footer";
import { VideoModal } from "@/components/video-modal";
import {
  Lock,
  DollarSign,
  Database,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Check,
  ChevronDown,
} from "lucide-react";

export default function OwnershipPage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pillars = [
    {
      title: "100% Non-Custodial Setup",
      subtitle: "In Your Meta Business Manager",
      description:
        "The official WhatsApp Business API account is registered directly under your agency’s Meta Business Manager. You maintain administrative control, API keys, and ownership of your phone number at all times.",
      icon: Lock,
    },
    {
      title: "Direct Wholesale Meta Rates",
      subtitle: "Zero Vendor Message Markup",
      description:
        "You pay Meta directly via your attached credit card at cost (fractions of a cent per conversation). Generic SaaS tools typically mark up WhatsApp credits by 300% to 500%. With us, you pay 0% markup.",
      icon: DollarSign,
    },
    {
      title: "Client-Owned Lead Records",
      subtitle: "Your Database & CSV Export",
      description:
        "Customer phone numbers, qualification responses, and viewing logs belong 100% to your agency. Export clean CSV records anytime with zero proprietary CRM lock-in.",
      icon: Database,
    },
    {
      title: "Zero Monthly Software Rent",
      subtitle: "Permanent Agency Capital Asset",
      description:
        "You pay a one-time Done-For-You build fee for deployment and custom configuration. Zero monthly software subscriptions, zero per-seat agent licenses, and zero platform retainers.",
      icon: ShieldCheck,
    },
  ];

  const comparisonRows = [
    {
      feature: "Monthly Software Fees",
      saas: "$299 – $799 / month recurring per seat",
      owned: "$0 / month (One-time DFY asset)",
      highlight: true,
    },
    {
      feature: "WhatsApp Message Rates",
      saas: "3x to 5x markup on conversation credits",
      owned: "Direct wholesale Meta rates (at cost)",
      highlight: true,
    },
    {
      feature: "Account & Data Ownership",
      saas: "Vendor cloud lock-in (cancelling loses data)",
      owned: "100% non-custodial in your Meta Business Manager",
      highlight: true,
    },
    {
      feature: "System Simplicity & CRM Lock-In",
      saas: "Forces you into complicated vendor CRMs with mandatory seat licenses",
      owned: "Sits directly on WhatsApp with clean CSV import & export",
      highlight: false,
    },
    {
      feature: "Long-Term Capital Value",
      saas: "Endless operational rent with zero equity",
      owned: "Permanent agency asset you own forever",
      highlight: true,
    },
  ];

  const ownershipFaqs = [
    {
      q: "How does direct Meta wholesale billing work?",
      a: "When we set up your official WhatsApp Business Platform API account, you link your own credit card inside your Meta Business Manager. Meta bills you directly based on the exact number of conversations initiated, with zero intermediary markup.",
    },
    {
      q: "Can we add new brokers without paying extra fees?",
      a: "Yes. Because there are zero per-seat software licenses, you can add as many listing agents, administrative staff, and managers as you want without paying a single dollar in additional software fees.",
    },
    {
      q: "Can we continue using the WhatsApp Business app on our phones?",
      a: "Yes. Meta supports official coexistence, allowing your team to use the standard WhatsApp Business mobile app for direct personal interactions while automated qualification runs continuously in the background.",
    },
    {
      q: "What happens if we want to change or update our qualification questions later?",
      a: "Because you own the underlying workflow and database, your agency has complete freedom to modify questions, target budget brackets, and broker assignment rules at any time without paying vendor change fees.",
    },
  ];

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar
        onOpenVideoModal={() => setVideoModalOpen(true)}
      />

      <main className="flex-1">
        {/* Ownership Hero */}
        <section className="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
                <span>Infrastructure Ownership</span>
              </div>
              <h1 className="hero-h1">
                100% Client-Owned Lead Infrastructure &bull; Zero Software Rent
              </h1>
              <p className="subhead-lead max-w-2xl">
                Why leading real estate agencies choose non-custodial enterprise assets over renting generic SaaS seats and paying 4x message markups.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Ownership */}
        <section className="py-20 sm:py-24 bg-slate-50/60 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                          {item.subtitle}
                        </span>
                        <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                          {item.title}
                        </h2>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ownership vs SaaS Matrix */}
        <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <h2 className="section-h2">
                Ownership Economics vs. SaaS Rent
              </h2>
              <p className="subhead-lead max-w-xl mx-auto">
                Compare the capital structure and privacy differences between rented SaaS tools and a client-owned asset.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xs overflow-hidden">
              <div className="grid grid-cols-12 bg-slate-50/80 px-5 sm:px-6 py-3.5 border-b border-slate-200 text-xs font-bold text-slate-700">
                <div className="col-span-5 sm:col-span-4 uppercase tracking-wider font-mono">Capability</div>
                <div className="col-span-3 sm:col-span-4 text-slate-500 uppercase tracking-wider font-mono">Generic Rented SaaS</div>
                <div className="col-span-4 sm:col-span-4 text-blue-700 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600 stroke-[3]" />
                  <span>Your Owned System</span>
                </div>
              </div>

              <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-12 px-5 sm:px-6 py-4 items-center transition-colors ${
                      row.highlight ? "bg-slate-50/30" : "bg-white"
                    }`}
                  >
                    <div className="col-span-5 sm:col-span-4 font-semibold text-slate-900 pr-2">
                      {row.feature}
                    </div>
                    <div className="col-span-3 sm:col-span-4 text-slate-500 pr-2 flex items-center gap-1.5">
                      <XCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 hidden sm:inline" />
                      <span className="text-xs">{row.saas}</span>
                    </div>
                    <div className="col-span-4 sm:col-span-4 font-medium text-slate-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 hidden sm:inline" />
                      <span className="text-xs text-blue-950 font-semibold">{row.owned}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ownership FAQ */}
        <section className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <h2 className="section-h2">
                Technical &amp; Billing Questions
              </h2>
              <p className="subhead-lead max-w-lg mx-auto">
                Detailed answers regarding Meta Business accounts, compliance, and ongoing operation.
              </p>
            </div>

            <div className="space-y-3">
              {ownershipFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all ${
                      isOpen
                        ? "border-blue-600/50 bg-white shadow-2xs"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="leading-snug">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        <p>{faq.a}</p>
                      </div>
                    )}
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

