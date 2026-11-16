import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import SplashCursor from "@/components/SplashCursor";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://solutions.divyanshdubey.dev"),
  title: "WhatsApp Lead Qualification & Viewing System for Real Estate | Divyansh",
  description:
    "A Done-For-You WhatsApp Lead Qualification and Viewing-Booking System for real estate agencies. Respond in under 10 seconds, qualify buyers, and hand booked viewings to your agents with 100% client-owned infrastructure and zero monthly software fees.",
  keywords: [
    "WhatsApp real estate leads",
    "real estate lead qualification",
    "property viewing booking",
    "WhatsApp Business API real estate",
    "Meta lead automation real estate",
    "direct Meta wholesale billing",
  ],
  authors: [{ name: "Divyansh Dubey", url: "https://solutions.divyanshdubey.dev" }],
  creator: "Divyansh Dubey",
  publisher: "Divyansh Dubey",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://solutions.divyanshdubey.dev",
    siteName: "Divyansh — WhatsApp Real Estate Lead Infrastructure",
    title: "WhatsApp Lead Qualification & Viewing System for Real Estate | Divyansh",
    description:
      "We don't give you more leads. We make sure you never lose the leads you already paid for. One-time Done-For-You build with 100% client-owned infrastructure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Lead Qualification & Viewing System for Real Estate | Divyansh",
    description:
      "We don't give you more leads. We make sure you never lose the leads you already paid for. One-time Done-For-You build with 100% client-owned infrastructure.",
  },
  alternates: {
    canonical: "https://solutions.divyanshdubey.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white scroll-smooth antialiased" style={{ colorScheme: "light" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col relative">
        <SplashCursor
          rainbow={false}
          size={1}
          force={1}
          swirl={3}
          trail={1}
          clickSplash
          colorSpeed={1}
          intensity={1}
          momentum={1}
          shading={1}
          glow={0}
          quality="high"
          intro
          contained={false}
        />
        {children}
      </body>
    </html>
  );
}
