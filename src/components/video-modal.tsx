"use client";

import { useEffect, useRef, useState } from "react";
import { X, Play, Film, Check } from "lucide-react";

export interface DemoVideo {
  id: string;
  title: string;
  category: string;
  src: string;
  duration: string;
  description: string;
}

export const DEMO_VIDEOS: DemoVideo[] = [
  {
    id: "site-visit",
    title: "Site Visit & Viewing Booking",
    category: "Core WhatsApp Flow",
    src: "/demos/site-visit-booking.mp4",
    duration: "01:28",
    description: "Inbound portal lead engaged in 8.2s, qualifies budget, and confirms Saturday 11:30 AM appointment.",
  },
  {
    id: "deal-pipeline",
    title: "Lead Stream & Agent Handoff",
    category: "Lead Routing",
    src: "/demos/deal-pipeline.mp4",
    duration: "00:45",
    description: "Real-time qualified lead routing, pre-qualification criteria, and assigned broker notifications.",
  },
  {
    id: "dashboard",
    title: "Live Agency Dashboard",
    category: "Analytics & Velocity",
    src: "/demos/dashboard.mp4",
    duration: "01:10",
    description: "Response time velocity, conversation volume, broker efficiency, and viewing attendance metrics.",
  },
  {
    id: "meta-flows",
    title: "Meta WhatsApp In-Chat Flows",
    category: "Meta Platform",
    src: "/demos/meta-flows.mp4",
    duration: "01:28",
    description: "Native interactive WhatsApp form sheets for buyer area preferences and mortgage pre-approval.",
  },
  {
    id: "broadcast",
    title: "Project Broadcast Campaigns",
    category: "Marketing Outreach",
    src: "/demos/broadcast.mp4",
    duration: "00:50",
    description: "Official Meta-compliant property launch announcements and high-intent investor updates.",
  },
  {
    id: "template-library",
    title: "Meta Template Library",
    category: "Compliance",
    src: "/demos/template-library.mp4",
    duration: "00:40",
    description: "Pre-approved official Meta message templates configured specifically for real estate brokerages.",
  },
];

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  initialVideoId?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoSrc,
  initialVideoId = "site-visit",
}: VideoModalProps) {
  const [selectedVideo, setSelectedVideo] = useState<DemoVideo>(() => {
    if (videoSrc) {
      const bySrc = DEMO_VIDEOS.find((v) => v.src === videoSrc);
      if (bySrc) return bySrc;
    }
    return DEMO_VIDEOS.find((v) => v.id === initialVideoId) || DEMO_VIDEOS[0];
  });

  const [copied, setCopied] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoSrc) {
      const bySrc = DEMO_VIDEOS.find((v) => v.src === videoSrc);
      if (bySrc) {
        setSelectedVideo(bySrc);
        return;
      }
    }
    const match = DEMO_VIDEOS.find((v) => v.id === initialVideoId);
    if (match) setSelectedVideo(match);
  }, [initialVideoId, videoSrc]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, [selectedVideo, isOpen]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://solutions.divyanshdubey.dev/demo");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Product Demonstration Video Player"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50/90 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>{selectedVideo.title}</span>
              <span className="hidden sm:inline-flex text-[11px] font-mono text-slate-500 font-normal px-2 py-0.5 rounded bg-white border border-slate-200">
                {selectedVideo.category}
              </span>
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyLink}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Film className="w-3.5 h-3.5 text-blue-600" />
                  <span>Copy Demo Link</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              aria-label="Close walkthrough modal"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player (Unobstructed, 100% visible) */}
        <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden shrink-0">
          <video
            ref={videoRef}
            controls
            autoPlay
            playsInline
            preload="auto"
            className="w-full h-full object-contain bg-black"
          >
            <source src={selectedVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Selector Strip (Switch between all screen recordings) */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200/80 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {DEMO_VIDEOS.map((video) => {
              const isSelected = selectedVideo.id === video.id;
              return (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => setSelectedVideo(video)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs transition-all cursor-pointer border text-left ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-xs font-semibold"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60"
                  }`}
                >
                  <Play className={`w-3.5 h-3.5 ${isSelected ? "fill-white text-white" : "fill-blue-600 text-blue-600"}`} />
                  <div>
                    <span className="block leading-tight">{video.title}</span>
                    <span className={`text-[10px] font-mono ${isSelected ? "text-slate-300" : "text-slate-400"}`}>
                      {video.duration} &bull; {video.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Footer info */}
        <div className="px-5 py-3 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 shrink-0">
          <p className="text-[11px] text-slate-500 max-w-xl">
            {selectedVideo.description}
          </p>

          <a
            href="/demo"
            onClick={onClose}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-2 cursor-pointer"
          >
            Open full demo theater page &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
