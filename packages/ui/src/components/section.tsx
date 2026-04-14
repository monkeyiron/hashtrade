/* eslint-disable react-refresh/only-export-components */
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@workspace/ui/lib/utils"

const sectionVariants = cva("w-full", {
  variants: {
    padding: {
      none: "",
      sm: "py-6",
      md: "py-8",
      lg: "py-12",
      xl: "py-16",
    },
    background: {
      default: "bg-background",
      muted: "bg-muted",
      card: "bg-card",
      primary: "bg-primary",
      transparent: "bg-transparent",
    },
  },
  defaultVariants: {
    padding: "md",
    background: "default",
  },
})

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

function Section({ className, padding, background, ...props }: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ padding, background, className }))}
      {...props}
    />
  )
}

export { Section, sectionVariants }
