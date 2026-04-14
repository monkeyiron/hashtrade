
import { PageLayout } from "@workspace/ui/components/page-layout";
import { ScrollReveal as Reveal } from "@workspace/ui/components/scroll-reveal";
import { Button } from "@workspace/ui/components/button";
import { SvgDraw } from "@workspace/ui/components/svg-draw";
import { useDocumentTitle } from "@workspace/ui/hooks/use-document-title";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const productsData = [
  {
    id: "p1",
    category: "electronics",
    subCat: "Consumer electronics",
    name: "Display modules & panels",
    desc: "LCD, LED, and OLED display panels sourced from verified manufacturers. Available in standard sizes suitable for retail and industrial applications. Pre-tested for signal integrity and color accuracy.",
    featured: true,
    avail: "Available for inquiry",
    availStatus: "green",
    svg: (
      <svg aria-hidden="true" className="opacity-50" width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="10" y="20" width="60" height="40" rx="3" stroke="var(--color-primary)" strokeOpacity="0.5" strokeWidth="1"/>
        <rect x="20" y="30" width="40" height="24" rx="1" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="0.75"/>
        <circle cx="40" cy="42" r="6" stroke="var(--color-primary)" strokeOpacity="0.6" strokeWidth="1"/>
        <line x1="10" y1="65" x2="70" y2="65" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="0.75"/>
        <line x1="30" y1="65" x2="30" y2="72" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="0.75"/>
        <line x1="50" y1="65" x2="50" y2="72" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="0.75"/>
        <line x1="22" y1="72" x2="58" y2="72" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="0.75"/>
      </svg>
    )
  },
  {
    id: "p2",
    category: "components",
    subCat: "Semiconductor components",
    name: "IC chips & microcontrollers",
    desc: "Standard logic ICs, microcontrollers, and memory chips. Sourced with batch documentation.",
    featured: false,
    avail: "Available",
    availStatus: "green",
    svg: (
      <svg aria-hidden="true" className="opacity-50" width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="16" y="16" width="24" height="24" rx="1" stroke="var(--color-primary)" strokeOpacity="0.5" strokeWidth="1"/>
        <rect x="20" y="20" width="16" height="16" rx="1" fill="var(--color-primary)" fillOpacity="0.08" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="8" y1="24" x2="16" y2="24" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="8" y1="32" x2="16" y2="32" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="40" y1="24" x2="48" y2="24" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="40" y1="32" x2="48" y2="32" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="24" y1="8" x2="24" y2="16" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="32" y1="8" x2="32" y2="16" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="24" y1="40" x2="24" y2="48" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="32" y1="40" x2="32" y2="48" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
      </svg>
    )
  },
  {
    id: "p3",
    category: "hardware",
    subCat: "Hardware",
    name: "Memory & storage modules",
    desc: "RAM modules, SSDs, and flash storage components. Standard form factors, tested for reliability.",
    featured: false,
    avail: "On request",
    availStatus: "yellow",
    svg: (
      <svg aria-hidden="true" className="opacity-50" width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="12" y="22" width="32" height="12" rx="1" stroke="var(--color-primary)" strokeOpacity="0.5" strokeWidth="1"/>
        <line x1="16" y1="22" x2="16" y2="18" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="22" y1="22" x2="22" y2="18" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="28" y1="22" x2="28" y2="18" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="34" y1="22" x2="34" y2="18" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="40" y1="22" x2="40" y2="18" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="16" y1="34" x2="16" y2="38" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="22" y1="34" x2="22" y2="38" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="28" y1="34" x2="28" y2="38" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="34" y1="34" x2="34" y2="38" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="40" y1="34" x2="40" y2="38" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <rect x="18" y="26" width="4" height="4" fill="var(--color-primary)" fillOpacity="0.3"/>
        <rect x="26" y="26" width="4" height="4" fill="var(--color-primary)" fillOpacity="0.3"/>
        <rect x="34" y="26" width="4" height="4" fill="var(--color-primary)" fillOpacity="0.3"/>
      </svg>
    )
  },
  {
    id: "p4",
    category: "hardware",
    subCat: "Power hardware",
    name: "Power supply units",
    desc: "AC-DC converters, switching PSUs, and UPS modules. Industrial and consumer grade options available.",
    featured: false,
    avail: "Available",
    availStatus: "green",
    svg: (
      <svg aria-hidden="true" className="opacity-50" width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="14" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="1"/>
        <circle cx="28" cy="28" r="8" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="0.75"/>
        <circle cx="28" cy="28" r="3" fill="var(--color-primary)" fillOpacity="0.4"/>
        <line x1="28" y1="14" x2="28" y2="10" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="42" y1="28" x2="46" y2="28" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="28" y1="42" x2="28" y2="46" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="14" y1="28" x2="10" y2="28" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
      </svg>
    )
  },
  {
    id: "p5",
    category: "components",
    subCat: "Passive components",
    name: "Capacitors & resistors",
    desc: "Standard passive components in bulk. SMD and through-hole variants, with tolerance specs verified.",
    featured: false,
    avail: "Available",
    availStatus: "green",
    svg: (
      <svg aria-hidden="true" className="opacity-50" width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="14" y="14" width="12" height="28" rx="1" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <rect x="30" y="14" width="12" height="28" rx="1" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="26" y1="28" x2="30" y2="28" stroke="var(--color-primary)" strokeOpacity="0.5" strokeWidth="1"/>
        <line x1="20" y1="20" x2="20" y2="36" stroke="var(--color-primary)" strokeOpacity="0.2" strokeWidth="0.5"/>
        <line x1="36" y1="20" x2="36" y2="36" stroke="var(--color-primary)" strokeOpacity="0.2" strokeWidth="0.5"/>
      </svg>
    )
  },
  {
    id: "p6",
    category: "electronics",
    subCat: "Electronics",
    name: "Portable power banks",
    desc: "Consumer-grade power banks with standard certifications. Various capacities and form factors.",
    featured: false,
    avail: "On request",
    availStatus: "yellow",
    svg: (
      <svg aria-hidden="true" className="opacity-50" width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="10" y="18" width="36" height="20" rx="2" stroke="var(--color-primary)" strokeOpacity="0.5" strokeWidth="1"/>
        <rect x="46" y="24" width="4" height="8" rx="1" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.75"/>
        <line x1="16" y1="25" x2="26" y2="25" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="0.75"/>
        <line x1="16" y1="29" x2="30" y2="29" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="0.75"/>
        <line x1="16" y1="33" x2="24" y2="33" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="0.75"/>
        <circle cx="36" cy="29" r="4" stroke="var(--color-primary)" strokeOpacity="0.5" strokeWidth="0.75"/>
      </svg>
    )
  }
];

