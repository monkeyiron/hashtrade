import React from 'react';
import { cn } from "@workspace/ui/lib/utils";

interface IndexCardProps extends React.HTMLAttributes<HTMLDivElement> {
  index: string;
  title: string;
  description: string;
}

export function IndexCard({ index, title, description, className, ...props }: IndexCardProps) {
  return (
    <div className={cn("panel p-6 md:p-8 flex flex-col gap-8 group hover:border-primary hover:bg-surface-1 transition-all duration-300 rounded-none border border-border h-full", className)} {...props}>
      <div className="font-heading text-sm font-semibold tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
        {index}
      </div>
      <div className="space-y-4 mt-auto">
        <h3 className="heading-section text-xl md:text-2xl transition-colors">{title}</h3>
        <p className="body-text text-sm md:text-base leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
