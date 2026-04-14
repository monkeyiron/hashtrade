import React from 'react';
import { cn } from "@workspace/ui/lib/utils";

interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
}

export function PageLayout({ children, className, ...props }: PageLayoutProps) {
  return (
    <div className={cn("flex flex-col flex-1", className)} {...props}>
      {children}
    </div>
  );
}
