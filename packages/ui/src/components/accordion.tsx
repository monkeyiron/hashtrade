"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@workspace/ui/lib/utils";

export interface AccordionProps {
  items: {
    id: string;
    title: React.ReactNode;
    content: React.ReactNode;
  }[];
  className?: string;
  defaultOpenId?: string;
}

export function Accordion({ items, className, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = React.useState<string | null>(defaultOpenId ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn("flex flex-col", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border-b border-border/40 last:border-b-0">
            <button
              onClick={() => toggle(item.id)}
              className={cn(
                "w-full flex items-center justify-between py-6 px-2 hover:bg-card/20 transition-colors text-left outline-none group mt-2",
                isOpen && "bg-card/10"
              )}
              aria-expanded={isOpen}
            >
              <div className="font-heading font-medium text-lg md:text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </div>
              <div className="shrink-0 ml-4 relative flex items-center justify-center w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors">
                <span className="absolute w-full h-[2px] bg-current transition-transform duration-300" />
                <span
                  className={cn(
                    "absolute w-[2px] h-full bg-current transition-transform duration-300",
                    isOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
                  )}
                />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-2 pt-2 pb-8 text-muted-foreground font-sans text-base leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