export function ProductsPage() {
  useDocumentTitle("Products", "Carefully chosen electronics and hardware components.");
  const [filter, setFilter] = useState('all');

  const filteredProducts = productsData.filter(
    (product) => filter === 'all' || product.category === filter
  );

  return (
    <PageLayout>
      <main className="w-full min-h-screen bg-background pb-0 pt-20">
        
        {/* ================================================
            HERO
            ================================================ */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto pt-20 md:pt-24 pb-16 px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <Reveal>
                <div>
                  <div className="flex items-center gap-2 text-[11px] md:text-[10.5px] uppercase tracking-[0.16em] text-primary font-medium mb-5">
                    <span className="w-4 h-px bg-primary" /> Product catalogue
                  </div>
                  <h1 className="heading-display font-extrabold leading-[1.0] tracking-tight">
                    Carefully<br/><span className="text-primary italic">chosen.</span><br/>Nothing more.
                  </h1>
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <div>
                  <p className="text-[15px] text-muted-foreground font-light leading-[1.8] border-l-2 border-primary/40 pl-4 mb-7 max-w-sm">
                    We work with a focused range of electronics and hardware components. A smaller catalogue means deeper knowledge and better quality control.
                  </p>
                  <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> All products available for B2B inquiry — not retail
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ================================================
            FILTER BAR
            ================================================ */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-row overflow-x-auto snap-x snap-mandatory hide-scrollbar border border-border border-b-0 bg-card">
              {[
                { id: 'all', label: 'All products' },
                { id: 'electronics', label: 'Electronics' },
                { id: 'hardware', label: 'Hardware' },
                { id: 'components', label: 'Components' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`snap-start whitespace-nowrap flex-1 min-w-max md:min-w-0 font-heading text-[12px] tracking-[0.1em] uppercase py-4 px-6 border-b border-r border-border transition-colors text-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset
                    ${filter === tab.id ? 'text-primary bg-surface-1 font-bold' : 'text-muted-foreground bg-transparent hover:bg-surface-1 hover:text-foreground'}
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-t border-border m-0 max-w-[calc(100%-48px)] md:max-w-[calc(100%-96px)] mx-auto" />

        {/* ================================================
            PRODUCT GRID (ANIMATED)
            ================================================ */}
        <section className="w-full pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border-x border-b border-border">
                <AnimatePresence>
                  {filteredProducts.map((p) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ 
                        y: -4, 
                        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3), 0 0 0 1px var(--border-hover)", 
                        transition: { duration: 0.2, ease: "easeOut" } 
                      }}
                      transition={{ duration: 0.3 }}
                      key={p.id}
                      className={`group flex flex-col bg-card transition-all cursor-pointer overflow-hidden ${p.featured ? 'md:col-span-2' : ''}`}
                    >
                      {/* Visual */}
                      <div className={`relative flex items-center justify-center border-b border-border overflow-hidden bg-gradient-to-br from-background to-surface-1 ${p.featured ? 'h-[200px] md:h-[260px]' : 'h-[160px] md:h-[200px]'}`}>
                        {p.featured && (
                          <span className="absolute top-4 left-4 text-[9.5px] tracking-[0.12em] uppercase px-[10px] py-[5px] bg-primary/10 border border-primary/30 text-primary focus:outline-none ring-0">
                            Featured
                          </span>
                        )}
                        <SvgDraw duration={2}>
                          {p.svg}
                        </SvgDraw>
                      </div>

                      {/* Content */}
                      <div className="p-5 pb-6 md:p-7 md:pb-8 flex-1 flex flex-col justify-between">
                        <div>
                          <p className="text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2.5">
                            {p.subCat}
                          </p>
                          <h3 className="font-heading text-[16px] font-bold tracking-tight mb-2.5 transition-colors group-hover:text-primary">
                            {p.name}
                          </h3>
                          <p className="text-[12.5px] text-muted-foreground font-light leading-[1.7]">
                            {p.desc}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-6 pt-5 border-t border-border/50">
                          <span className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground flex items-center gap-2">
                            <span className={`w-[5px] h-[5px] rounded-full ${p.availStatus === 'green' ? 'bg-[#1ab893]' : 'bg-[#e8b84b]'}`} />
                            {p.avail}
                          </span>
                          <span className="text-[11.5px] font-medium text-primary opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                            Inquire →
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </section>

        <hr className="border-t border-border m-0 max-w-[calc(100%-48px)] md:max-w-[calc(100%-96px)] mx-auto" />

        {/* ================================================
            WHY CURATED
            ================================================ */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto py-16 md:py-24 md:pb-20 px-6 lg:px-12">
            <Reveal>
              <div className="mb-14">
                <div className="flex items-center gap-2 text-[11px] md:text-[10.5px] uppercase tracking-[0.16em] text-primary font-medium mb-5">
                  <span className="w-4 h-px bg-primary" /> Why curated
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-[5fr_3fr_3fr] border border-border">
                {/* Col 1 */}
                <div className="p-6 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-border bg-card">
                  <h2 className="heading-section font-bold tracking-tight leading-[1.2] mb-4">
                    Less breadth,<br/>more depth
                  </h2>
                  <p className="text-[13.5px] text-muted-foreground font-light leading-[1.75] max-w-sm">
                    We deliberately limit our product range. A focused catalogue means we actually understand what we're sourcing — not just passing products along without context.
                  </p>
                </div>
                {/* Col 2 */}
                <div className="p-6 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-border bg-background">
                  <p className="text-[11px] md:text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-4">What this means for you</p>
                  <div className="flex flex-col gap-3">
                    {["Genuine product knowledge, not just listings", "Vetted suppliers with documentation", "Honest availability — we don't list what we can't get"].map((pt, i) => (
                      <div key={i} className="flex flex-row items-start gap-2.5">
                        <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-[3px]" />
                        <span className="text-[13px] text-muted-foreground font-light leading-[1.6]">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Col 3 */}
                <div className="p-6 md:p-10 lg:p-12 bg-background flex flex-col justify-between">
                  <p className="text-[11px] md:text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-4">Our quality standard</p>
                  <div className="flex flex-col gap-3">
                    {["Every batch includes supplier documentation", "We request samples before committing", "Problems are communicated, not hidden"].map((pt, i) => (
                      <div key={i} className="flex flex-row items-start gap-2.5">
                        <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-[3px]" />
                        <span className="text-[13px] text-muted-foreground font-light leading-[1.6]">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================================================
            INQUIRY CTA BLOCK
            ================================================ */}
        <section className="w-full pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 border border-border bg-card">
                <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[11px] md:text-[10.5px] uppercase tracking-[0.16em] text-primary font-medium mb-5">
                    <span className="w-4 h-px bg-primary" /> Request products
                  </div>
                  <h2 className="heading-section font-bold tracking-tight leading-[1.1] mb-3">
                    Don't see what<br/>you need?
                  </h2>
                  <p className="text-[13.5px] text-muted-foreground font-light leading-[1.75] mb-7 max-w-sm">
                    We can research and source electronics and hardware beyond our listed catalogue — as long as it fits within our current scope and capabilities. Tell us what you need.
                  </p>
                  <Button asChild className="h-12 w-fit px-6 font-medium bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
                    <Link to="/contact">
                      Make an inquiry <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="p-8 md:p-12 flex flex-col gap-6 bg-background">
                  {[
                    { l: "Minimum order", v: "No strict minimum — we work case by case" },
                    { l: "Lead time", v: "Communicated clearly before commitment" },
                    { l: "Documentation", v: "Supplier docs, batch records on request" },
                    { l: "Payment terms", v: "Discussed per trade — no fixed policy yet" }
                  ].map((row, i) => (
                    <div key={i} className="flex flex-col gap-1 pb-5 border-b border-border/50 last:border-b-0 last:pb-0">
                      <span className="text-[11px] md:text-[10px] tracking-[0.14em] uppercase text-muted-foreground">{row.l}</span>
                      <span className="text-[13.5px] text-muted-foreground font-light">{row.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================================================
            CTA STRIP
            ================================================ */}
        <section className="w-full border-t border-border bg-surface-1">
          <div className="max-w-7xl mx-auto py-12 md:py-16 px-6 lg:px-12">
            <Reveal>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                <h2 className="heading-section font-bold tracking-tight">
                  Ready to place<br/>an <span className="text-primary italic">inquiry?</span>
                </h2>
                <div className="flex flex-wrap items-center gap-4 shrink-0">
                  <Button asChild variant="outline" className="h-12 px-6 font-medium whitespace-nowrap bg-transparent hover:bg-surface-2 border-primary/20 hover:border-primary/50 text-foreground">
                    <Link to="/services">
                      View services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild className="h-12 px-6 font-medium bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
                    <Link to="/contact">
                      Contact us <ArrowRight className="ml-2 h-4 w-4" />
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
