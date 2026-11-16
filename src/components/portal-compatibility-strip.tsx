"use client";

import { MessageSquare, QrCode, Globe, Building2, FileSpreadsheet, UserCheck, Smartphone, CheckCircle2 } from "lucide-react";

export function PortalCompatibilityStrip() {
  const channels = [
    { name: "Click-to-WhatsApp Ads", desc: "Instagram & Facebook Ads", icon: MessageSquare },
    { name: "Signboard QR Codes", desc: "On-Site Physical Yard Signs", icon: QrCode },
    { name: "Website WhatsApp", desc: "Floating Chat & Landing Pages", icon: Globe },
    { name: "Portal Inquiries", desc: "Direct Listing WhatsApp Links", icon: Building2 },
    { name: "Brochures & Open Houses", desc: "Print Collateral & Event Scans", icon: Smartphone },
    { name: "CSV Contact Import", desc: "Bulk Phone Number Ingestion", icon: FileSpreadsheet },
    { name: "Agent Mobile Handoff", desc: "Direct WhatsApp Alert to Broker", icon: UserCheck },
  ];

  return (
    <section className="py-14 sm:py-18 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
              Unified Inbound Channel
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              One Dedicated WhatsApp Number for Every Source You Run
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 self-start md:self-auto font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Sits 100% on WhatsApp &bull; Zero CRM Setup</span>
          </div>
        </div>

        {/* Inbound Entry Channels Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {channels.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-slate-300 transition-all flex flex-col justify-between shadow-2xs hover:shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 mb-3">
                  <Icon className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-snug">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1 line-clamp-1">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <span>Wherever a buyer taps or scans your WhatsApp number, they enter one seamless automated qualification flow.</span>
          <span className="font-mono text-[11px] text-slate-400">Import &amp; export phone numbers via clean CSV</span>
        </div>
      </div>
    </section>
  );
}

