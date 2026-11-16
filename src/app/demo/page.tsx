"use client";

import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { DarkCtaBanner } from "@/components/dark-cta-banner";
import { Footer } from "@/components/footer";
import { WhatsAppInteractivePhone } from "@/components/whatsapp-interactive-phone";
import { DEMO_VIDEOS, DemoVideo } from "@/components/video-modal";
import { WHATSAPP_DEMO_URL } from "@/lib/constants";
import {
  Play,
  MessageSquare,
  ArrowRight,
  QrCode,
  Check,
  Share2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Building2,
  FileText,
} from "lucide-react";

export default function DemoPage() {
  const [selectedVideo, setSelectedVideo] = useState<DemoVideo>(DEMO_VIDEOS[0]);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedKeyword, setCopiedKeyword] = useState(false);
  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  const testKeyword = "Hello, I would like to test the live demo";
  const whatsappNumber = "+91 7724054534";
  const waLink = `https://wa.me/917724054534?text=${encodeURIComponent(
    "Hello, I would like to test the live demo"
  )}`;

  useEffect(() => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.load();
    }
  }, [selectedVideo]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://solutions.divyanshdubey.dev/demo");
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopyKeyword = () => {
    navigator.clipboard.writeText(testKeyword);
    setCopiedKeyword(true);
    setTimeout(() => setCopiedKeyword(false), 2000);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Brochure Video Link Hero */}
        <section className="pt-14 pb-16 sm:pt-20 sm:pb-20 lg:pt-22 lg:pb-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {/* Top Pill for Brochure Visitors */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 text-xs font-mono uppercase tracking-wider text-blue-700 font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Official Demo Video &bull; Link from Agency Brochure</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-3xl space-y-3">
                <h1 className="hero-h1">
                  Watch the System in Action: From Portal Inquiry to Confirmed Site Visit
                </h1>
                <p className="subhead-lead max-w-2xl">
                  Inspect the real WhatsApp lead qualification, 1-tap buyer pre-screening, and direct agent handoff recorded directly from active agency operations.
                </p>
              </div>

              {/* Action Buttons for Brochure Readers */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-800 shadow-2xs transition-all cursor-pointer hover:bg-slate-50"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Demo Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 text-blue-600" />
                      <span>Copy Brochure Demo Link</span>
                    </>
                  )}
                </button>

                <a
                  href={WHATSAPP_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white shadow-sm transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Test on Your Phone</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Video Theater Showcase Section */}
        <section id="video-theater" className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Video Selector Tabs */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 uppercase tracking-wider">
                <span>Select Demo Recording to Watch:</span>
                <span className="hidden sm:inline">6 Screen Recordings Available</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
                {DEMO_VIDEOS.map((video, idx) => {
                  const isSelected = selectedVideo.id === video.id;
                  return (
                    <button
                      key={video.id}
                      type="button"
                      onClick={() => setSelectedVideo(video)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/50"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full pb-1">
                        <span className={`text-[10px] font-mono font-bold ${isSelected ? "text-blue-400" : "text-slate-400"}`}>
                          0{idx + 1}
                        </span>
                        <span className={`text-[10px] font-mono ${isSelected ? "text-slate-300" : "text-slate-400"}`}>
                          {video.duration}
                        </span>
                      </div>
                      <span className="text-xs font-semibold tracking-tight leading-snug line-clamp-2">
                        {video.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* The Main High-Resolution Player Container */}
            <div className="rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
              {/* Player Top Meta Bar */}
              <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-slate-900 text-sm">
                    {selectedVideo.title}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                    {selectedVideo.category}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-500 text-xs">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    {selectedVideo.duration}
                  </span>
                  <span className="hidden sm:inline font-mono">&bull; Direct Screen Recording</span>
                </div>
              </div>

              {/* Video Player (100% visible, clean controls) */}
              <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden">
                <video
                  ref={videoPlayerRef}
                  controls
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain bg-black"
                >
                  <source src={selectedVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Player Bottom Description & Key Highlights */}
              <div className="p-6 sm:p-8 bg-white border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1.5 max-w-2xl">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Recording Summary &bull; {selectedVideo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedVideo.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-mono text-slate-800 transition-colors cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5 text-slate-600" />
                    <span>Copy Video Link</span>
                  </button>
                  <a
                    href={WHATSAPP_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    <span>Test on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* 4 Architectural Highlights Shown in These Videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">1. Sub-10s First Contact</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Instant automated engagement triggers on incoming portal inquiries before the buyer leaves the listing photos.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">2. 1-Tap Buyer Pre-Screening</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Buyers tap structured options to confirm target budget brackets, preferred areas, and mortgage pre-approval status.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Building2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">3. Calendar Lock-In</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specific viewing slots coordinate with agent availability, locking in Saturday 11:30 AM private viewing appointments.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700">
                  <FileText className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">4. Clean CSV Export &amp; Phone Log</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Full buyer briefs, verified financing status, and conversation logs captured directly in WhatsApp and exportable to CSV anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Phone Test on Your Own Device */}
        <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
                <span>Hands-On Test</span>
              </div>
              <h2 className="section-h2">
                Now Test the Flow Directly on Your Own Smartphone
              </h2>
              <p className="subhead-lead">
                Scan the QR code or send the test keyword prompt to experience the exact buyer dialogue on your own phone.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Direct Phone Test Card (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs space-y-5">
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-700 pb-3 border-b border-slate-200 font-mono text-xs">
                      <span>Target Demonstration Number</span>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 font-semibold hover:underline"
                      >
                        {whatsappNumber}
                      </a>
                    </div>

                    <div className="flex items-center justify-between text-slate-700 pt-2">
                      <span>Message keyword prompt:</span>
                      <button
                        type="button"
                        onClick={handleCopyKeyword}
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg cursor-pointer transition-colors shadow-2xs"
                      >
                        <span>&quot;{testKeyword}&quot;</span>
                        <span className="text-[11px] text-blue-600 font-semibold">
                          {copiedKeyword ? "Copied!" : "Copy"}
                        </span>
                      </button>
                    </div>
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>Open WhatsApp &amp; Send Prompt</span>
                    <ArrowRight className="w-4 h-4 text-blue-200" />
                  </a>

                  {/* QR Code Scanner Card */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center gap-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-xl p-1.5 shrink-0 flex items-center justify-center border border-slate-200">
                      <QrCode className="w-8 h-8 text-slate-700" />
                    </div>
                    <div className="space-y-0.5 text-xs">
                      <span className="font-semibold text-slate-900 block">
                        Scan with Your Mobile Camera
                      </span>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Launches WhatsApp immediately with the test phrase pre-filled. No contact saving needed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-blue-950 space-y-1">
                  <span className="font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    100% Official Meta Business Platform
                  </span>
                  <p className="text-slate-600 text-[11px]">
                    Direct wholesale conversation billing with Meta &bull; Zero monthly software subscriptions &bull; 100% client-owned data.
                  </p>
                </div>
              </div>

              {/* Right Column: Live Interactive WhatsApp Simulation (6 cols) */}
              <div className="lg:col-span-6 flex justify-center">
                <WhatsAppInteractivePhone autoPlay={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <DarkCtaBanner />
      </main>

      <Footer />
    </div>
  );
}
