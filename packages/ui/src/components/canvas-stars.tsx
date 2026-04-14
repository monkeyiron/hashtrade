"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * A static low-cost map of stars, rendered via deterministic seed so it doesn't flicker/change on reload incorrectly.
 * We add a slow GSAP parallax effect here.
 */
export function CanvasStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Deterministic PRNG
  const xoshiro128ss = (a: number, b: number, c: number, d: number) => {
    return function() {
      const t = b << 9;
      let r = a * 5; r = (r << 7 | r >>> 25) * 9;
      c ^= a; d ^= b; b ^= c; a ^= d; c ^= t;
      d = d << 11 | d >>> 21;
      return (r >>> 0) / 4294967296;
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const render = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      // Make canvas taller than height to allow scrolling parallax
      canvas.height = height * 1.5;

      ctx.clearRect(0, 0, width, height * 1.5);

      // Seed setup
      const prng = xoshiro128ss(1, 2, 3, 4);

      // Draw 60 stars
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      for (let i = 0; i < 60; i++) {
        const x = prng() * width;
        const y = prng() * (height * 1.5);
        const radius = prng() * 1.5 + 0.5;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5 bright navigation stars
      ctx.fillStyle = "rgba(0, 229, 255, 0.7)"; // Cyan glow stars
      for (let i = 0; i < 5; i++) {
        const x = prng() * width;
        const y = prng() * (height * 1.5);
        const radius = prng() * 2 + 1;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    render();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(render, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      gsap.to(containerRef.current, {
        y: -100, // Move stars up slightly as we scroll
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smooth dampening
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none h-[150vh]">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none w-full h-full z-0 opacity-20"
      />
    </div>
  );
}
