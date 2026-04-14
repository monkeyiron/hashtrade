"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@workspace/ui/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const AnimatedSpan = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.span
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className={cn("block", className)}
  >
    {children}
  </motion.span>
);

export const TypingAnimation = ({ children, delay = 0, className }: { children: string; delay?: number; className?: string }) => {
  const [displayed, setDisplayed] = useState("");
  
  useGSAP(() => {
    const text = children;
    let progress = 0;
    
    const timeout = gsap.delayedCall(delay / 1000, () => {
      // Internal execution interval handled cleanly inside the GSAP bounds
      const interval = setInterval(() => {
        progress++;
        setDisplayed(text.substring(0, progress));
        if (progress >= text.length) clearInterval(interval);
      }, 30);
      
      return () => clearInterval(interval);
    });
    
    return () => timeout.kill();
  }, [children, delay]);

  return (
    <>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" className={cn("block font-mono", className)}>{displayed}</span>
    </>
  );
};

export const Terminal = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [iteration, setIteration] = useState(0);

  let currentDelay = 0;
  const childrenWithDelay = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const delayToPass = currentDelay;
      const element = child as React.ReactElement<any>;
      
      // Default step times: typing takes exactly string length * 30ms + 200ms pause. 
      // Spans take static 300ms pause.
      const stepDuration = element.type === TypingAnimation && typeof element.props.children === "string" 
        ? (element.props.children.length * 30) + 200 
        : 300; 
        
      currentDelay += stepDuration;
      return React.cloneElement(element, { delay: delayToPass });
    }
    return child;
  });

  const finalBufferDelay = currentDelay + 2000; // Allow 2 seconds of resting state before loop purges

  useGSAP(() => {
    const masterLoop = gsap.delayedCall(finalBufferDelay / 1000, () => {
      setIteration(prev => prev + 1);
    });
    return () => masterLoop.kill();
  }, [iteration, finalBufferDelay]);

  return (
    <div className={cn("w-full max-w-3xl mx-auto border border-border bg-card flex flex-col shadow-2xl relative", className)}>
      <div className="flex items-center px-4 py-2 border-b border-border bg-muted/50">
        <span className="font-mono text-xs uppercase text-muted-foreground tracking-widest font-bold">Hashtrade // System_Ops</span>
      </div>
      {/* The key property forces a complete deep unmount of children, letting Framer and GSAP auto-restart */}
      <div key={iteration} className="p-6 font-mono text-sm leading-relaxed flex flex-col gap-2 overflow-hidden text-foreground">
        {childrenWithDelay}
      </div>
    </div>
  );
};
