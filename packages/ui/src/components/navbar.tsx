"use client";

import { useState } from "react";
import { Logo } from "./logo";
import { Button } from "./button";
import { cn } from "@workspace/ui/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function NavBar({ 
  className,
  LinkComponent = "a",
  currentPath: controlledPath,
}: { 
  className?: string;
  LinkComponent?: React.ElementType<any>;
  currentPath?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsOpen(false); // Close mobile menu when hiding
    } else {
      setHidden(false);
    }
    setScrolled(latest > 20);
  });

  // Use controlled path if provided (SPA), fallback to window
  const currentPath = controlledPath ?? (typeof window !== "undefined" ? window.location.pathname : "/");

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
  ];

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 border-b",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/50" : "bg-background border-border",
        className
      )}
    >
      <div className="w-full h-[80px] grid grid-cols-2 md:grid-cols-12 items-center mx-auto max-w-none">
        
        {/* Brand Area */}
        <div className="md:col-span-3 flex items-center h-full px-6 lg:px-12 border-r border-border">
          <LinkComponent href="/" className="group outline-none hover:opacity-75 transition-opacity" aria-label="Hashtrade Home">
            <Logo />
          </LinkComponent>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:col-span-6 justify-center h-full">
          {navItems.map((item) => {
            const isActive = currentPath.startsWith(item.href);
            return (
              <LinkComponent
                key={item.label}
                href={item.href}
                className={cn(
                  "relative label-nav transition-colors duration-300 outline-none h-full flex items-center px-10 border-r border-border group",
                  isActive ? "text-primary bg-surface-1" : "text-muted-foreground hover:text-foreground hover:bg-surface-1"
                )}
              >
                {item.label}
                <div className={cn(
                  "absolute bottom-[-1px] left-0 right-0 h-[2px] transition-transform duration-[400ms] ease-out origin-left z-10",
                  isActive ? "bg-primary scale-x-100" : "bg-primary scale-x-0 group-hover:scale-x-100"
                )} />
              </LinkComponent>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex md:col-span-3 items-center justify-end h-full px-6 lg:px-12 border-l border-border bg-card">
          <Button asChild className="h-11 px-8 rounded-none bg-primary text-primary-foreground font-heading text-[11px] tracking-[0.15em] uppercase hover:bg-primary/90 shadow-none">
            <LinkComponent href="/contact" tabIndex={-1}>
              Inquire
            </LinkComponent>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex justify-end items-center h-full px-6 border-l border-border">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-12 h-12 flex items-center justify-center border border-border text-foreground hover:bg-surface-1 transition-colors outline-none focus:outline-none" 
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background flex flex-col overflow-hidden">
          {navItems.map((item) => {
            const isActive = currentPath.startsWith(item.href);
            return (
              <LinkComponent
                key={item.label}
                href={item.href}
                className={cn(
                  "label-nav px-6 py-6 border-b border-border block transition-colors leading-none",
                  isActive ? "text-primary bg-surface-1" : "text-muted-foreground hover:text-foreground hover:bg-surface-1"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </LinkComponent>
            );
          })}
          <div className="p-6 bg-surface-1">
            <Button asChild className="w-full h-12 rounded-none bg-primary text-primary-foreground font-heading text-[12px] tracking-[0.15em] uppercase shadow-none hover:bg-primary/90">
              <LinkComponent href="/contact" className="block w-full" onClick={() => setIsOpen(false)}>
                Start Inquiry
              </LinkComponent>
            </Button>
          </div>
        </div>
      )}
    </motion.header>
  );
}

export { NavBar as Navbar };
