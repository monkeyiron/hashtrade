"use client";

import React, { useRef } from "react";
import { motion, useInView, type HTMLMotionProps } from "framer-motion";
import { cn } from "@workspace/ui/lib/utils";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: string | React.ReactNode;
  delay?: number;
  cascade?: boolean;
  variant?: "slide-up" | "slide-left" | "slide-right" | "scale-up" | "blur-in";
}

export function Reveal({ children, className, delay = 0, cascade = false, variant = "slide-up", ...props }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const variants = {
    "slide-up": { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
    "slide-left": { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
    "slide-right": { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
    "scale-up": { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
    "blur-in": { hidden: { opacity: 0, filter: "blur(10px)", y: 10 }, visible: { opacity: 1, filter: "blur(0px)", y: 0 } },
  };

  if (typeof children === "string" && cascade) {
    return (
      <motion.div ref={ref} className={cn("inline-block", className)} {...props}>
        <motion.span
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.03, delayChildren: delay }}
          aria-hidden="true"
        >
          {children.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
              }}
              className="inline-block whitespace-pre"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
        <span className="sr-only">{children}</span>
        </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
