/**
 * Motion Transplant: Exact Animation Curves & Timing Specifications
 * Extracted directly from https://www.spurnow.com/en using the Motion Transplant protocol
 * Telemetry: DOMMatrix 60FPS Sampling & Curve Fitting
 */

// Universal Spur Deceleration Curve (Quintic Out)
export const SPUR_EASE = [0.22, 1, 0.36, 1] as const;

// Secondary Micro-interaction Curve
export const SPUR_EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

// FAQ Accordion Measured Easing Curves
export const ACCORDION_EXPAND_EASE = [0.05, 0.1, 0.6, 1.1] as const;
export const ACCORDION_COLLAPSE_EASE = [0, -0.2, 0.35, 1.2] as const;

export const spurMotion = {
  ease: SPUR_EASE,
  easeCss: "cubic-bezier(0.22, 1, 0.36, 1)",

  // 4-Tab Platform Switcher
  tabTransition: {
    duration: 0.25,
    ease: SPUR_EASE,
  },

  // 4-Tab Stage Content Transition (Swap / Crossfade)
  stageSwap: {
    initial: { opacity: 0, scale: 0.98 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: SPUR_EASE,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.35,
        ease: SPUR_EASE,
      },
    },
  },

  // Lifecycle Stage Card Rise Entrance (Staggered Grid)
  cardRiseContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.075, // Measured 75ms stagger
      },
    },
  },

  cardRise: {
    hidden: { opacity: 0, y: 56, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6, // Measured 600ms
        ease: SPUR_EASE,
      },
    },
  },

  // Hero Section Rise Animation
  heroRise: {
    hidden: { opacity: 0, y: 12 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7, // Measured 700ms
        delay,
        ease: SPUR_EASE,
      },
    }),
  },

  // Hero 3D Stage Settle
  heroStage3D: {
    initial: {
      opacity: 0,
      transform: "perspective(1600px) rotateX(18deg) scale(0.94)",
    },
    animate: {
      opacity: 1,
      transform: "perspective(1600px) rotateX(0deg) scale(1)",
      transition: {
        duration: 1.2, // Measured 1200ms
        ease: SPUR_EASE,
      },
    },
  },

  // Notification Pop Badge
  notificationPop: {
    initial: { opacity: 0, y: 6, scale: 0.97 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35, // Measured 350ms
        ease: SPUR_EASE,
      },
    },
  },

  // FAQ Accordion Open / Close
  accordion: {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.2, ease: ACCORDION_EXPAND_EASE },
        opacity: { duration: 0.15 },
      },
    },
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.2, ease: ACCORDION_COLLAPSE_EASE },
        opacity: { duration: 0.1 },
      },
    },
  },
};

