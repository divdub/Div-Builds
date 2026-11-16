"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    THREE: any;
    VANTA: any;
  }
}

export function VantaBirds() {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaEffectRef = useRef<any>(null);

  useEffect(() => {
    let isCancelled = false;

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement;
        if (existing) {
          if (existing.dataset.loaded === "true" || (window.THREE && src.includes("three")) || (window.VANTA?.BIRDS && src.includes("vanta"))) {
            resolve();
            return;
          }
          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener("error", reject, { once: true });
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.onload = () => {
          script.dataset.loaded = "true";
          resolve();
        };
        script.onerror = (e) => reject(e);
        document.body.appendChild(script);
      });
    };

    const initVanta = () => {
      if (isCancelled || !containerRef.current || vantaEffectRef.current) return;
      if (typeof window !== "undefined" && window.VANTA && window.VANTA.BIRDS && window.THREE) {
        try {
          vantaEffectRef.current = window.VANTA.BIRDS({
            el: containerRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xffffff,
            color1: 0x0,
            color2: 0xf2ff,
            birdSize: 1.50,
            separation: 18.00,
            quantity: 3.00,
          });
        } catch (err) {
          console.error("Vanta Birds initialization failed:", err);
        }
      }
    };

    loadScript("/vendor/three.r134.min.js")
      .then(() => loadScript("/vendor/vanta.birds.min.js"))
      .then(() => {
        initVanta();
      })
      .catch((err) => {
        console.warn("Failed to load Vanta Birds dependencies:", err);
      });

    return () => {
      isCancelled = true;
      if (vantaEffectRef.current) {
        try {
          vantaEffectRef.current.destroy();
        } catch {
          // ignore cleanup errors
        }
        vantaEffectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="vanta-birds-canvas"
      className="absolute inset-0 pointer-events-none z-0 opacity-40 overflow-hidden w-full h-full max-w-full"
      aria-hidden="true"
    />
  );
}

