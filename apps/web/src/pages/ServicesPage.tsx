
import { PageLayout } from "@workspace/ui/components/page-layout";
import { ScrollReveal as Reveal } from "@workspace/ui/components/scroll-reveal";
import { Button } from "@workspace/ui/components/button";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "@workspace/ui/hooks/use-document-title";
import { ArrowRight, Globe, GitBranch, ShieldCheck, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { IsoSupplyChain } from "@workspace/ui/components/illustrations";

export function ServicesPage() {
  useDocumentTitle("Services", "Focused trade support that fits your needs.");
  return (
    <PageLayout>
      <main className="w-full min-h-screen bg-background pb-0 pt-20">
        
        {/* ================================================
            HERO & PROCESS STRIP
            ================================================ */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto pt-[100px] px-6 lg:px-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end mb-[72px]">
              <Reveal>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.16em] text-primary font-medium mb-5">
                    <span className="w-4 h-px bg-primary" /> What we do
                  </div>
                  <h1 className="heading-display font-extrabold leading-[1.0] tracking-tight">
                    Focused<br/>trade <span className="text-primary italic">support</span><br/>that fits.
                  </h1>
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <div>
                  <p className="text-[15px] text-muted-foreground font-light leading-[1.8] border-l-2 border-primary/40 pl-4 max-w-sm">
                    We build around a focused set of import-export activities — not broad, high-volume operations. We start with what we know and expand carefully.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Isometric illustration accent */}
            <Reveal delay={0.15} className="hidden lg:block">
              <div className="w-full flex justify-center items-center h-[200px] lg:h-[240px] relative overflow-hidden border border-border/30 bg-surface-1/30">
                <IsoSupplyChain className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </Reveal>

            <Reveal delay={0.2} className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
                {/* 4 Step Process */}
                {[
                  { num: "01", label: "Identify products" },
                  { num: "02", label: "Source & verify" },
                  { num: "03", label: "Coordinate trade" },
                  { num: "04", label: "Deliver & review" }
                ].map((step, idx) => (
                  <div key={idx} className="bg-card p-6 py-7 flex flex-col xl:flex-row xl:items-center gap-3 xl:gap-4 transition-colors hover:bg-surface-1">
                    <span className="font-heading text-[11px] tracking-[0.12em] text-primary font-bold">{step.num}</span>
                    <span className="text-[12.5px] text-muted-foreground font-medium">{step.label}</span>
                    {idx < 3 && <ArrowRight className="hidden xl:block ml-auto text-muted w-3 h-3 opacity-50" />}
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </section>

        <hr className="border-t border-border m-0 max-w-[calc(100%-48px)] md:max-w-[calc(100%-96px)] mx-auto mt-20" />

        {/* ================================================
            MAIN SERVICES
            ================================================ */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto py-16 md:py-24 lg:py-28 px-6 lg:px-12">
            <Reveal>
              <div className="flex items-center gap-2 text-[11px] md:text-[10.5px] uppercase tracking-[0.16em] text-primary font-medium mb-8">
                <span className="w-4 h-px bg-primary" /> Core services
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border">
                
                {/* Sourcing */}
                <motion.div 
                  whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3), 0 0 0 1px var(--border-hover)", transition: { duration: 0.2, ease: "easeOut" } }}
                  className="group relative bg-card p-6 md:p-10 lg:p-14 transition-colors hover:bg-surface-1 h-full overflow-hidden cursor-default"
                >
                  <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary group-hover:h-full transition-all duration-[350ms] ease-out z-10" />
                  <div className="w-10 h-10 mb-8 flex items-center justify-center border border-primary/40 text-primary bg-background shadow-none relative z-10">
                    <Globe className="w-5 h-5" />
                  </div>
                  <p className="font-heading text-[11px] md:text-[10px] tracking-[0.16em] uppercase text-muted-foreground mb-3 relative z-10">01 — Sourcing</p>
                  <h3 className="font-heading text-[22px] font-bold tracking-tight mb-4 relative z-10">Sourcing support</h3>
                  <p className="text-[13.5px] text-muted-foreground font-light leading-[1.8] mb-6 relative z-10">
                    Practical product identification and supply exploration matched to our current capabilities — no over-promise, no under-delivery.
                  </p>
                  <div className="flex flex-col gap-2.5 relative z-10">
                    {["Product research and market analysis", "Supplier identification and comparison", "Quality assessment at current scale", "Cost and feasibility review"].map((pt, i) => (
                      <div key={i} className="flex flex-row items-start gap-3">
                        <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-[3px]" />
                        <span className="text-[12.5px] text-muted-foreground font-light leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Coordination */}
                <motion.div 
                  whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3), 0 0 0 1px var(--border-hover)", transition: { duration: 0.2, ease: "easeOut" } }}
                  className="group relative bg-card p-6 md:p-10 lg:p-14 transition-colors hover:bg-surface-1 h-full overflow-hidden cursor-default"
                >
                  <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary group-hover:h-full transition-all duration-[350ms] ease-out z-10" />
                  <div className="w-10 h-10 mb-8 flex items-center justify-center border border-primary/40 text-primary bg-background shadow-none relative z-10">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <p className="font-heading text-[11px] md:text-[10px] tracking-[0.16em] uppercase text-muted-foreground mb-3 relative z-10">02 — Coordination</p>
                  <h3 className="font-heading text-[22px] font-bold tracking-tight mb-4 relative z-10">Trade coordination</h3>
                  <p className="text-[13.5px] text-muted-foreground font-light leading-[1.8] mb-6 relative z-10">
                    Cross-market communication and logistics handled with care — we prioritize responsibility and clarity over volume and speed.
                  </p>
                  <div className="flex flex-col gap-2.5 relative z-10">
                    {["Buyer-seller communication management", "Import-export documentation support", "Logistics tracking and follow-up", "Issue resolution and escalation"].map((pt, i) => (
                      <div key={i} className="flex flex-row items-start gap-3">
                        <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-[3px]" />
                        <span className="text-[12.5px] text-muted-foreground font-light leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Products */}
                <motion.div 
                  whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3), 0 0 0 1px var(--border-hover)", transition: { duration: 0.2, ease: "easeOut" } }}
                  className="group relative bg-card p-6 md:p-10 lg:p-14 transition-colors hover:bg-surface-1 h-full overflow-hidden cursor-default"
                >
                  <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary group-hover:h-full transition-all duration-[350ms] ease-out z-10" />
                  <div className="w-10 h-10 mb-8 flex items-center justify-center border border-primary/40 text-primary bg-background shadow-none relative z-10">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="font-heading text-[11px] md:text-[10px] tracking-[0.16em] uppercase text-muted-foreground mb-3 relative z-10">03 — Products</p>
                  <h3 className="font-heading text-[22px] font-bold tracking-tight mb-4 relative z-10">Selected products</h3>
                  <p className="text-[13.5px] text-muted-foreground font-light leading-[1.8] mb-6 relative z-10">
                    A carefully chosen range of electronics and hardware — focused product scope means genuine knowledge and consistent quality control.
                  </p>
                  <div className="flex flex-col gap-2.5 relative z-10">
                    {["Electronics and hardware components", "Curated supplier relationships", "Pre-verified product quality", "Small to mid volume orders"].map((pt, i) => (
                      <div key={i} className="flex flex-row items-start gap-3">
                        <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-[3px]" />
                        <span className="text-[12.5px] text-muted-foreground font-light leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Workflow */}
                <motion.div 
                  whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3), 0 0 0 1px var(--border-hover)", transition: { duration: 0.2, ease: "easeOut" } }}
                  className="group relative bg-card p-6 md:p-10 lg:p-14 transition-colors hover:bg-surface-1 h-full overflow-hidden cursor-default"
                >
                  <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary group-hover:h-full transition-all duration-[350ms] ease-out z-10" />
                  <div className="w-10 h-10 mb-8 flex items-center justify-center border border-primary/40 text-primary bg-background shadow-none relative z-10">
                    <Settings className="w-5 h-5" />
                  </div>
                  <p className="font-heading text-[11px] md:text-[10px] tracking-[0.16em] uppercase text-muted-foreground mb-3 relative z-10">04 — Workflow</p>
                  <h3 className="font-heading text-[22px] font-bold tracking-tight mb-4 relative z-10">Modern workflow</h3>
                  <p className="text-[13.5px] text-muted-foreground font-light leading-[1.8] mb-6 relative z-10">
                    AI tools and structured processes keep us organized and efficient — technology that supports careful human judgment, not replaces it.
                  </p>
                  <div className="flex flex-col gap-2.5 relative z-10">
                    {["AI-assisted research and planning", "Structured communication protocols", "Process documentation and review", "Continuous improvement cycles"].map((pt, i) => (
                      <div key={i} className="flex flex-row items-start gap-3">
                        <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-[3px]" />
                        <span className="text-[12.5px] text-muted-foreground font-light leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </Reveal>
          </div>
        </section>

        <hr className="border-t border-border m-0 max-w-[calc(100%-48px)] md:max-w-[calc(100%-96px)] mx-auto" />

        {/* ================================================
            HOW WE WORK
            ================================================ */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto py-16 md:py-24 md:pb-16 px-6 lg:px-12">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 border border-border">
                {/* Left Intro */}
                <div className="p-8 md:p-12 lg:p-14 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between bg-card">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] md:text-[10.5px] uppercase tracking-[0.16em] text-primary font-medium mb-6">
                      <span className="w-4 h-px bg-primary" /> Our process
                    </div>
                    <h2 className="heading-section text-[clamp(1.5rem,2.5vw,2.125rem)] font-bold tracking-tight leading-[1.2] mb-5">
                      Deliberate steps,<br/>not shortcuts
                    </h2>
                    <p className="text-[13.5px] text-muted-foreground font-light leading-[1.8] max-w-sm">
                      We don't rush to close deals we don't fully understand. Each trade follows a clear process — from initial inquiry through delivery — because we believe structure is what makes trust possible.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 mt-12 text-[11px] tracking-[0.1em] uppercase text-primary font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Transparent at every stage
                  </div>
                </div>

                {/* Right Steps */}
                <div className="flex flex-col bg-background">
                  {[
                    { n: "01", h: "Initial conversation", p: "We understand your need, volume, and timeline — and tell you honestly if it's within our current scope." },
                    { n: "02", h: "Research & sourcing", p: "We identify suppliers, compare options, and verify product quality against your requirements." },
                    { n: "03", h: "Coordination & logistics", p: "We manage communication, documentation, and tracking throughout the trade process." },
                    { n: "04", h: "Review & follow-up", p: "Every trade ends with a review — what worked, what didn't, and how we improve the next one." }
                  ].map((step, idx) => (
                    <div key={idx} className="group p-6 md:p-8 lg:px-10 border-b border-border transition-colors hover:bg-surface-1 last:border-b-0 grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr] gap-4 md:gap-5 items-start">
                      <span className="font-heading text-[12px] md:text-[11px] tracking-[0.12em] text-primary pt-[2px]">{step.n}</span>
                      <div>
                        <p className="font-heading text-[14px] font-bold mb-2 transition-colors group-hover:text-primary">{step.h}</p>
                        <p className="text-[12.5px] text-muted-foreground font-light leading-[1.7]">{step.p}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================================================
            SCOPE NOTE
            ================================================ */}
        <section className="w-full pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Reveal delay={0.1}>
              <div className="bg-primary/5 border border-primary/20 p-6 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <div>
                  <h3 className="font-heading text-[20px] font-bold tracking-tight mb-3">What's in our current scope</h3>
                  <p className="text-[13.5px] text-muted-foreground font-light leading-[1.75] max-w-sm">
                    We are an early-stage startup. We're honest about what we can handle right now — and this is it. As we grow and learn, our scope expands carefully.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Electronics", "Hardware components", "Small volumes",
                      "India imports", "Cross-border sourcing", "B2B coordination"
                    ].map((tag, idx) => (
                      <span key={idx} className="text-[11px] tracking-[0.1em] uppercase px-[14px] py-[6px] border border-primary/20 text-primary font-medium bg-background/50 backdrop-blur-sm shadow-none">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
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
                <h2 className="heading-section text-[clamp(1.375rem,3vw,2.25rem)] font-bold tracking-tight">
                  Have a trade need<br/>that <span className="text-primary italic">fits our scope?</span>
                </h2>
                <div className="flex flex-wrap items-center gap-4 shrink-0">
                  <Button asChild variant="outline" className="h-12 px-6 font-medium whitespace-nowrap bg-transparent hover:bg-surface-1">
                    <Link to="/products">
                      View products <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild className="h-12 px-6 font-medium bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
                    <Link to="/contact">
                      Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
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
