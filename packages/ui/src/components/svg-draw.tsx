import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SvgDrawProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

export function SvgDraw({ children, className, duration = 1.5, delay = 0 }: SvgDrawProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Safety check for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const elements = containerRef.current.querySelectorAll("path, line, polyline, polygon, rect, circle, ellipse");
    
    elements.forEach((el) => {
      // SVGs must have stroke for this to work visually
      const stroke = window.getComputedStyle(el).stroke;
      if (stroke === "none" && !el.getAttribute("stroke")) return;

      const path = el as SVGGeometryElement;
      // getTotalLength is not available on all SVG elements in all browsers, provide fallback
      let length = 0;
      if (path.getTotalLength) {
        length = path.getTotalLength();
      } else {
        // Fallback rough estimate for shapes
        const box = path.getBoundingClientRect();
        length = (box.width + box.height) * 2;
      }

      gsap.set(path, { 
        strokeDasharray: length, 
        strokeDashoffset: length,
        opacity: 1 // ensure it's visible if it was hidden
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: duration,
        ease: "power2.out",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true
        }
      });
    });

  }, [duration, delay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
