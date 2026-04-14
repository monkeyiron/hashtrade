import { cn } from "@workspace/ui/lib/utils";

export type Message = { id: string; role: string; content: string; };

// SVG Avatar: AI Bot — circuit-node design
function BotAvatar() {
  return (
    <div className="flex-shrink-0 w-8 h-8 border border-primary/60 bg-primary/10 flex items-center justify-center">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="7" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-primary"/>
        <circle cx="12" cy="12" r="2" fill="currentColor" className="text-primary"/>
        <line x1="12" y1="2" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" className="text-primary"/>
        <line x1="12" y1="17" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" className="text-primary"/>
        <line x1="2" y1="12" x2="7" y2="12" stroke="currentColor" strokeWidth="1.5" className="text-primary"/>
        <line x1="17" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" className="text-primary"/>
        <circle cx="12" cy="2" r="1" fill="currentColor" className="text-primary"/>
        <circle cx="12" cy="22" r="1" fill="currentColor" className="text-primary"/>
        <circle cx="2" cy="12" r="1" fill="currentColor" className="text-primary"/>
        <circle cx="22" cy="12" r="1" fill="currentColor" className="text-primary"/>
      </svg>
    </div>
  );
}

// SVG Avatar: User — minimal geometric person
function UserAvatar() {
  return (
    <div className="flex-shrink-0 w-8 h-8 border border-muted-foreground/40 bg-muted/30 flex items-center justify-center">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,2 22,20 2,20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="text-muted-foreground" fill="none"/>
        <circle cx="12" cy="13" r="2" fill="currentColor" className="text-muted-foreground"/>
      </svg>
    </div>
  );
}

// Renders content — converts **bold** and newlines
function RenderContent({ content }: { content: string }) {
  const parts = content.split(/(\*\*[^*]+\*\*)/g);
  const lines = parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-primary font-bold">{part.slice(2, -2)}</strong>;
    }
    // Split by newlines to render line breaks
    return part.split("\n").map((line, j, arr) => (
      <span key={`${i}-${j}`}>
        {line}
        {j < arr.length - 1 && <br />}
      </span>
    ));
  });

  return <>{lines}</>;
}

export function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex w-full mb-5 gap-2.5", isUser ? "flex-row-reverse" : "flex-row")}>
      {/* Avatar */}
      {isUser ? <UserAvatar /> : <BotAvatar />}

      {/* Bubble */}
      <div
        className={cn(
          "max-w-[80%] border px-4 py-3 group relative",
          isUser
            ? "border-primary/40 bg-primary/5"
            : "border-border bg-card"
        )}
      >
        {/* Role label */}
        <div className={cn(
          "font-mono uppercase tracking-widest text-[9px] mb-2 flex items-center gap-1.5",
          isUser ? "text-primary justify-end" : "text-muted-foreground justify-start"
        )}>
          {isUser ? (
            <>OPERATOR <span className="w-1 h-1 bg-primary inline-block"/></>
          ) : (
            <><span className="w-1 h-1 bg-primary inline-block animate-pulse"/> HT_AI</>
          )}
        </div>

        {/* Content */}
        <div className="font-mono text-sm leading-relaxed text-foreground">
          <RenderContent content={message.content} />
        </div>
      </div>
    </div>
  );
}
