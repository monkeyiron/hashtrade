import React from 'react';
import { cn } from "@workspace/ui/lib/utils";
import { Container } from "./container";
import { Grid } from "./grid";

interface FeatureGridProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
}

export function FeatureGrid({ title, description, children, className, ...props }: FeatureGridProps) {
  return (
    <section className={cn("py-24", className)} {...props}>
      <Container>
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row gap-8 justify-between items-start md:items-end">
          <h2 className="heading-display text-3xl md:text-5xl max-w-2xl">{title}</h2>
          {description && (
            <p className="body-text max-w-sm">
              {description}
            </p>
          )}
        </div>
        <Grid className="gap-6">
          {children}
        </Grid>
      </Container>
    </section>
  );
}
