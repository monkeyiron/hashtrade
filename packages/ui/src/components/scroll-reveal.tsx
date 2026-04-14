import React, { useRef } from "react";
import { gsap } from "../lib/gsap-registry";
import { useGSAP } from "@gsap/react";
import { cn } from "@workspace/ui/lib/utils";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-in" | "scale-up" | "clip-path";
  scrub?: boolean | number;
  delay?: number;
  duration?: number;
  start?: string; // default "top 85%"
}

export function ScrollReveal({
  children,
  className,
  variant = "fade-up",
  scrub = false,
  delay = 0,
  duration = 0.8,
  start = "top 85%",
  ...props
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      // Respect prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      let fromVars: gsap.TweenVars = {};
      let toVars: gsap.TweenVars = {
        scrollTrigger: {
          trigger: el,
          start,
          scrub: scrub,
          toggleActions: "play none none reverse",
        },
        delay,
        duration: scrub ? undefined : duration, // don't set duration if scrub is true, unless we want slow catchup (number)
        ease: "power2.out",
      };

      switch (variant) {
        case "fade-up":
          fromVars = { opacity: 0, y: 50 };
          toVars = { ...toVars, opacity: 1, y: 0 };
          break;
        case "fade-in":
          fromVars = { opacity: 0 };
          toVars = { ...toVars, opacity: 1 };
          break;
        case "scale-up":
          fromVars = { opacity: 0, scale: 0.9 };
          toVars = { ...toVars, opacity: 1, scale: 1 };
          break;
        case "clip-path":
          fromVars = { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" };
          toVars = { ...toVars, clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)" };
          break;
      }

      gsap.fromTo(el, fromVars, toVars);
    },
    { scope: containerRef, dependencies: [variant, scrub, delay, duration, start] }
  );

  return (
    <div ref={containerRef} className={cn("", className)} {...props}>
      {children}
    </div>
  );
}
