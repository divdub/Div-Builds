"use client";

import {
  Clock,
  Zap,
  DollarSign,
  Calendar,
  Lock,
  CheckCircle2,
  XCircle,
  Check,
} from "lucide-react";

export function ProofOwnershipSection() {
  const benchmarks = [
    {
      title: "First Contact Time",
      industry: "Industry Avg: 4+ Hours",
      system: "< 10 Seconds",
      detail: "Inquiries are engaged while still active on the listing page.",
      icon: Clock,
      win: "99.8% Faster",
    },
    {
      title: "Buyer Qualification",
      industry: "Industry Avg: 24-48h Callback",
      system: "Under 60s",
      detail: "Budget, area, and pre-approval validated before agent dispatch.",
      icon: Zap,
      win: "Pre-Screened",
    },
    {
      title: "Viewing Attendance",
      industry: "Industry Avg: 35% No-Show",
      system: "< 5% No-Shows",
      detail: "Automated WhatsApp arrival reminders with navigation pin.",
      icon: Calendar,
      win: "7x Higher Turnout",
    },
    {
      title: "Monthly Software Rent",
      industry: "Generic SaaS: $499+/mo",
      system: "$0 / Month",
      detail: "One-time DFY build with direct wholesale Meta billing at cost.",
      icon: DollarSign,
      win: "Zero Software Fees",
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
      feature: "System Setup & CRM Complexity",
      saas: "Requires external CRM setup, seat licenses, and webhooks",
      owned: "Sits 100% on WhatsApp • Clean CSV import & export",
      highlight: false,
    },
    {
      feature: "Long-Term Capital Value",
      saas: "Endless operational rent with zero equity",
      owned: "Permanent agency asset you own forever",
      highlight: true,
    },
  ];

  return (
    <section id="proof-ownership" className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Part 1: Industry Benchmarks vs Our System */}
        <div>
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
              <span>Verified Benchmarks</span>
            </div>
            <h2 className="section-h2">
              The Cost of Delayed Follow-Up vs. Direct Infrastructure
            </h2>
            <p className="subhead-lead">
              Real estate leads decay in value within minutes. Compare standard agency response metrics against our direct Meta lead infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benchmarks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50/60 border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
                        {item.win}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-slate-400 block line-through">
                        {item.industry}
                      </span>
                      <div className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-mono mt-1">
                        {item.system}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                        {item.title}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mt-5 pt-3 border-t border-slate-200/60 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Ownership vs SaaS Rent Comparison Matrix */}
        <div className="pt-10 border-t border-slate-200/80">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
              Financial &amp; Structural Architecture
            </span>
            <h3 className="section-h2">
              Why Agencies Choose Ownership Over Monthly SaaS Rent
            </h3>
            <p className="subhead-lead max-w-xl mx-auto">
              Compare the long-term economics and control between renting generic SaaS seats and owning a dedicated enterprise lead infrastructure.
            </p>
          </div>

          {/* Clean SaaS Comparison Matrix Table */}
          <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200/90 bg-white shadow-xs overflow-hidden">
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

            <div className="bg-blue-50/60 p-4 border-t border-blue-100 flex flex-wrap items-center justify-between gap-3 text-xs text-blue-950 font-mono">
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-blue-600" />
                <span>Permanent agency capital asset: You retain complete source infrastructure and database records.</span>
              </span>
              <span className="font-semibold text-blue-700">100% Non-Custodial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

