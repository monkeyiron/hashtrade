"use client";

import { PageLayout } from "./page-layout";
import { Button } from "./button";
import { Globe, ArrowRight, Users, Sparkles, Target, Settings, GitBranch, Cpu } from "lucide-react";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Reveal } from "./reveal";
import { Marquee } from "./marquee";
import TextMatrixRain from "./text-matrix-rain";

const HeroLottie = () => {
  const [animationData, setAnimationData] = useState<any>(null);
  useEffect(() => {
    fetch('/lottie/hero.json')
      .then(res => res.json())
      .then(setAnimationData)
      .catch(console.error);
  }, []);
  if (!animationData) return <div className="aspect-square w-full max-w-md mx-auto bg-surface-1 animate-pulse" />;
  return <Lottie animationData={animationData} loop={true} className="w-full max-w-md mx-auto opacity-90" aria-hidden="true" />;
};

export const VoyageScroller = ({
  LinkComponent = "a",
}: {
  LinkComponent?: React.ElementType<any>;
} = {}) => {
  return (
    <PageLayout>
      <main className="w-full min-h-screen bg-background">
        
        {/* ================================================
            TICKER
            ================================================ */}
        <div className="w-full border-b border-border bg-surface-1 py-3 overflow-hidden mt-16 md:mt-20">
          <Marquee className="[--duration:30s] text-muted-foreground font-heading text-[11.5px] uppercase tracking-[0.12em]">
            <span className="inline-flex items-center"><span className="w-[3px] h-[3px] rounded-full bg-primary mr-2" />Product selection</span>
            <span className="mx-6 text-transparent">.</span>
            <span className="inline-flex items-center"><span className="w-[3px] h-[3px] rounded-full bg-primary mr-2" />Import-export</span>
            <span className="mx-6 text-transparent">.</span>
            <span className="inline-flex items-center"><span className="w-[3px] h-[3px] rounded-full bg-primary mr-2" />Hardware sourcing</span>
            <span className="mx-6 text-transparent">.</span>
            <span className="inline-flex items-center"><span className="w-[3px] h-[3px] rounded-full bg-primary mr-2" />Electronics</span>
            <span className="mx-6 text-transparent">.</span>
            <span className="inline-flex items-center"><span className="w-[3px] h-[3px] rounded-full bg-primary mr-2" />Trade coordination</span>
            <span className="mx-6 text-transparent">.</span>
          </Marquee>
        </div>

        {/* ================================================
            HERO
            ================================================ */}
        <section className="min-h-[calc(100vh-100px)] py-20 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <Reveal className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-primary font-medium">
              <span className="w-5 h-px bg-primary" /> Imphal & New Delhi
            </div>
            
            <h1 className="heading-display font-extrabold leading-[1.05] tracking-tight flex flex-col items-start">
              <TextMatrixRain className="inline-block" duration={1.5}>Build.</TextMatrixRain>
              <TextMatrixRain className="inline-block text-primary" duration={2.0}>Trade.</TextMatrixRain>
              <TextMatrixRain className="inline-block" duration={2.5}>Grow.</TextMatrixRain>
            </h1>
            
            <p className="body-large text-muted-foreground max-w-sm leading-[1.7] border-l-2 border-primary/40 pl-4 font-light">
              Honest import-export, built one careful step at a time.
            </p>
            
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <Button asChild size="lg" variant="outline" className="h-12 px-6 font-medium bg-transparent hover:bg-surface-2 whitespace-nowrap">
                <LinkComponent href="/contact">
                  Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
                </LinkComponent>
              </Button>
              <span className="text-[12px] text-muted-foreground whitespace-nowrap hidden sm:inline-block">Self-funded · No hype</span>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="flex items-center justify-center relative min-h-[400px]">
             {/* Retained Lottie animation per requirements */}
             <HeroLottie />
             
             <span className="absolute top-4 right-4 text-[10px] tracking-[0.1em] uppercase text-muted-foreground hidden sm:block">Est. 2026</span>
             <span className="absolute bottom-4 left-4 text-[10px] tracking-[0.1em] uppercase text-muted-foreground hidden sm:block">Bootstrapped</span>
          </Reveal>
        </section>

        <hr className="border-t border-border m-0 w-full" />

        {/* ================================================
            WHY WE EXIST
            ================================================ */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto py-20 px-6 lg:px-12">
            <Reveal>
              <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.16em] text-primary font-medium mb-6">
                 <span className="w-4 h-px bg-primary" /> Why we exist
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-[5fr_4fr_4fr] border border-border">
                 <div className="p-10 lg:p-12 border-b md:border-b-0 md:border-r border-border bg-card">
                    <h2 className="heading-section font-bold leading-[1.15]">Trade should be accessible, not complicated</h2>
                 </div>
                 <div className="p-10 lg:p-12 border-b md:border-b-0 md:border-r border-border bg-background">
                    <p className="text-[14px] text-muted-foreground font-light leading-[1.75]">Most import-export businesses are either too large to care about small volumes, or too opaque to trust. We started Hashtrade to fill that gap — beginning honestly, operating carefully, growing through experience.</p>
                 </div>
                 <div className="p-10 lg:p-12 bg-background flex flex-col justify-between">
                    <p className="text-[14px] text-muted-foreground font-light leading-[1.75] mb-4">We are not a large logistics company. We're a bootstrap startup with limited resources and a clear purpose.</p>
                    <p className="text-[14px] text-muted-foreground font-light leading-[1.75]">Every day brings new lessons. We prefer to stay transparent about where we are — not where we wish we were.</p>
                 </div>
              </div>
            </Reveal>
          </div>
        </section>

        <hr className="border-t border-border m-0 w-full" />

        {/* ================================================
            SERVICES
            ================================================ */}
        <section className="max-w-7xl mx-auto py-24 px-6 lg:px-12">
          <Reveal>
            <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.16em] text-primary font-medium mb-6">
              <span className="w-4 h-px bg-primary" /> Services
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end mb-14">
              <h2 className="heading-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.1]">Focused<br/>trade support</h2>
              <p className="text-[14px] text-muted-foreground font-light leading-[1.7] max-w-md pb-2">We build around a focused set of import-export activities — starting with what we know, expanding carefully.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            <Reveal delay={0.2} className="h-full">
              <div className="p-10 lg:p-12 bg-card hover:bg-surface-1 transition-colors h-full flex flex-col">
                 <div className="w-9 h-9 mb-6 flex items-center justify-center border border-primary/40 text-primary bg-background">
                    <Globe className="w-4 h-4" />
                 </div>
                 <h3 className="font-heading text-[17px] font-semibold tracking-tight mb-3">Sourcing support</h3>
                 <p className="text-[13.5px] text-muted-foreground font-light leading-[1.7]">Identifying products, exploring supply options, and understanding market needs — practical sourcing matched to our current capabilities.</p>
              </div>
            </Reveal>

            <Reveal delay={0.3} className="h-full">
              <div className="p-10 lg:p-12 bg-card hover:bg-surface-1 transition-colors h-full flex flex-col">
                 <div className="w-9 h-9 mb-6 flex items-center justify-center border border-primary/40 text-primary bg-background">
                    <GitBranch className="w-4 h-4" />
                 </div>
                 <h3 className="font-heading text-[17px] font-semibold tracking-tight mb-3">Trade coordination</h3>
                 <p className="text-[13.5px] text-muted-foreground font-light leading-[1.7]">Cross-market communication and logistics, handled with care. Responsibility and clear communication over sheer volume.</p>
              </div>
            </Reveal>

            <Reveal delay={0.4} className="h-full">
              <div className="p-10 lg:p-12 bg-card hover:bg-surface-1 transition-colors h-full flex flex-col">
                 <div className="w-9 h-9 mb-6 flex items-center justify-center border border-primary/40 text-primary bg-background">
                    <Cpu className="w-4 h-4" />
                 </div>
                 <h3 className="font-heading text-[17px] font-semibold tracking-tight mb-3">Selected products</h3>
                 <p className="text-[13.5px] text-muted-foreground font-light leading-[1.7]">A carefully chosen range of electronics and hardware components — focused scope means genuine knowledge and quality control.</p>
              </div>
            </Reveal>

            <Reveal delay={0.5} className="h-full">
              <div className="p-10 lg:p-12 bg-card hover:bg-surface-1 transition-colors h-full flex flex-col">
                 <div className="w-9 h-9 mb-6 flex items-center justify-center border border-primary/40 text-primary bg-background">
                    <Settings className="w-4 h-4" />
                 </div>
                 <h3 className="font-heading text-[17px] font-semibold tracking-tight mb-3">Modern workflow</h3>
                 <p className="text-[13.5px] text-muted-foreground font-light leading-[1.7]">AI tools and structured processes keep us organized and efficient. Technology supports our work — it does not replace careful human judgment.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <hr className="border-t border-border m-0 w-full" />

        {/* ================================================
            FOUNDATIONS
            ================================================ */}
        <section className="w-full mt-10">
          <div className="max-w-7xl mx-auto py-24 px-6 lg:px-12">
            <Reveal>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 text-[10.5px] uppercase tracking-[0.16em] text-primary font-medium mb-5">
                  <span className="w-4 h-px bg-primary" /> Built on <span className="w-4 h-px bg-primary" /> 
                </div>
                <h2 className="heading-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.1] mb-4">Honest foundations</h2>
                <p className="text-[14px] text-muted-foreground font-light">Consistent, thoughtful, and real — not oversized.</p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
              <Reveal delay={0.1} className="h-full">
                <div className="p-10 lg:p-12 bg-card hover:bg-surface-1 transition-colors text-center h-full flex flex-col items-center">
                  <div className="w-[44px] h-[44px] mb-5 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shadow-none">
                     <Users className="w-[18px] h-[18px]" />
                  </div>
                  <div className="font-heading text-[11px] tracking-[0.14em] uppercase text-primary mb-3">01</div>
                  <h3 className="font-heading text-[18px] font-bold tracking-tight mb-3">Founded by three</h3>
                  <p className="text-[13px] text-muted-foreground font-light leading-[1.7]">Young entrepreneurs from Imphal, building with their own resources, effort, and commitment.</p>
                </div>
              </Reveal>

              <Reveal delay={0.2} className="h-full">
                <div className="p-10 lg:p-12 bg-card hover:bg-surface-1 transition-colors text-center h-full flex flex-col items-center">
                  <div className="w-[44px] h-[44px] mb-5 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shadow-none">
                     <Sparkles className="w-[18px] h-[18px]" />
                  </div>
                  <div className="font-heading text-[11px] tracking-[0.14em] uppercase text-primary mb-3">02</div>
                  <h3 className="font-heading text-[18px] font-bold tracking-tight mb-3">Self-funded</h3>
                  <p className="text-[13px] text-muted-foreground font-light leading-[1.7]">Fully bootstrapped. No external investment. Every decision is ours, every step is earned.</p>
                </div>
              </Reveal>

              <Reveal delay={0.3} className="h-full">
                <div className="p-10 lg:p-12 bg-card hover:bg-surface-1 transition-colors text-center h-full flex flex-col items-center">
                  <div className="w-[44px] h-[44px] mb-5 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shadow-none">
                     <Target className="w-[18px] h-[18px]" />
                  </div>
                  <div className="font-heading text-[11px] tracking-[0.14em] uppercase text-primary mb-3">03</div>
                  <h3 className="font-heading text-[18px] font-bold tracking-tight mb-3">AI-assisted workflow</h3>
                  <p className="text-[13px] text-muted-foreground font-light leading-[1.7]">Modern AI tools for research, planning, and communication — helping a small team work smarter.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <hr className="border-t border-border m-0 w-full" />

        {/* ================================================
            OUR APPROACH (TEAM)
            ================================================ */}
        <section className="max-w-7xl mx-auto py-20 px-6 lg:px-12 bg-background">
          <Reveal>
            <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.16em] text-primary font-medium mb-6">
              <span className="w-4 h-px bg-primary" /> Our approach
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 border border-border">
              <div className="p-16 border-b lg:border-b-0 lg:border-r border-border flex items-center justify-center bg-surface-1 min-h-[380px] overflow-hidden relative">
                <svg viewBox="0 0 220 220" fill="none" className="w-[220px] h-[220px] opacity-60">
                  <rect x="60" y="60" width="100" height="100" rx="4" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="0.75"/>
                  <rect x="80" y="80" width="60" height="60" rx="2" stroke="var(--color-primary)" strokeOpacity="0.5" strokeWidth="0.75"/>
                  <rect x="95" y="95" width="30" height="30" rx="1" fill="var(--color-primary)" fillOpacity="0.1" stroke="var(--color-primary)" strokeOpacity="0.6" strokeWidth="0.75"/>
                  <line x1="110" y1="60" x2="110" y2="30" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="0.75"/>
                  <line x1="110" y1="160" x2="110" y2="190" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="0.75"/>
                  <line x1="60" y1="110" x2="30" y2="110" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="0.75"/>
                  <line x1="160" y1="110" x2="190" y2="110" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="0.75"/>
                  <circle cx="110" cy="30" r="3" fill="var(--color-primary)" fillOpacity="0.4"/>
                  <circle cx="110" cy="190" r="3" fill="var(--color-primary)" fillOpacity="0.4"/>
                  <circle cx="30" cy="110" r="3" fill="var(--color-primary)" fillOpacity="0.4"/>
                  <circle cx="190" cy="110" r="3" fill="var(--color-primary)" fillOpacity="0.4"/>
                  <line x1="60" y1="60" x2="40" y2="40" stroke="var(--color-primary)" strokeOpacity="0.2" strokeWidth="0.75"/>
                  <line x1="160" y1="60" x2="180" y2="40" stroke="var(--color-primary)" strokeOpacity="0.2" strokeWidth="0.75"/>
                  <line x1="60" y1="160" x2="40" y2="180" stroke="var(--color-primary)" strokeOpacity="0.2" strokeWidth="0.75"/>
                  <line x1="160" y1="160" x2="180" y2="180" stroke="var(--color-primary)" strokeOpacity="0.2" strokeWidth="0.75"/>
                  <circle cx="110" cy="110" r="4" fill="var(--color-primary)" fillOpacity="0.7"/>
                  <rect x="40" y="25" width="12" height="12" rx="1" stroke="var(--color-primary)" strokeOpacity="0.25" strokeWidth="0.75"/>
                  <rect x="168" y="25" width="12" height="12" rx="1" stroke="var(--color-primary)" strokeOpacity="0.25" strokeWidth="0.75"/>
                  <rect x="40" y="183" width="12" height="12" rx="1" stroke="var(--color-primary)" strokeOpacity="0.25" strokeWidth="0.75"/>
                  <rect x="168" y="183" width="12" height="12" rx="1" stroke="var(--color-primary)" strokeOpacity="0.25" strokeWidth="0.75"/>
                </svg>
              </div>
              <div className="p-12 lg:p-[60px] bg-background">
                <h2 className="heading-section text-[clamp(1.625rem,3vw,2.375rem)] font-bold leading-[1.2] mb-6">A young team,<br/>a clean approach</h2>
                <p className="text-[13.5px] text-muted-foreground font-light leading-[1.75] mb-4">
                  Hashtrade is led by a small team of young entrepreneurs building from the ground up. No outside investment, no pretense of an established network we're still trying to build.
                </p>
                <p className="text-[13.5px] text-muted-foreground font-light leading-[1.75]">
                  What we have is focus, honesty, and the willingness to work through the process carefully. AI tools are part of that modern, practical mindset — helping us stay organized while we continue to learn.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ================================================
            CTA
            ================================================ */}
        <section className="w-full pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Reveal>
              <div className="bg-card border border-border p-14 lg:p-[72px] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-center">
                <div>
                  <h2 className="heading-section text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.15] mb-4">Ready to start<br/>a conversation?</h2>
                  <p className="text-[14px] text-muted-foreground font-light max-w-[420px]">Whether you're interested in early-stage import-export work, our selected product focus, or future possibilities — we'd be glad to hear from you.</p>
                </div>
                <div>
                  <Button asChild className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-[13.5px] tracking-[0.02em] whitespace-nowrap">
                    <LinkComponent href="/contact">
                      Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                    </LinkComponent>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
    </PageLayout>
  );
};
