import Link from "next/link";
import { Mail, Phone, ExternalLink, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-12">
        {/* Top Tier: Brand, Contact & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white text-slate-900 flex items-center justify-center font-bold text-sm shadow-xs">
                D
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Divyansh
              </span>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                solutions.divyanshdubey.dev
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Done-For-You WhatsApp Lead Infrastructure for Real Estate Agencies. 100% non-custodial client ownership with direct wholesale Meta billing and zero monthly software fees.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Meta Business Platform Architecture</span>
            </div>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="md:col-span-3 space-y-2.5 text-xs text-slate-300">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
              Direct Contact
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <a
                href="mailto:divyanshdubey1108@gmail.com"
                className="hover:text-white transition-colors"
              >
                divyanshdubey1108@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <a
                href="https://wa.me/917724054534?text=Hello%20Divyansh,%20I%20would%20like%20to%20test%20the%20Real%20Estate%20WhatsApp%20Lead%20System."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors font-mono"
              >
                +91 7724054534
              </a>
            </div>
            <div className="pt-1">
              <a
                href="https://divyanshdubey.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                <span>About the Architect</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="md:col-span-2 space-y-2 text-xs">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
              Platform Pages
            </div>
            <nav className="flex flex-col space-y-1.5 text-slate-400" aria-label="Footer Navigation">
              <Link href="/" className="hover:text-white transition-colors">
                Overview
              </Link>
              <Link href="/solutions" className="hover:text-white transition-colors">
                Solutions
              </Link>
              <Link href="/demo" className="hover:text-white transition-colors">
                Live Demo
              </Link>
              <Link href="/ownership" className="hover:text-white transition-colors">
                Ownership &amp; Meta FAQ
              </Link>
            </nav>
          </div>

          {/* Architecture Disclosures (2 cols) */}
          <div className="md:col-span-2 space-y-2 text-xs">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
              Architecture
            </div>
            <ul className="space-y-1.5 text-slate-400 text-[11px]">
              <li>Official Meta Business Platform</li>
              <li>100% Client-Owned</li>
              <li>Zero Software Rent</li>
              <li>Sits 100% on WhatsApp</li>
              <li>CSV Import &amp; Export</li>
              <li>Done-For-You Deployment</li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Disclosures & Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <p>
            &copy; 2026 Divyansh Dubey. All rights reserved. Meta and WhatsApp are registered trademarks of Meta Platforms, Inc.
          </p>
          <div className="flex items-center gap-3">
            <span>Client-Owned Asset</span>
            <span>&bull;</span>
            <span>Direct Wholesale Meta Billing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
