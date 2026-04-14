
import { PageLayout } from "@workspace/ui/components/page-layout";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { ScrollReveal as Reveal } from "@workspace/ui/components/scroll-reveal";
import { Button } from "@workspace/ui/components/button";
import { useDocumentTitle } from "@workspace/ui/hooks/use-document-title";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IsoCommunication } from "@workspace/ui/components/illustrations";

export function ContactPage() {
  useDocumentTitle("Contact Us", "Start a conversation tailored to your needs. No fluff.");
  const [topic, setTopic] = useState('Trade inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const createInquiry = useMutation(api.inquiries.create);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createInquiry({
        topic,
        name: (document.getElementById("name") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        company: (document.getElementById("company") as HTMLInputElement).value || undefined,
        message,
      });
      setIsSuccess(true);
    } catch (err) {
      console.error("Failed to send inquiry:", err);
      // Fallback/continue if needed, but ideally we'd show an error state
    } finally {
      setIsSubmitting(false);
    }
  };

  const topics = [
    { id: 'General', label: 'General / Press' },
    { id: 'Trade inquiry', label: 'Standard Trade' },
    { id: 'Custom Sourcing', label: 'Custom Sourcing' }
  ];

  return (
    <PageLayout>
      <main className="w-full min-h-screen bg-background pt-[80px]">
        <div className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-80px)] border-t border-border">
          
          {/* ================================================
              LEFT PANEL (STICKY)
              ================================================ */}
          <div className="w-full lg:w-[40%] xl:w-[35%] lg:border-r border-border bg-card">
            <div className="lg:sticky lg:top-[80px] p-6 md:p-10 lg:p-16 h-full lg:min-h-[calc(100vh-80px)] flex flex-col justify-between">
              
              <Reveal>
                <div>
                  <div className="flex items-center gap-2 text-[11px] md:text-[10.5px] uppercase tracking-[0.16em] text-primary font-medium mb-6">
                    <span className="w-4 h-px bg-primary" /> Contact
                  </div>
                  <h1 className="heading-display font-extrabold tracking-tight leading-[1.0] mb-6">
                    Start a<br/><span className="text-primary italic">conversation.</span>
                  </h1>
                  <p className="text-[14px] text-muted-foreground font-light leading-[1.75] max-w-sm mb-12">
                    Whether you are interested in our current product scope, custom sourcing, or simply connecting — we welcome straightforward communication.
                  </p>

                  <div className="flex flex-col border border-border bg-card">
                    {/* Email Block */}
                    <a href="mailto:hello@hashtrade.in" className="group border-b border-border p-6 md:p-8 flex flex-col hover:bg-primary hover:text-primary-foreground transition-colors relative overflow-hidden">
                      <span className="text-[10px] tracking-[0.14em] uppercase text-muted-foreground group-hover:text-primary-foreground/70 mb-4 transition-colors">01 — Email</span>
                      <span className="font-heading text-[clamp(1.25rem,2vw,1.5rem)] font-bold tracking-tight">hello@hashtrade.in</span>
                      <ArrowRight className="w-5 h-5 absolute bottom-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-foreground" />
                    </a>

                    {/* Phone Block */}
                    <a href="tel:+919876543210" className="group border-b border-border p-6 md:p-8 flex flex-col hover:bg-primary hover:text-primary-foreground transition-colors relative overflow-hidden">
                      <span className="text-[10px] tracking-[0.14em] uppercase text-muted-foreground group-hover:text-primary-foreground/70 mb-4 transition-colors">02 — Phone</span>
                      <span className="font-heading text-[clamp(1.25rem,2vw,1.5rem)] font-bold tracking-tight">+91 98765 43210</span>
                      <ArrowRight className="w-5 h-5 absolute bottom-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-foreground" />
                    </a>

                    {/* Location Block */}
                    <div className="group p-6 md:p-8 flex flex-col hover:bg-surface-1 transition-colors cursor-default">
                      <span className="text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-4">03 — Location</span>
                      <span className="font-heading text-[1.125rem] font-bold tracking-tight leading-[1.4]">
                        Imphal, Manipur<br/>
                        <span className="text-muted-foreground font-normal text-[0.85em]">— & —</span><br/>
                        New Delhi, India
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Illustration */}
              <div className="hidden lg:flex w-full justify-center items-center mt-6 opacity-70 h-[180px] relative overflow-hidden">
                <IsoCommunication className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent pointer-events-none" />
              </div>

              <Reveal delay={0.2}>
                <div className="mt-16 lg:mt-0 pt-10 lg:pt-0 border-t lg:border-t-0 border-border">
                  <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary" /> Core hours: 09:00 - 18:00 (IST)
                  </div>
                </div>
              </Reveal>

            </div>
          </div>

          {/* ================================================
              RIGHT PANEL (SCROLLING FORM)
              ================================================ */}
          <div className="w-full lg:w-[60%] xl:w-[65%] bg-background lg:min-h-screen relative">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                /* SUCCESS STATE */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center"
                >
                  <div className="w-16 h-16 border border-primary flex items-center justify-center mb-8 bg-primary/5 text-primary shadow-none">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="heading-section font-bold tracking-tight mb-4">
                    Message received
                  </h2>
                  <p className="text-[14px] text-muted-foreground font-light max-w-md mx-auto mb-10 leading-[1.75]">
                    Thank you for reaching out. We process inquiries directly and aim to provide a practical, honest response within 24 hours.
                  </p>
                  <Button 
                    variant="outline" 
                    className="h-12 px-8 font-medium bg-transparent hover:bg-surface-1 border-primary/30 text-foreground"
                    onClick={() => {
                      setIsSuccess(false);
                      setMessage('');
                    }}
                  >
                    Send another inquiry
                  </Button>
                </motion.div>
              ) : (
                /* FORM STATE */
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-6 md:p-10 lg:p-20 xl:p-28 max-w-3xl mx-auto"
                >
                  <Reveal delay={0.1}>
                    <form onSubmit={handleSubmit} className="flex flex-col w-full">
                      
                      {/* Topic Selector */}
                      <p className="text-[11px] md:text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-4 font-medium">Inquiry type</p>
                      <div className="flex flex-col md:flex-row gap-px bg-border border border-border mb-12">
                        {topics.map((t) => (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => setTopic(t.id)}
                            className={`flex-1 overflow-hidden py-4 px-3 text-[12px] uppercase tracking-[0.1em] transition-colors border-none outline-none focus:outline-none whitespace-nowrap
                              ${topic === t.id 
                                ? 'bg-primary text-primary-foreground font-medium' 
                                : 'bg-card text-muted-foreground hover:bg-surface-1 hover:text-foreground'
                              }
                            `}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>

                      <p className="text-[11px] md:text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-4 font-medium">Your details</p>
                      {/* Grouped Fields */}
                      <div className="flex flex-col border border-border bg-card mb-8 group focus-within:border-primary/50 transition-colors">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                          <div className="p-5 pb-4 border-b md:border-r border-border focus-within:bg-surface-1 transition-colors">
                            <label htmlFor="name" className="text-[10.5px] md:text-[9.5px] tracking-[0.12em] uppercase text-muted-foreground block mb-2">Full name</label>
                            <input 
                              id="name"
                              type="text" 
                              required
                              placeholder="Jane Doe"
                              className="w-full bg-transparent border-none outline-none text-[14px] font-light text-foreground placeholder:text-muted-foreground/50 h-8"
                            />
                          </div>
                          <div className="p-5 pb-4 border-b border-border focus-within:bg-surface-1 transition-colors">
                            <label htmlFor="email" className="text-[10.5px] md:text-[9.5px] tracking-[0.12em] uppercase text-muted-foreground block mb-2">Email address</label>
                            <input 
                              id="email"
                              type="email" 
                              required
                              placeholder="jane@company.com"
                              className="w-full bg-transparent border-none outline-none text-[14px] font-light text-foreground placeholder:text-muted-foreground/50 h-8"
                            />
                          </div>
                        </div>
                        <div className="p-5 pb-4 focus-within:bg-surface-1 transition-colors">
                          <label htmlFor="company" className="text-[10.5px] md:text-[9.5px] tracking-[0.12em] uppercase text-muted-foreground block mb-2">Company / Organization (Optional)</label>
                          <input 
                            id="company"
                            type="text" 
                            placeholder="Acme Corp"
                            className="w-full bg-transparent border-none outline-none text-[14px] font-light text-foreground placeholder:text-muted-foreground/50 h-8"
                          />
                        </div>
                      </div>

                      <p className="text-[11px] md:text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-4 font-medium flex justify-between">
                        <span>Message</span>
                        <span className={message.length > 800 ? 'text-[#e8b84b]' : ''}>
                          {message.length} / 1000
                        </span>
                      </p>
                      
                      {/* Message Field */}
                      <div className="flex flex-col border border-border bg-card mb-10 focus-within:border-primary/50 focus-within:bg-surface-1 transition-colors relative">
                        <textarea
                          id="message"
                          required
                          maxLength={1000}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="How can we help?"
                          className="w-full bg-transparent border-none outline-none text-[14px] font-light text-foreground placeholder:text-muted-foreground/50 p-5 min-h-[160px] resize-y"
                        />
                      </div>

                      {/* Submit */}
                      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-6 md:gap-4 mt-4">
                        <p className="text-[11px] text-muted-foreground font-light tracking-[0.03em] max-w-[200px] leading-tight text-center md:text-left mt-2">
                          By submitting, you agree to honest and straightforward communication.
                        </p>
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full md:w-auto h-14 px-10 font-medium bg-primary text-primary-foreground hover:bg-primary/90 text-[13px] tracking-[0.05em] uppercase shadow-none min-w-[200px]"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center">
                              Submit Inquiry <ArrowRight className="ml-3 h-4 w-4" />
                            </span>
                          )}
                        </Button>
                      </div>

                    </form>
                  </Reveal>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </main>
    </PageLayout>
  );
}
