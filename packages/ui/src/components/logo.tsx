import { cn } from "@workspace/ui/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-[14px]", className)}>
      <div className="shrink-0 flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="text-primary"
        >
          {/* Nordic Brutalist grid mark - strict 0-radius geometry */}
          <rect x="0" y="0" width="10" height="10" fill="currentColor" />
          <rect x="14" y="0" width="10" height="10" stroke="currentColor" strokeWidth="2" />
          <rect x="0" y="14" width="10" height="10" stroke="currentColor" strokeWidth="2" />
          <rect x="14" y="14" width="10" height="10" fill="currentColor" />
        </svg>
      </div>
      <span className="font-heading font-extrabold tracking-[0.2em] text-[14px] uppercase text-foreground leading-none mt-[2px]">
        Hashtrade
      </span>
    </div>
  );
}
