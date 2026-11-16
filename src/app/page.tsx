"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { PortalCompatibilityStrip } from "@/components/portal-compatibility-strip";
import { InteractivePlatformShowcase } from "@/components/interactive-platform-showcase";
import { LifecycleStageSwitcher } from "@/components/lifecycle-stage-switcher";
import { ProofOwnershipSection } from "@/components/proof-ownership-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { DarkCtaBanner } from "@/components/dark-cta-banner";
import { Footer } from "@/components/footer";
import { VideoModal } from "@/components/video-modal";

export default function HomePage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Clean Navbar */}
      <Navbar onOpenVideoModal={() => setVideoModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1: Hero Section with Clean Video Trigger & Animated Showcase */}
        <HeroSection onOpenVideoModal={() => setVideoModalOpen(true)} />

        {/* Section 2: Ecosystem & Portal Compatibility Strip */}
        <PortalCompatibilityStrip />

        {/* Section 3: Interactive 4-Tab Platform Showcase ("Turn Inquiries into Booked Viewings") */}
        <InteractivePlatformShowcase />

        {/* Section 4: Lifecycle Stage Switcher ("Capture • Qualify • Convert • Follow Up") */}
        <LifecycleStageSwitcher />

        {/* Section 5: Benchmarks & Ownership vs Rented SaaS Comparison Matrix */}
        <ProofOwnershipSection />

        {/* Section 6: FAQ Accordion + Direct Question Form */}
        <FaqAccordion />

        {/* Section 7: Final Dark CTA Banner */}
        <DarkCtaBanner />
      </main>

      {/* Clean Multi-Column Editorial Footer */}
      <Footer />

      {/* Walkthrough Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoSrc="/demos/hero-walkthrough.mp4"
      />
    </div>
  );
}
