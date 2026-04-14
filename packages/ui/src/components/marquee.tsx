import { cn } from "@workspace/ui/lib/utils";
import React from "react";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:2rem] [gap:var(--gap)] select-none",
        className
      )}
    >
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row",
              reverse ? "[animation-direction:reverse]" : "",
              pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
