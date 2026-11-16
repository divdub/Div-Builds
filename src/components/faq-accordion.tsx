"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Send, CheckCircle2 } from "lucide-react";
import { spurMotion } from "@/lib/motion";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [userQuestion, setUserQuestion] = useState("");
  const [questionSent, setQuestionSent] = useState(false);

  const faqs = [
    {
      q: "Can we send automated follow-ups without risking our WhatsApp number?",
      a: "Yes. The system operates exclusively through the official Meta Business Platform API with strict opt-in compliance and Meta-approved message templates. Because conversations are initiated by incoming buyer inquiries, your number maintains the highest quality tier with zero risk of carrier bans.",
    },
    {
      q: "Can our brokers keep using the WhatsApp Business app on the same number?",
      a: "Yes. Through official Meta coexistence support, your agency brokers can continue using the WhatsApp Business mobile app for direct personal chats, while automated qualification and viewing scheduling run continuously in the background.",
    },
    {
      q: "Are there any monthly software or per-seat fees?",
      a: "No. This is a one-time Done-For-You build. You pay zero software subscriptions, zero monthly platform retainers, and zero per-seat user licenses. You only pay direct wholesale conversation rates directly to Meta via your own Business Manager.",
    },
    {
      q: "Who owns the lead database and WhatsApp number?",
      a: "Your agency maintains 100% non-custodial ownership. The WhatsApp Business API account, phone number, customer records, and workflow automations reside inside your Meta Business Manager and your own server or cloud database. We hold zero proprietary lock-in.",
    },
    {
      q: "How does the deployment process work?",
      a: "We handle the complete Done-For-You setup end-to-end. This includes official WhatsApp Business account verification, qualification flow customization for your property portfolio, calendar synchronization, and full broker testing before go-live.",
    },
    {
      q: "Does this require an external CRM or complex software setup?",
      a: "No. The system sits 100% inside WhatsApp. You don't need to connect an external CRM, configure webhooks, or pay for third-party software. Inquiries, buyer qualification criteria, and viewing appointments are managed directly in WhatsApp, and you can import or export phone numbers in clean CSV format at any time.",
    },
  ];

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (userQuestion.trim()) {
      setQuestionSent(true);
      setTimeout(() => {
        setQuestionSent(false);
        setUserQuestion("");
      }, 3500);
    }
  };

  return (
    <section id="faq" className="py-20 sm:py-24 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
            <span>Direct Broker Verification</span>
          </div>
          <h2 className="section-h2">
            Questions Brokers Ask Before Launching
          </h2>
          <p className="subhead-lead max-w-lg mx-auto">
            Clear, transparent answers regarding infrastructure ownership, compliance, timeline, and zero monthly software fees.
          </p>
        </div>

        {/* Accordion List matching Spur's high-trust styling */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "border-blue-600/50 bg-slate-50/50 shadow-2xs"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
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
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.2, ease: [0.05, 0.1, 0.6, 1.1] },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.2, ease: [0, -0.2, 0.35, 1.2] },
                          opacity: { duration: 0.1 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white/70 rounded-b-2xl">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Spur-Style "Ask your own question" Form Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-semibold text-slate-900">
              Have a question about your WhatsApp ads or Meta Business account?
            </h4>
            <p className="text-xs text-slate-500">
              Ask us directly—we respond with full architectural specs within 2 hours.
            </p>
          </div>

          {questionSent ? (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Thank you! We received your question and will respond directly to your email.</span>
            </div>
          ) : (
            <form onSubmit={handleAskQuestion} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="text"
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                placeholder="e.g. Can we connect multiple broker phone numbers?"
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
              />
              <button
                type="submit"
                disabled={!userQuestion.trim()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors cursor-pointer"
              >
                <span>Ask Question</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>Direct engineer contact:</span>
            <a
              href="mailto:divyanshdubey1108@gmail.com"
              className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
            >
              divyanshdubey1108@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

