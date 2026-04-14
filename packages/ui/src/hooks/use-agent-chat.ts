"use client";

import React, { useState, useEffect } from "react";
import { useMutation, useAction } from "convex/react";
import { useUIMessages } from "@convex-dev/agent/react";
// Import the generated API directly using relative paths to monorepo root.
import { api } from "../../../../convex/_generated/api";

export type Message = { id: string; role: 'user' | 'assistant' | 'system' | 'data'; content: string; };

export function useAgentChat() {
  const [threadId, setThreadId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Convex mutations & actions
  const createThread = useMutation(api.agent.createThread);
  const sendMessageAction = useAction(api.agent.sendMessage);

  // 1. Create a thread once upon mount
  useEffect(() => {
    if (!threadId) {
      createThread().then((id: string) => setThreadId(id)).catch(console.error);
    }
  }, [threadId, createThread]);

  // Prevent nested state corruption from previous backend signatures or Hot Module Reloading
  const safeThreadId = typeof threadId === "object" && threadId !== null ? (threadId as any).threadId : threadId;

  // 2. Fetch the UI threaded messages explicitly with delta streaming
  const { results: rawMessages } = useUIMessages(
    api.messages.listThreadMessages,
    safeThreadId ? { threadId: safeThreadId } : "skip",
    { initialNumItems: 50, stream: true }
  );

  // 3. Map Convex formats to existing local message object
  const hasMessages = rawMessages && rawMessages.length > 0;
  const messages: Message[] = hasMessages ? rawMessages.map((msg: any) => ({
    id: msg._id ?? msg.order.toString(),
    role: msg.role === "user" ? "user" : "assistant",
    content: msg.parts?.map((p: any) => p.text).join("") || "",
  })) : [{ 
    id: "init", 
    role: "assistant", 
    content: "Hashtrade AI assistant online. How can I help you today?" 
  }];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || !threadId || isSending) return;

    try {
      setIsSending(true);
      const userMessage = input;
      setInput("");
      await sendMessageAction({ threadId: safeThreadId, message: userMessage });
    } catch (err) {
      console.error("AI Sync Error:", err);
    } finally {
      setIsSending(false);
    }
  };

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading: isSending,
  };
}
