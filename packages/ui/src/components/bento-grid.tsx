import { type ReactNode } from "react";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { Button } from "./button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden border border-border panel",
      className,
    )}
  >
    <div className="absolute inset-0 z-0">{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-8 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-8 w-8 origin-left transform-gpu text-primary transition-all duration-300 ease-in-out group-hover:scale-110 mb-4" />
      <h3 className="heading-section text-xl tracking-tighter">
        {name}
      </h3>
      <p className="max-w-xs text-muted-foreground body-text text-sm">
        {description}
      </p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button
        variant="outline"
        size="sm"
        asChild
        className="pointer-events-auto rounded-none border-primary text-primary hover:bg-primary/20 bg-background"
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-background/20 z-0" />
  </div>
);

export { BentoCard, BentoGrid };
