---
name: vercel-ai-sdk
description: Use when implementing any AI feature — chat, streaming, tool calling, structured output, or agent workflows — using the Vercel AI SDK in the hashtrade Next.js monorepo
---

# Vercel AI SDK — Hashtrade Usage Guide

This project uses **Vercel AI SDK v5** (package: `ai`) with the Next.js App Router.

**Always fetch the latest docs if uncertain:**
Use the Exa MCP to fetch `https://sdk.vercel.ai/llms.txt` or specific doc pages at `https://sdk.vercel.ai/docs/`.

---

## Core API Surface

### Text Generation (Server-side)

```typescript
import { generateText, streamText } from 'ai';
import { google } from '@ai-sdk/google';  // or openai, anthropic

// Non-streaming (automation, background tasks)
const { text } = await generateText({
  model: google('gemini-2.0-flash'),
  prompt: 'Your prompt here',
  system: 'You are a helpful assistant.',
});

// Streaming (interactive, chat)
const result = streamText({
  model: google('gemini-2.0-flash'),
  messages,
  system: 'System prompt',
});
return result.toDataStreamResponse(); // for Next.js route handlers
```

### Route Handler Pattern (App Router)

```typescript
// app/api/chat/route.ts
import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('gemini-2.0-flash'),
    messages,
    system: 'You are a helpful assistant.',
  });

  return result.toDataStreamResponse();
}
```

### Client-side Chat (`useChat`)

```typescript
'use client';
import { useChat } from 'ai/react';

export function ChatComponent() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  return (
    <form onSubmit={handleSubmit}>
      {messages.map((m) => (
        <div key={m.id}>
          <strong>{m.role}:</strong> {m.content}
        </div>
      ))}
      <input value={input} onChange={handleInputChange} disabled={isLoading} />
      <button type="submit" disabled={isLoading}>Send</button>
    </form>
  );
}
```

---

## Tool Calling

```typescript
import { generateText, tool } from 'ai';
import { z } from 'zod';

const result = await generateText({
  model: google('gemini-2.0-flash'),
  tools: {
    getWeather: tool({
      description: 'Get the current weather for a location',
      parameters: z.object({
        location: z.string().describe('City name'),
        unit: z.enum(['celsius', 'fahrenheit']).default('celsius'),
      }),
      execute: async ({ location, unit }) => {
        // actual implementation
        return { temperature: 22, condition: 'sunny' };
      },
    }),
  },
  maxSteps: 5, // allow multi-step tool calls
  prompt: 'What is the weather in London?',
});
```

### Tool Calling in Route Handlers

```typescript
// app/api/agent/route.ts
import { streamText, tool } from 'ai';
import { z } from 'zod';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('gemini-2.0-flash'),
    messages,
    tools: {
      searchWeb: tool({
        description: 'Search the web for information',
        parameters: z.object({ query: z.string() }),
        execute: async ({ query }) => {
          // call Exa or other search
          return { results: [] };
        },
      }),
    },
    maxSteps: 10,
  });

  return result.toDataStreamResponse();
}
```

---

## Structured Output

```typescript
import { generateObject, streamObject } from 'ai';
import { z } from 'zod';

const schema = z.object({
  title: z.string(),
  summary: z.string(),
  tags: z.array(z.string()),
  sentiment: z.enum(['positive', 'neutral', 'negative']),
});

// Non-streaming structured output
const { object } = await generateObject({
  model: google('gemini-2.0-flash'),
  schema,
  prompt: 'Analyze this text: ...',
});

// Streaming structured output
const result = streamObject({
  model: google('gemini-2.0-flash'),
  schema,
  prompt: 'Analyze this text: ...',
});
// object is available as it streams via result.partialObjectStream
```

---

## Multi-Turn Messages Format

```typescript
import type { CoreMessage } from 'ai';

const messages: CoreMessage[] = [
  { role: 'system', content: 'You are a helpful assistant.' },
  { role: 'user', content: 'Hello!' },
  { role: 'assistant', content: 'Hi! How can I help?' },
  { role: 'user', content: 'What can you do?' },
];
```

---

## Model Provider Setup

```typescript
// lib/ai/providers.ts
import { google } from '@ai-sdk/google';
import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';

// Recommended for hashtrade: Google Gemini (cost-effective, large context)
export const defaultModel = google('gemini-2.0-flash');
export const smartModel = google('gemini-2.0-pro');

// Fallbacks
export const openaiModel = openai('gpt-4o-mini');
export const anthropicModel = anthropic('claude-3-5-haiku-latest');
```

**Environment variables needed:**
```env
GOOGLE_GENERATIVE_AI_API_KEY=...
OPENAI_API_KEY=...         # optional
ANTHROPIC_API_KEY=...      # optional
```

---

## Embeddings

```typescript
import { embed, embedMany } from 'ai';
import { google } from '@ai-sdk/google';

const embeddingModel = google.textEmbeddingModel('text-embedding-004');

// Single embedding
const { embedding } = await embed({
  model: embeddingModel,
  value: 'text to embed',
});

// Batch embeddings
const { embeddings } = await embedMany({
  model: embeddingModel,
  values: ['text 1', 'text 2', 'text 3'],
});
```

---

## Error Handling

```typescript
import { AISDKError } from 'ai';

try {
  const result = await generateText({ model, prompt });
} catch (error) {
  if (AISDKError.isInstance(error)) {
    console.error('AI SDK error:', error.message);
    // Handle rate limits, token limits, etc.
  }
  throw error;
}
```

---

## Anti-Patterns — AVOID

| Anti-Pattern | Correct Pattern |
|--------------|-----------------|
| Using `fetch` directly to call LLMs | Use `generateText`/`streamText` |
| Building custom streaming logic | Use `result.toDataStreamResponse()` |
| Returning `Response` manually from streaming | Use `result.toDataStreamResponse()` |
| Using `useChat` with `body` for auth | Use middleware/headers instead |
| Constructing messages without `CoreMessage` types | Import and use `CoreMessage` type |
| Catching all errors and ignoring | Check `AISDKError.isInstance()` |
| `maxSteps: 1` with tools expecting multi-turn | Set `maxSteps` to allow agent loops |

---

## Checklist Before Implementing AI Features

- [ ] Route handler returns `result.toDataStreamResponse()` (not manual `new Response()`)
- [ ] Client uses `useChat` hook, not raw `fetch`
- [ ] Tool parameters validated with Zod schemas
- [ ] `maxSteps` set appropriately for tool-calling flows
- [ ] API key env vars present in `.env.local` and Vercel project
- [ ] Error handling wraps AI calls and checks `AISDKError.isInstance()`
- [ ] Model choice is appropriate for cost/quality tradeoff

---

## References

- **Full docs:** https://sdk.vercel.ai/docs (use Exa MCP to fetch)
- **llms.txt (full API):** https://sdk.vercel.ai/llms.txt
- **Next.js App Router guide:** https://sdk.vercel.ai/docs/getting-started/nextjs-app-router
- **Tool calling:** https://sdk.vercel.ai/docs/ai-sdk-core/tools-and-tool-calling
- **Streaming:** https://sdk.vercel.ai/docs/ai-sdk-core/generating-text
