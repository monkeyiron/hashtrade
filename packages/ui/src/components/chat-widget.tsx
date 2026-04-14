"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAgentChat } from "../hooks/use-agent-chat";
import { ChatMessage } from "./chat-message";
import { Button } from "./button";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useAgentChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-[150] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-background border border-border flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="h-14 border-b border-border bg-card flex items-center justify-between px-4 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary"> {/* Brutalist Indicator */}
                  {isLoading && (
                    <motion.div
                      className="w-full h-full bg-primary"
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </div>
                <h3 className="font-heading text-[13px] font-bold tracking-widest uppercase">HashTrade Assistant</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </Button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-3 py-4 scrollbar-thin space-y-1">
              {messages.map((m, idx) => (
                <ChatMessage key={`${m.id}-${idx}`} message={m} />
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-card shrink-0">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about HashTrade, Manipur, trade..."
                  className="flex-1 bg-background border border-border px-3 py-2 font-mono text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  variant="cyber" 
                  disabled={isLoading || !input.trim()}
                  className="px-4"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        variant={isOpen ? "outline" : "cyber"}
        size="icon"
        className="h-14 w-14 rounded-none shadow-xl border border-border relative group overflow-hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="relative z-10">
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </span>
      </Button>
    </div>
  );
}
