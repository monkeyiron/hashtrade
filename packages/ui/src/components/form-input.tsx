import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label className="label-mono flex justify-between">
            <span className={cn(error ? "text-destructive" : "text-muted-foreground")}>{label}</span>
            {error && <span className="text-destructive text-[10px] break-words ml-2">{error}</span>}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-12 w-full border bg-transparent px-3 py-1 font-mono text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50",
            error ? "border-destructive focus-visible:border-destructive" : "border-border",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
FormInput.displayName = "FormInput"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const FormTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label className="label-mono flex justify-between">
            <span className={cn(error ? "text-destructive" : "text-muted-foreground")}>{label}</span>
            {error && <span className="text-destructive text-[10px] ml-2 break-words">{error}</span>}
          </label>
        )}
        <textarea
          className={cn(
            "flex min-h-[120px] w-full border bg-transparent px-3 py-2 font-mono text-sm shadow-sm placeholder:text-muted focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 resize-none",
            error ? "border-destructive focus-visible:border-destructive" : "border-border",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
FormTextarea.displayName = "FormTextarea"
