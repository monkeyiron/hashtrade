"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import { cn } from "@workspace/ui/lib/utils";

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
  intensity?: number;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function ParallaxLayer({ children, offset = 50, className, intensity = 1 }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useParallax(scrollYProgress, offset * intensity);

  return (
    <div ref={ref} className={cn("relative overflow-hidden w-full", className)}>
      <motion.div style={{ y }} className="w-full h-full relative">
        {children}
      </motion.div>
    </div>
  );
}
