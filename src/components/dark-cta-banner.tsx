"use client";

import { ArrowRight, Mail, Check } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/lib/constants";

export function DarkCtaBanner() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 lg:p-16 shadow-2xl text-center space-y-8 relative overflow-hidden text-white">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-slate-900" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/80 text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>One-Time Done-For-You Deployment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              Every Lead Answered. Every Viewing Booked.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Stop losing portal and ad leads to delayed manual follow-ups. Deploy a 100% client-owned qualification and booking system directly inside your agency Meta account&mdash;with zero monthly software fees.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto relative z-10">
            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 border border-blue-600 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Test Live Demo</span>
              <ArrowRight className="w-4 h-4 text-blue-200" />
            </a>

            <a
              href="mailto:divyanshdubey1108@gmail.com?subject=Commercial%20Sheet%20Request%20-%20WhatsApp%20Lead%20System"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-xl transition-colors shadow-2xs cursor-pointer active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Request Commercial Sheet</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium border-t border-slate-800 max-w-xl mx-auto relative z-10">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-400 stroke-[2.5]" />
              <span>Done-For-You Turnkey Setup</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-400 stroke-[2.5]" />
              <span>Direct Meta Wholesale Billing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-400 stroke-[2.5]" />
              <span>100% Client-Owned Code &amp; Data</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

