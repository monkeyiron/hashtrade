import React from 'react';
import { cn } from "@workspace/ui/lib/utils";
import { Container } from "./container";
import { Grid } from "./grid";

interface SplitHeroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  content: React.ReactNode;
  visual: React.ReactNode;
}

export function SplitHero({ content, visual, className, ...props }: SplitHeroProps) {
  return (
    <section className={cn("relative min-h-screen flex items-center pt-24 pb-16 overflow-visible w-full", className)} {...props}>
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center w-full">
          <div className="z-10 flex flex-col gap-6 w-full lg:max-w-[520px]">
            {content}
          </div>
          <div className="relative w-full">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 rounded-none mix-blend-overlay" />
            <div className="w-full">
              {visual}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
