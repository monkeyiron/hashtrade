import { ArrowUpRight } from "lucide-react";
import { ScrollReveal as Reveal } from "./scroll-reveal";

export function Footer({ LinkComponent = "a" }: { LinkComponent?: React.ElementType<any> }) {
  const currentYear = new Date().getFullYear();

  const siteLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full border-t border-border mt-32 bg-background overflow-hidden relative">
      <div className="w-full">
        {/* TOP ROW GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-border text-foreground">
          
          {/* CTA SECTOR (Spans 6) */}
          <div className="md:col-span-6 p-10 md:p-12 lg:p-20 border-b md:border-b-0 md:border-r border-border hover:bg-surface-1 transition-colors group flex flex-col justify-between items-start cursor-default">
            <Reveal>
              <h2 className="heading-section text-[clamp(2rem,3vw,3.5rem)] font-extrabold tracking-tighter mb-8 group-hover:text-primary transition-colors leading-[1.1]">
                Ready to talk?<br />
                Start a conversation.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <LinkComponent href="/contact" className="inline-flex items-center gap-4 text-[11px] tracking-[0.2em] uppercase font-bold text-muted-foreground group-hover:text-foreground transition-colors group/btn">
                Contact us
                <div className="w-8 h-px bg-border group-hover/btn:w-16 group-hover/btn:bg-primary transition-all duration-300" />
                <ArrowUpRight className="w-4 h-4 translate-y-1 group-hover/btn:-translate-y-0 group-hover/btn:translate-x-1 group-hover/btn:text-primary transition-all duration-300" />
              </LinkComponent>
            </Reveal>
          </div>

          {/* RIGHT SECTOR - DOUBLE COL */}
          <div className="md:col-span-6 grid grid-cols-2">
             {/* Navigation */}
             <div className="col-span-2 sm:col-span-1 border-b sm:border-b-0 sm:border-r border-border p-10 md:p-12 lg:p-20 group hover:bg-surface-1 transition-colors">
               <Reveal delay={0.1}>
                 <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground block mb-8 group-hover:text-primary transition-colors">Navigate</span>
                 <ul className="space-y-5 font-sans text-[15px] text-muted-foreground flex flex-col">
                   {siteLinks.map(link => (
                     <li key={link.href} className="overflow-hidden relative">
                       <LinkComponent href={link.href} className="group/link flex items-center hover:text-foreground transition-colors min-h-[24px]">
                         <span className="transform transition-transform duration-300 group-hover/link:translate-x-4 block">
                           {link.label}
                         </span>
                         <ArrowUpRight className="absolute left-[-16px] w-3 h-3 text-primary opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                       </LinkComponent>
                     </li>
                   ))}
                 </ul>
               </Reveal>
             </div>

             {/* Connect */}
             <div className="col-span-2 sm:col-span-1 p-10 md:p-12 lg:p-20 flex flex-col justify-between group hover:bg-surface-1 transition-colors">
               <Reveal delay={0.2}>
                 <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground block mb-8 group-hover:text-primary transition-colors">Connect</span>
                 <ul className="space-y-5 font-sans text-[15px] text-muted-foreground flex flex-col">
                   <li className="overflow-hidden relative">
                      <a href="mailto:hello@hashtrade.in" className="group/link flex items-center hover:text-foreground transition-colors min-h-[24px]">
                         <span className="transform transition-transform duration-300 group-hover/link:translate-x-4 block">
                           Email
                         </span>
                         <ArrowUpRight className="absolute left-[-16px] w-3 h-3 text-primary opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                      </a>
                   </li>
                   <li className="overflow-hidden relative">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group/link flex items-center hover:text-foreground transition-colors min-h-[24px]">
                         <span className="transform transition-transform duration-300 group-hover/link:translate-x-4 block">
                           LinkedIn
                         </span>
                         <ArrowUpRight className="absolute left-[-16px] w-3 h-3 text-primary opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                      </a>
                   </li>
                 </ul>
               </Reveal>
               <Reveal delay={0.3}>
                 <div className="mt-16 text-[10px] uppercase tracking-[0.25em] text-muted-foreground opacity-50 flex flex-col gap-2">
                   <span>Imphal, Manipur</span>
                   <span>New Delhi, India</span>
                 </div>
               </Reveal>
             </div>
          </div>
        </div>

        {/* MARQUEE / WATERMARK */}
        <div className="w-full border-b border-border overflow-hidden relative flex flex-col justify-center items-center h-[20vw] min-h-[160px] group">
          <div className="absolute inset-0 bg-background transition-colors duration-700 pointer-events-none -z-10 group-hover:bg-primary/5" />
          <Reveal>
            <div className="whitespace-nowrap px-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-1000">
               <span className="heading-display font-black tracking-tighter text-foreground text-[clamp(5rem,14vw,20rem)] leading-[0.8] pointer-events-none select-none">
                 Hashtrade.
               </span>
            </div>
          </Reveal>
        </div>

        {/* UTILITIES / CREDITS */}
        <div className="flex flex-col xl:flex-row justify-between items-center px-6 md:px-12 lg:px-20 py-8 gap-6 relative">
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center">
            <div className="font-sans text-[11px] text-muted-foreground/60 transition-colors hover:text-muted-foreground">
              &copy; {currentYear} HashTrade LLP. All rights reserved.
            </div>
            <div className="hidden md:block w-[1px] h-3 bg-border" />
            <div className="font-sans text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground border border-border/50 px-3 py-1 bg-surface-1 hover:border-primary/30 transition-colors">
              Precision, Brewed by Mokoro I Imphal I
            </div>
          </div>

          <div className="flex flex-wrap border-t xl:border-t-0 border-border/40 pt-6 xl:pt-0 items-center justify-center gap-6 xl:gap-8 font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground w-full xl:w-auto">
            <LinkComponent href="/privacy" className="hover:text-primary transition-colors opacity-60 hover:opacity-100">Privacy Policy</LinkComponent>
            <div className="w-1 h-1 bg-border rounded-none hidden sm:block" />
            <LinkComponent href="/terms" className="hover:text-primary transition-colors opacity-60 hover:opacity-100">Terms of Service</LinkComponent>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="ml-2 sm:ml-6 h-10 px-6 flex items-center justify-center border border-border hover:border-primary hover:bg-primary/5 text-primary transition-colors group focus:outline-none focus:ring-1 focus:ring-primary shadow-none rounded-none"
              aria-label="Back to top"
            >
              Top <ArrowUpRight className="ml-2 w-3 h-3 group-hover:-translate-y-[2px] transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
