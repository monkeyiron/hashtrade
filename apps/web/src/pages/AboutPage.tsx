
import { PageLayout } from "@workspace/ui/components/page-layout";
import { ScrollReveal as Reveal } from "@workspace/ui/components/scroll-reveal";
import { Button } from "@workspace/ui/components/button";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "@workspace/ui/hooks/use-document-title";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IsoFounders } from "@workspace/ui/components/illustrations";

const storyChapters = {
  origin: {
    tag: "Origin",
    header: "Trade should be accessible, not complicated",
    p1: "Most businesses in the import-export space are either too large to care about smaller volumes, or too opaque to build trust with. We started Hashtrade because we believe there is room for a company that begins honestly, operates carefully, and grows through experience — not hype.",
    p2: "We are not a large logistics company. We don't present ourselves as a major market player. We are a bootstrap startup, created with limited resources but with a clear purpose."
  },
  approach: {
    tag: "Approach",
    header: "Lean, focused, and learning every day",
    p1: "We work with selected products, stay lean, and focus on learning, improving, and growing responsibly. Every day brings new lessons, new challenges, and new opportunities to improve.",
    p2: "Rather than exaggerating our scale or promising more than we can deliver, we prefer to remain transparent about where we are today. Our use of AI tools is part of that modern, practical mindset — helping us stay organized while we continue to learn."
  },
  vision: {
    tag: "Vision",
    header: "Growing one careful step at a time",
    p1: "We don't have a grand five-year plan filled with inflated projections. We have a commitment to building something real — one trade at a time, one relationship at a time, one lesson at a time.",
    p2: "Our goal is to become a trusted, reliable partner in the import-export space — known not for our size, but for our consistency, our transparency, and our care."
  }
};

