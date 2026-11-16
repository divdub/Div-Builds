"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw,
  ChevronLeft,
  Store,
  Smile,
  Camera,
  Mic,
  Plus,
  Play,
  Film,
  Smartphone,
} from "lucide-react";

interface WhatsAppInteractivePhoneProps {
  autoPlay?: boolean;
  businessName?: string;
  initialStep?: number;
  initialMode?: "video" | "interactive";
  videoSrc?: string;
}

export function WhatsAppInteractivePhone({
  autoPlay = true,
  businessName = "Your Business",
  initialStep = 1,
  initialMode = "video",
  videoSrc = "/demos/test2.mp4",
}: WhatsAppInteractivePhoneProps) {
  const [mode, setMode] = useState<"video" | "interactive">(initialMode);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [step, setStep] = useState<number>(initialStep);
  const [selectedBudget, setSelectedBudget] = useState<string>("1M – 2M");
  const [selectedSlot, setSelectedSlot] = useState<string>("Saturday 11:30 AM");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sync video event listeners
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const handleTimeUpdate = () => {
      if (vid.duration) {
        setProgress((vid.currentTime / vid.duration) * 100);
      }
    };
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    vid.addEventListener("timeupdate", handleTimeUpdate);
    vid.addEventListener("play", handlePlay);
    vid.addEventListener("pause", handlePause);

    return () => {
      vid.removeEventListener("timeupdate", handleTimeUpdate);
      vid.removeEventListener("play", handlePlay);
      vid.removeEventListener("pause", handlePause);
    };
  }, [mode]);

  const togglePlayPause = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().catch(() => {});
    } else {
      vid.pause();
    }
  };

  const handleReplay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (mode === "video") {
      const vid = videoRef.current;
      if (vid) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      }
    } else {
      handleReset();
    }
  };

  // Auto-scroll when new messages appear
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [step, isTyping]);

  useEffect(() => {
    if (!autoPlay) return;

    // Sequence timing
    const t1 = setTimeout(() => {
      // Step 1 is already visible or pops in
      setStep(1);
    }, 400);

    const t2 = setTimeout(() => {
      // User taps "Buy"
      setStep(2);
    }, 2800);

    const t3 = setTimeout(() => {
      // System typing indicator
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setStep(3); // Inbound 2: Budget range question
      }, 700);
    }, 3600);

    const t4 = setTimeout(() => {
      // User taps "1M – 2M"
      setStep(4);
    }, 6200);

    const t5 = setTimeout(() => {
      // System typing indicator
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setStep(5); // Inbound 3: Viewing slots
      }, 700);
    }, 7000);

    const t6 = setTimeout(() => {
      // User taps "Saturday 11:30 AM"
      setStep(6);
    }, 9400);

    const t7 = setTimeout(() => {
      // System typing indicator
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setStep(7); // Inbound 4: Viewing confirmed & advisor dispatched
      }, 700);
    }, 10200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
    };
  }, [autoPlay]);

  const handleReset = () => {
    setStep(1);
    setIsTyping(false);
  };

  const handleSelectOption = (nextStep: number, customVal?: string) => {
    if (nextStep === 2) {
      setStep(2);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setStep(3);
      }, 600);
    } else if (nextStep === 4) {
      if (customVal) setSelectedBudget(customVal);
      setStep(4);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setStep(5);
      }, 600);
    } else if (nextStep === 6) {
      if (customVal) setSelectedSlot(customVal);
      setStep(6);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setStep(7);
      }, 600);
    }
  };

  return (
    <div data-no-splash="true" className="w-full max-w-[320px] sm:max-w-[335px] relative mx-auto select-none">
      {/* Top Floating Controls: Recording / Interactive Switch + Mute/Replay */}
      <div className="flex items-center justify-between gap-2 mb-2 px-1">
        <div className="inline-flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-[11px] font-medium">
          <button
            type="button"
            onClick={() => setMode("video")}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
              mode === "video"
                ? "bg-white text-slate-900 shadow-2xs font-semibold"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <Film className="w-3 h-3 text-blue-600" />
            <span>Recording</span>
          </button>
          <button
            type="button"
            onClick={() => setMode("interactive")}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
              mode === "interactive"
                ? "bg-white text-slate-900 shadow-2xs font-semibold"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <Smartphone className="w-3 h-3 text-emerald-600" />
            <span>Interactive</span>
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleReplay}
            title={mode === "video" ? "Restart recording" : "Replay interactive simulation"}
            className="w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-600 shadow-2xs hover:bg-slate-50 flex items-center justify-center cursor-pointer transition-transform active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Realistic iPhone Device Shell */}
      <div className="bg-[#121b22] rounded-[44px] sm:rounded-[48px] p-2.5 sm:p-3 shadow-2xl border-4 border-[#232d36] relative overflow-hidden">
        {mode === "video" ? (
          /* Video Mode inside Phone Mockup: runs test2.mp4 by default (aspect matched) */
          <div className="bg-black rounded-[32px] sm:rounded-[36px] overflow-hidden flex flex-col h-[590px] sm:h-[665px] relative shadow-inner group">
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onClick={togglePlayPause}
              className="w-full h-full object-cover cursor-pointer"
            />

            {/* Dynamic Island Pill */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 pointer-events-none flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-900/90 mr-auto ml-1.5" />
            </div>

            {/* Subtle Phone Screen Glare Reflection */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-70 z-10" />

            {/* Centered Play Overlay when Paused */}
            {!isPlaying && (
              <div
                onClick={togglePlayPause}
                className="absolute inset-0 z-20 bg-black/40 backdrop-blur-[1px] flex items-center justify-center cursor-pointer transition-opacity"
              >
                <div className="w-14 h-14 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-xl transition-transform hover:scale-105 pl-1">
                  <Play className="w-6 h-6 fill-slate-900 text-slate-900" />
                </div>
              </div>
            )}

            {/* Bottom Controls Overlay: Full-width Scrubber Bar */}
            <div className="absolute bottom-3 inset-x-3.5 z-20 pointer-events-auto">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickPos = (e.clientX - rect.left) / rect.width;
                  if (videoRef.current && videoRef.current.duration) {
                    videoRef.current.currentTime = clickPos * videoRef.current.duration;
                  }
                }}
                className="w-full h-1.5 bg-white/30 hover:h-2 rounded-full overflow-hidden cursor-pointer backdrop-blur-xs transition-all"
              >
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* iOS Home Indicator Bar */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full pointer-events-none z-20" />
          </div>
        ) : (
          /* Inner Phone Screen Container (Interactive) */
          <div className="bg-[#EFEAE2] rounded-[32px] sm:rounded-[36px] overflow-hidden flex flex-col h-[590px] sm:h-[665px] relative shadow-inner">
          {/* Subtle WhatsApp Wallpaper Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.055] z-0"
            style={{
              backgroundImage: `radial-gradient(#008069 0.75px, transparent 0.75px), radial-gradient(#008069 0.75px, #EFEAE2 0.75px)`,
              backgroundSize: "28px 28px",
              backgroundPosition: "0 0, 14px 14px",
            }}
          />

          {/* Dynamic Island & iOS Status Bar Area */}
          <div className="bg-[#008069] text-white pt-2.5 pb-1 px-5 relative z-10">
            {/* Dynamic Island pill */}
            <div className="w-24 h-5 bg-black rounded-full mx-auto mb-1 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-900/90 mr-auto ml-2" />
            </div>

            {/* Status bar info: 9:41 on left, signal + battery on right */}
            <div className="flex items-center justify-between text-[11px] font-semibold tracking-tight text-white/95 px-1">
              <span>9:41</span>
              <div className="flex items-center gap-1.5">
                {/* Cellular signal bars */}
                <svg className="w-3.5 h-2.5 fill-current" viewBox="0 0 17 11">
                  <rect x="0" y="8" width="3" height="3" rx="0.5" />
                  <rect x="4.5" y="5.5" width="3" height="5.5" rx="0.5" />
                  <rect x="9" y="3" width="3" height="8" rx="0.5" />
                  <rect x="13.5" y="0" width="3" height="11" rx="0.5" />
                </svg>
                {/* WiFi icon */}
                <svg className="w-3.5 h-3 fill-current" viewBox="0 0 16 12">
                  <path d="M8 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-4.9-3.2a7.02 7.02 0 019.8 0 .8.8 0 001.1-1.1 8.62 8.62 0 00-12 0 .8.8 0 001.1 1.1zm-2.2-2.2a10.22 10.22 0 0114.2 0 .8.8 0 001.1-1.1 11.82 11.82 0 00-16.4 0 .8.8 0 001.1 1.1z" />
                </svg>
                {/* Battery icon with green fill matching the reference */}
                <div className="w-5 h-2.5 rounded-[4px] border border-white/90 p-[1px] flex items-center relative">
                  <div className="h-full w-[82%] bg-[#22c55e] rounded-[2px]" />
                  <div className="absolute -right-[3px] top-[2px] w-[2px] h-[5px] bg-white/90 rounded-r-[1px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Official WhatsApp Business Header */}
          <div className="bg-[#008069] text-white px-2 py-2 flex items-center justify-between shrink-0 shadow-sm relative z-10">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                className="p-1 hover:bg-black/10 rounded-full transition-colors"
                title="Back"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              {/* Circular contact avatar matching reference */}
              <div className="w-8 h-8 rounded-full bg-slate-300/80 flex items-center justify-center shrink-0 overflow-hidden border border-white/20">
                <svg
                  className="w-5 h-5 text-slate-500 fill-current translate-y-0.5"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="leading-tight ml-0.5">
                <div className="text-[14px] font-medium text-white tracking-tight">
                  {businessName}
                </div>
              </div>
            </div>

            {/* Storefront / Shop Icon matching WhatsApp Business header */}
            <div className="pr-1.5 flex items-center">
              <button
                type="button"
                className="p-1.5 hover:bg-black/10 rounded-full transition-colors text-white"
                title="Business Catalog"
              >
                <Store className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div
            ref={scrollContainerRef}
            className="flex-1 p-2.5 space-y-2.5 overflow-y-auto z-10 relative scrollbar-none"
          >
            {/* Message 1: Inbound Greeting + Official Reply Buttons (1:1 Reference match) */}
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="flex justify-start"
              >
                <div className="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[92%] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] border border-slate-100 text-[#111b21] space-y-2.5">
                  <div className="text-[12.5px] leading-snug">
                    <p className="font-normal">Hi! Thanks for your interest!</p>
                    <p className="font-normal text-slate-700">We can help you find the right property.</p>
                    <p className="font-normal mt-2">What are you looking for?</p>
                  </div>

                  <div className="text-right text-[10px] text-slate-400 font-normal -mt-1">
                    10:24
                  </div>

                  {/* Official WhatsApp Reply Buttons */}
                  <div className="space-y-1.5 pt-0.5">
                    <button
                      type="button"
                      onClick={() => handleSelectOption(2)}
                      className={`w-full py-2 px-3 rounded-xl border border-slate-200/90 bg-white hover:bg-emerald-50/60 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs ${
                        step >= 2 ? "ring-2 ring-[#008069] bg-emerald-50/40" : ""
                      }`}
                    >
                      <span className="text-sm">🏡</span>
                      <span className="text-[13px] font-semibold text-[#008069]">Buy</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectOption(2)}
                      className="w-full py-2 px-3 rounded-xl border border-slate-200/90 bg-white hover:bg-emerald-50/60 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <span className="text-sm">📈</span>
                      <span className="text-[13px] font-semibold text-[#008069]">Investment</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectOption(2)}
                      className="w-full py-2 px-3 rounded-xl border border-slate-200/90 bg-white hover:bg-emerald-50/60 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <span className="text-sm">💬</span>
                      <span className="text-[13px] font-semibold text-[#008069]">Talk to Agent</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Outbound Response 1: User Selected "Buy" */}
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="flex justify-end"
              >
                <div className="bg-[#D9FDD3] rounded-2xl rounded-tr-sm px-3 py-1.5 max-w-[85%] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] border border-emerald-100 flex items-center gap-2">
                  <span className="text-[13px] font-normal text-[#111b21]">Buy</span>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 font-normal shrink-0 mt-1">
                    <span>10:24</span>
                    {/* Blue double checkmarks */}
                    <span className="text-[#53bdeb] font-bold text-[11px] leading-none">&#10003;&#10003;</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Message 2: Inbound Budget Range (1:1 Reference match) */}
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="flex justify-start"
              >
                <div className="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[92%] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] border border-slate-100 text-[#111b21] space-y-2.5">
                  <div className="text-[12.5px] leading-snug">
                    <p className="font-normal">Great! Could you share your budget range?</p>
                  </div>

                  <div className="text-right text-[10px] text-slate-400 font-normal -mt-1">
                    10:24
                  </div>

                  {/* Official WhatsApp Reply Buttons for Budget */}
                  <div className="space-y-1.5 pt-0.5">
                    <button
                      type="button"
                      onClick={() => handleSelectOption(4, "Under 1M")}
                      className="w-full py-2 px-3 rounded-xl border border-slate-200/90 bg-white hover:bg-emerald-50/60 active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer shadow-2xs"
                    >
                      <span className="text-[13px] font-semibold text-[#008069]">Under 1M</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectOption(4, "1M – 2M")}
                      className={`w-full py-2 px-3 rounded-xl border border-slate-200/90 bg-white hover:bg-emerald-50/60 active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer shadow-2xs ${
                        step >= 4 ? "ring-2 ring-[#008069] bg-emerald-50/40" : ""
                      }`}
                    >
                      <span className="text-[13px] font-semibold text-[#008069]">1M – 2M</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectOption(4, "2M+")}
                      className="w-full py-2 px-3 rounded-xl border border-slate-200/90 bg-white hover:bg-emerald-50/60 active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer shadow-2xs"
                    >
                      <span className="text-[13px] font-semibold text-[#008069]">2M+</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Outbound Response 2: User Selected Budget */}
            {step >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="flex justify-end"
              >
                <div className="bg-[#D9FDD3] rounded-2xl rounded-tr-sm px-3 py-1.5 max-w-[85%] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] border border-emerald-100 flex items-center gap-2">
                  <span className="text-[13px] font-normal text-[#111b21]">{selectedBudget}</span>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 font-normal shrink-0 mt-1">
                    <span>10:24</span>
                    <span className="text-[#53bdeb] font-bold text-[11px] leading-none">&#10003;&#10003;</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Message 3: Inbound Viewing Booking Flow */}
            {step >= 5 && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="flex justify-start"
              >
                <div className="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[92%] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] border border-slate-100 text-[#111b21] space-y-2.5">
                  <div className="text-[12.5px] leading-snug">
                    <p className="font-normal">Private viewing slots for Marina Horizon Penthouse:</p>
                  </div>

                  <div className="text-right text-[10px] text-slate-400 font-normal -mt-1">
                    10:25
                  </div>

                  {/* Official WhatsApp Reply Buttons for Viewing Slot */}
                  <div className="space-y-1.5 pt-0.5">
                    <button
                      type="button"
                      onClick={() => handleSelectOption(6, "Saturday 11:30 AM")}
                      className={`w-full py-2 px-3 rounded-xl border border-slate-200/90 bg-white hover:bg-emerald-50/60 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs ${
                        step >= 6 ? "ring-2 ring-[#008069] bg-emerald-50/40" : ""
                      }`}
                    >
                      <span className="text-xs">📅</span>
                      <span className="text-[13px] font-semibold text-[#008069]">Saturday 11:30 AM</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectOption(6, "Sunday 2:00 PM")}
                      className="w-full py-2 px-3 rounded-xl border border-slate-200/90 bg-white hover:bg-emerald-50/60 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <span className="text-xs">📅</span>
                      <span className="text-[13px] font-semibold text-[#008069]">Sunday 2:00 PM</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Outbound Response 3: Selected Slot */}
            {step >= 6 && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="flex justify-end"
              >
                <div className="bg-[#D9FDD3] rounded-2xl rounded-tr-sm px-3 py-1.5 max-w-[85%] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] border border-emerald-100 flex items-center gap-2">
                  <span className="text-[13px] font-normal text-[#111b21]">{selectedSlot}</span>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 font-normal shrink-0 mt-1">
                    <span>10:25</span>
                    <span className="text-[#53bdeb] font-bold text-[11px] leading-none">&#10003;&#10003;</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Message 4: Confirmed Viewing Pass & Broker Assigned */}
            {step >= 7 && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="flex justify-start"
              >
                <div className="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[92%] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] border border-slate-100 text-[#111b21] space-y-2">
                  <p className="text-[12.5px] font-semibold text-slate-900 leading-snug">
                    Viewing confirmed for Saturday at 11:30 AM.
                  </p>
                  <p className="text-[11.5px] text-slate-600 leading-relaxed">
                    Senior advisor Sarah Jenkins assigned. Entry pass and calendar invite dispatched.
                  </p>
                  <div className="text-right text-[10px] text-slate-400 font-normal">
                    10:25
                  </div>
                  <div className="pt-0.5">
                    <button
                      type="button"
                      className="w-full py-2 px-3 rounded-xl border border-slate-200/90 bg-white hover:bg-emerald-50/60 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <span className="text-xs">📍</span>
                      <span className="text-[13px] font-semibold text-[#008069]">View Gate Pass</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Official Typing Indicator Bubble */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] border border-slate-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008069]/60 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008069]/60 animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008069]/60 animate-bounce [animation-delay:0.3s]" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Official WhatsApp iOS Input Bar & Home Indicator */}
          <div className="bg-[#F0F2F5] px-2 py-1.5 border-t border-slate-200/60 shrink-0 z-10">
            <div className="flex items-center gap-2">
              {/* Plus (+) Button */}
              <button
                type="button"
                className="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
                title="Add attachment"
              >
                <Plus className="w-5 h-5" />
              </button>

              {/* Text Input Pill */}
              <div className="flex-1 bg-white rounded-full border border-slate-200/90 px-3 py-1.5 flex items-center justify-between shadow-2xs">
                <span className="text-xs text-slate-400 select-none">Message</span>
                <Smile className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600 transition-colors" />
              </div>

              {/* Camera Button */}
              <button
                type="button"
                className="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
                title="Camera"
              >
                <Camera className="w-4 h-4" />
              </button>

              {/* Mic Button */}
              <button
                type="button"
                className="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
                title="Voice note"
              >
                <Mic className="w-4 h-4" />
              </button>
            </div>

            {/* iOS Home Indicator Line */}
            <div className="w-28 h-1 bg-black/60 rounded-full mx-auto mt-2 mb-0.5" />
          </div>
        </div>
      )}
    </div>
  </div>
);
}
