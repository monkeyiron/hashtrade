"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface TextMatrixRainProps {
  children: string;
  className?: string;
  duration?: number;
  repeat?: boolean;
}

export default function TextMatrixRain({
  children,
  className = "",
  duration = 2,
  repeat = true,
}: TextMatrixRainProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = textRef.current!;
      const finalText = children;
      const matrixChars =
        "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
      const intervals: ReturnType<typeof setInterval>[] = [];
      let isAnimating = false;

      const runAnimation = () => {
        if (isAnimating) return;
        isAnimating = true;

        const charStates = new Array(finalText.length).fill(false);
        const charElements: HTMLSpanElement[] = [];

        el.innerHTML = "";
        finalText.split("").forEach((char) => {
          const span = document.createElement("span");
          span.style.display = "inline-block";
          span.style.color = "var(--color-primary)";
          span.style.textShadow = "0 0 10px var(--color-primary)";
          span.textContent =
            char === " "
              ? "\u00A0"
              : matrixChars[Math.floor(Math.random() * matrixChars.length)];
          el.appendChild(span);
          charElements.push(span);
        });

        charElements.forEach((span, i) => {
          if (finalText[i] === " ") {
            span.textContent = "\u00A0";
            charStates[i] = true;
            return;
          }

          const lockDelay = i * 0.1 + Math.random() * 0.5;

          const scrambleInterval = setInterval(() => {
            if (!charStates[i]) {
              span.textContent =
                matrixChars[Math.floor(Math.random() * matrixChars.length)];
            }
          }, 50);
          intervals.push(scrambleInterval);

          gsap.delayedCall(lockDelay, () => {
            clearInterval(scrambleInterval);
            charStates[i] = true;

            gsap.to(span, {
              duration: 0.2,
              color: "var(--color-foreground)",
              textShadow: "0 0 20px var(--color-primary), 0 0 40px var(--color-primary)",
              onComplete: () => {
                span.textContent = finalText[i];
                gsap.to(span, {
                  duration: 0.5,
                  textShadow: "0 0 0px transparent",
                  ease: "power2.out",
                });
              },
            });
          });
        });

        // Release the animation lock safely after all characters have roughly locked
        gsap.delayedCall(finalText.length * 0.1 + 1.5, () => {
          isAnimating = false;
        });
      };

      runAnimation();

      let repeatInterval: ReturnType<typeof setInterval> | undefined;
      if (repeat) {
        repeatInterval = setInterval(() => {
          intervals.forEach(clearInterval);
          intervals.length = 0;
          // Bypass the isAnimating lock for forced repeats
          isAnimating = false;
          runAnimation();
        }, (duration + 1) * 1000);
      }

      const container = containerRef.current;
      const handleMouseEnter = () => {
        if (!isAnimating && !repeat) {
          intervals.forEach(clearInterval);
          intervals.length = 0;
          runAnimation();
        }
      };

      if (container) {
        container.addEventListener("mouseenter", handleMouseEnter);
      }

      return () => {
        if (repeatInterval) clearInterval(repeatInterval);
        intervals.forEach(clearInterval);
        if (container) {
          container.removeEventListener("mouseenter", handleMouseEnter);
        }
      };
    },
    { scope: containerRef, dependencies: [children, duration, repeat] }
  );

  // Respect reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        <span>{children}</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className}>
      <span ref={textRef}>{children}</span>
    </div>
  );
}