export function AboutPage() {
  useDocumentTitle("About Us", "We build with honesty first. A self-funded import-export startup from Imphal and New Delhi.");
  const [activeChapter, setActiveChapter] = useState<keyof typeof storyChapters>('origin');

  return (
    <PageLayout>
      <main className="w-full min-h-screen bg-background pb-0 pt-20">
        
        {/* ================================================
            PAGE HERO
            ================================================ */}
        <section className="w-full px-6 lg:px-12 py-16 lg:py-[100px] max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <Reveal>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[11px] md:text-[10.5px] uppercase tracking-[0.16em] text-primary font-medium mb-5">
                  <span className="w-4 h-px bg-primary" /> About Hashtrade
                </div>
                <h1 className="heading-display font-extrabold leading-[1.05] tracking-tight">
                  We build<br/>with <span className="text-primary italic">honesty</span><br/>first.
                </h1>
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div className="pb-2">
                <p className="text-[15px] text-muted-foreground font-light leading-[1.8] mb-8 border-l-2 border-primary/40 pl-4">
                  A self-funded import-export startup from Imphal and New Delhi — working carefully, learning constantly, and growing without pretense.
                </p>
                
                <div className="grid grid-cols-3 gap-px bg-border border border-border">
                  <div className="bg-card p-6 px-5 transition-colors hover:bg-surface-1">
                    <div className="font-heading text-[28px] font-extrabold text-primary leading-none mb-[6px]">3</div>
                    <div className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground">Founders</div>
                  </div>
                  <div className="bg-card p-6 px-5 transition-colors hover:bg-surface-1">
                    <div className="font-heading text-[28px] font-extrabold text-primary leading-none mb-[6px]">2</div>
                    <div className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground">Cities</div>
                  </div>
                  <div className="bg-card p-6 px-5 transition-colors hover:bg-surface-1">
                    <div className="font-heading text-[28px] font-extrabold text-primary leading-none mb-[6px]">0</div>
                    <div className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground">Outside funding</div>
                  </div>
                </div>
              </div>
            </Reveal>
           
            {/* Founders illustration accent */}
            <Reveal delay={0.15} className="hidden lg:flex items-end justify-center">
              <div className="w-full max-w-[320px] h-[260px] relative">
                <IsoFounders className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </Reveal>
          </div>
        </section>

        <hr className="border-t border-border m-0 max-w-[calc(100%-48px)] md:max-w-[calc(100%-96px)] mx-auto" />

        {/* ================================================
            STORY SECTION (INTERACTIVE)
            ================================================ */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto py-16 md:py-20 lg:py-24 px-6 lg:px-12">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] border border-border gap-px bg-border">
                {/* Sidebar */}
                <div className="bg-background p-6 md:p-10 lg:p-12">
                  <p className="text-[11px] md:text-[10px] tracking-[0.16em] uppercase text-muted-foreground mb-8">Our story</p>
                  <div className="flex flex-col">
                    {(Object.keys(storyChapters) as Array<keyof typeof storyChapters>).map((key) => {
                      const isActive = activeChapter === key;
                      return (
                        <button
                          key={key}
                          onClick={() => setActiveChapter(key)}
                          className="group flex gap-4 p-5 py-6 border-b border-border/50 bg-background hover:bg-surface-1 transition-colors text-left focus:outline-none last:border-b-0"
                        >
                          <div className={`w-[8px] h-[8px] rounded-full border shrink-0 mt-1 transition-colors duration-300 ${isActive ? 'bg-primary border-primary' : 'border-muted group-hover:bg-primary group-hover:border-primary'}`} />
                          <div className="flex flex-col">
                            <span className={`font-heading text-[12px] tracking-[0.1em] mb-1 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`}>
                              {key.charAt(0).toUpperCase() + key.slice(1)}
                            </span>
                            <span className={`text-[13px] font-normal transition-colors duration-300 ${isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                              {key === 'origin' ? 'Why Hashtrade exists' : key === 'approach' ? 'How we operate' : 'Where we\'re going'}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Main View */}
                <div className="bg-background p-6 md:p-10 lg:p-[64px] min-h-[400px] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeChapter}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col"
                    >
                      <p className="text-[11px] md:text-[10px] tracking-[0.15em] uppercase text-primary mb-4">{storyChapters[activeChapter].tag}</p>
                      <h2 className="heading-section font-bold tracking-tight leading-[1.2] mb-6">
                        {storyChapters[activeChapter].header}
                      </h2>
                      <p className="text-[14px] text-muted-foreground font-light leading-[1.8] mb-[14px]">
                        {storyChapters[activeChapter].p1}
                      </p>
                      <p className="text-[14px] text-muted-foreground font-light leading-[1.8]">
                        {storyChapters[activeChapter].p2}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <hr className="border-t border-border m-0 max-w-[calc(100%-48px)] md:max-w-[calc(100%-96px)] mx-auto" />

        {/* ================================================
            VALUES
            ================================================ */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto py-16 md:py-24 lg:py-28 px-6 lg:px-12">
            <Reveal>
              <div className="mb-14">
                <div className="flex items-center gap-2 text-[11px] md:text-[10.5px] uppercase tracking-[0.16em] text-primary font-medium mb-5">
                  <span className="w-4 h-px bg-primary" /> What we stand for
                </div>
                <h2 className="heading-display font-bold tracking-tight leading-[1.15]">
                  Four principles,<br/>no exceptions
                </h2>
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
                {[
                  { num: "01 — Honesty", title: "Transparent by default", desc: "We don't overstate our capabilities or understate our challenges. What you see is what we are — a small team building carefully and communicating clearly at every step." },
                  { num: "02 — Care", title: "Quality over volume", desc: "We would rather do fewer things well than many things poorly. Every product we source, every trade we coordinate — handled with the attention it deserves." },
                  { num: "03 — Responsibility", title: "Own every outcome", desc: "No outside investors means no one to blame. Every decision is ours, every step is earned, and every mistake is a lesson we take seriously and fix ourselves." },
                  { num: "04 — Growth", title: "Learn before scaling", desc: "We resist the urge to grow faster than our knowledge allows. Sustainable growth comes from mastering fundamentals — we build the foundation before adding floors." }
                ].map((val, idx) => (
                  <div key={idx} className="bg-card p-6 md:p-10 md:py-12 transition-colors hover:bg-surface-1 h-full">
                    <p className="font-heading text-[11px] tracking-[0.14em] uppercase text-primary mb-4">{val.num}</p>
                    <h3 className="font-heading text-[18px] font-bold tracking-tight mb-3">{val.title}</h3>
                    <p className="text-[13.5px] text-muted-foreground font-light leading-[1.75]">{val.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <hr className="border-t border-border m-0 max-w-[calc(100%-48px)] md:max-w-[calc(100%-96px)] mx-auto" />

        {/* ================================================
            TEAM
            ================================================ */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto py-16 md:py-24 md:pb-32 px-6 lg:px-12">
            <Reveal>
              <div className="mb-14">
                <div className="flex items-center gap-2 text-[11px] md:text-[10.5px] uppercase tracking-[0.16em] text-primary font-medium mb-5">
                  <span className="w-4 h-px bg-primary" /> The team
                </div>
                <h2 className="heading-display font-bold tracking-tight leading-[1.15] mb-4">
                  Three founders,<br/>one shared mission
                </h2>
                <p className="text-[14px] text-muted-foreground font-light max-w-sm leading-[1.7]">
                   Young entrepreneurs from Imphal, building with their own resources, effort, and commitment.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
                {[
                  { 
                    avatar: "/avatars/founder_dickson_one_1776114428697.png", 
                    name: "Dickson One", 
                    role: "Founder", 
                    desc: "Leads the core vision and operational strategy. Focuses on bringing structured logic and transparency to complex trade pipelines.", 
                    loc: "Imphal, Manipur" 
                  },
                  { 
                    avatar: "/avatars/founder_dickson_two_1776114441739.png", 
                    name: "Dickson Two", 
                    role: "Co-founder", 
                    desc: "Manages primary sourcing architecture. Specializes in building rigorous supplier relationships and maintaining strict quality parameters.", 
                    loc: "Imphal, Manipur" 
                  },
                  { 
                    avatar: "/avatars/founder_dickson_three_1776114621063.png", 
                    name: "Dickson Three", 
                    role: "COO", 
                    desc: "Drives day-to-day execution. Ensures that our internal processes scale responsibly without compromising our fundamental honesty.", 
                    loc: "Imphal, Manipur" 
                  }
                ].map((person, idx) => (
                  <div key={idx} className="group bg-card p-6 md:p-9 md:py-10 transition-colors hover:bg-surface-1 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-[90px] h-[110px] mb-8 border border-border group-hover:border-primary/50 transition-colors overflow-hidden bg-surface-1 relative">
                        <img 
                          src={person.avatar} 
                          alt={person.name} 
                          className="w-full h-full object-cover filter grayscale contrast-[1.1] transition-transform duration-[800ms] ease-out group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-heading text-[16px] font-bold tracking-tight mb-1">{person.name}</h3>
                      <p className="text-[11.5px] tracking-[0.1em] uppercase text-primary mb-5">{person.role}</p>
                      <p className="text-[13px] text-muted-foreground font-light leading-[1.7]">{person.desc}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 text-[11px] text-muted-foreground tracking-[0.08em] uppercase mt-8 font-medium">
                      <span className="w-1 h-1 rounded-none bg-primary shrink-0" /> {person.loc}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================================================
            CTA STRIP
            ================================================ */}
        <section className="w-full border-t border-border bg-card">
          <div className="max-w-7xl mx-auto py-12 md:py-16 px-6 lg:px-12">
            <Reveal>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                <h2 className="heading-section font-bold tracking-tight">
                  Want to work<br/>with <span className="text-primary italic">honest people?</span>
                </h2>
                <div className="flex flex-wrap items-center gap-4 shrink-0">
                  <Button asChild variant="outline" className="h-12 px-6 font-medium whitespace-nowrap bg-transparent hover:bg-surface-1">
                    <Link to="/contact">
                      Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild className="h-12 px-6 font-medium bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
                    <Link to="/services">
                      View services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        
      </main>
    </PageLayout>
  );
}
