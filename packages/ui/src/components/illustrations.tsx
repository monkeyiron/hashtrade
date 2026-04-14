import { Fragment } from "react";
import { cn } from "@workspace/ui/lib/utils";

// ─── Image-based Isometric Illustrations ──────────────────────────────────────

interface IllustrationProps {
  className?: string;
  alt?: string;
}

function IsoImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      className={cn(
        "w-full h-full object-contain select-none pointer-events-none mix-blend-screen opacity-80",
        className
      )}
      role="img"
    />
  );
}

/** Trade logistics scene — shipping containers, crates, forklift */
export function IsoTradeLogistics({ className, alt = "Isometric trade logistics illustration" }: IllustrationProps) {
  return <IsoImage src="/illustrations/iso_trade_logistics.png" alt={alt} className={className} />;
}

/** Communication scene — desk, monitor, documents */
export function IsoCommunication({ className, alt = "Isometric communication illustration" }: IllustrationProps) {
  return <IsoImage src="/illustrations/iso_communication.png" alt={alt} className={className} />;
}

/** Founders / origin scene — three figures on a plinth */
export function IsoFounders({ className, alt = "Isometric founders and team illustration" }: IllustrationProps) {
  return <IsoImage src="/illustrations/iso_founders.png" alt={alt} className={className} />;
}

/** 404 lost scene — split roads, question mark block */
export function IsoLost({ className, alt = "Isometric 404 lost illustration" }: IllustrationProps) {
  return <IsoImage src="/illustrations/iso_lost.png" alt={alt} className={className} />;
}

/** Supply chain — factory to warehouse to container */
export function IsoSupplyChain({ className, alt = "Isometric supply chain illustration" }: IllustrationProps) {
  return <IsoImage src="/illustrations/iso_supply_chain.png" alt={alt} className={className} />;
}

// ─── Legacy SVG-based Illustrations ──────────────────────────────────────────

/** Strict Brutalist Isometric Server Node (No Curves) */
export function IsometricServerSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={cn("w-full h-full text-foreground/80 opacity-90", className)}
      role="img"
      aria-label="Isometric server infrastructure illustration"
    >
      <g transform="translate(400, 150) scale(1.5)">
        {/* Core Base Plinth */}
        <polygon points="0,0 100,50 0,100 -100,50" fill="currentColor" fillOpacity="0.02" />
        <polygon points="-100,50 0,100 0,120 -100,70" />
        <polygon points="0,100 100,50 100,70 0,120" />

        {/* Main Server Block 1 */}
        <g transform="translate(0, -30)">
          <polygon points="0,0 80,40 0,80 -80,40" fill="currentColor" fillOpacity="0.05" />
          <polygon points="-80,40 0,80 0,100 -80,60" />
          <polygon points="0,80 80,40 80,60 0,100" />
          <line x1="-60" y1="45" x2="-20" y2="65" strokeOpacity="0.5" />
          <line x1="-60" y1="52" x2="-20" y2="72" strokeOpacity="0.5" />
          <line x1="-60" y1="59" x2="-20" y2="79" strokeOpacity="0.5" />
        </g>

        {/* Main Server Block 2 */}
        <g transform="translate(0, -80)">
          <polygon points="0,0 80,40 0,80 -80,40" fill="currentColor" fillOpacity="0.05" />
          <polygon points="-80,40 0,80 0,100 -80,60" />
          <polygon points="0,80 80,40 80,60 0,100" />
          <line x1="20" y1="65" x2="60" y2="45" strokeOpacity="0.5" />
          <line x1="20" y1="72" x2="60" y2="52" strokeOpacity="0.5" />
          <line x1="20" y1="79" x2="60" y2="59" strokeOpacity="0.5" />
        </g>

        {/* Floating Data Nodes */}
        <polygon points="0,-140 20,-130 0,-120 -20,-130" fill="currentColor" />
        <line x1="0" y1="-120" x2="0" y2="-80" strokeDasharray="4 4" strokeOpacity="0.3" />
        <polygon points="-120,-20 -100,-10 -120,0 -140,-10" fill="currentColor" />
        <line x1="-120" y1="0" x2="-80" y2="20" strokeDasharray="4 4" strokeOpacity="0.3" />
        <polygon points="120,-20 140,-10 120,0 100,-10" fill="currentColor" />
        <line x1="120" y1="0" x2="80" y2="20" strokeDasharray="4 4" strokeOpacity="0.3" />

        {/* Orthogonal Network Floor */}
        <line x1="-150" y1="125" x2="-250" y2="175" strokeOpacity="0.2" />
        <line x1="150" y1="125" x2="250" y2="175" strokeOpacity="0.2" />
        <line x1="-100" y1="150" x2="0" y2="200" strokeOpacity="0.2" />
        <line x1="100" y1="150" x2="0" y2="200" strokeOpacity="0.2" />
        <line x1="0" y1="200" x2="0" y2="250" strokeOpacity="0.2" />
      </g>
    </svg>
  );
}

/** Brutalist Grid Matrix */
export function IsometricGridSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={cn("w-full h-full text-foreground/40", className)}
      role="img"
      aria-label="Isometric grid network illustration"
    >
      <g transform="translate(400, 200) scale(1.5)">
        {[...Array(10)].map((_, i) => (
          <Fragment key={`grid-${i}`}>
            <line x1={-150 + i * 30} y1={75 - i * 15} x2={150 + i * 30} y2={225 - i * 15} strokeOpacity="0.15" />
            <line x1={-150 + i * 30} y1={75 + i * 15} x2={150 + i * 30} y2={-75 + i * 15} strokeOpacity="0.15" />
          </Fragment>
        ))}
        {/* Sharp geometric obelisks */}
        <polygon points="-60,60 -30,75 -30,45 -60,30" fill="currentColor" fillOpacity="0.8" />
        <polygon points="-60,60 -60,110 -30,125 -30,75" />
        <polygon points="-60,110 -90,95 -90,45 -60,60" />
        <polygon points="60,0 90,15 90,-15 60,-30" fill="currentColor" fillOpacity="0.3" />
        <polygon points="60,0 60,80 90,95 90,15" />
        <polygon points="60,80 30,65 30,-15 60,0" />
      </g>
    </svg>
  );
}
