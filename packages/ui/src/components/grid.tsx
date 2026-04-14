/* eslint-disable react-refresh/only-export-components */
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@workspace/ui/lib/utils"

const gridVariants = cva("grid", {
  variants: {
    cols: {
      "1": "grid-cols-1",
      "2": "grid-cols-2",
      "3": "grid-cols-3",
      "4": "grid-cols-4",
      "6": "grid-cols-6",
      "8": "grid-cols-8",
      "12": "grid-cols-12",
      auto: "grid-cols-[repeat(auto-fill,minmax(0,1fr))]",
    },
    gap: {
      "0": "gap-0",
      "1": "gap-1",
      "2": "gap-2",
      "3": "gap-3",
      "4": "gap-4",
      "6": "gap-6",
      "8": "gap-8",
      "12": "gap-12",
      "16": "gap-16",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
  },
  defaultVariants: {
    cols: "1",
    gap: "4",
    align: "stretch",
  },
})

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {}

function Grid({ className, cols, gap, align, ...props }: GridProps) {
  return (
    <div
      data-slot="grid"
      className={cn(gridVariants({ cols, gap, align, className }))}
      {...props}
    />
  )
}

export { Grid, gridVariants }
