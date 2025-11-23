import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-a1pink to-a1violet text-white hover:opacity-90 hover:scale-105 active:scale-100 shadow-lg hover:shadow-xl transition-all duration-300",
        secondary: "bg-a1cyan text-white hover:bg-a1cyan/90 hover:scale-105 active:scale-100 shadow-md transition-all duration-300",
        whatsapp: "bg-green-500 text-white hover:bg-green-600 hover:scale-105 active:scale-100 shadow-md transition-all duration-300",
        outline: "border-2 border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-700 dark:text-white dark:hover:bg-white/10",
        hero: "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:scale-105 active:scale-100",
        link: "text-primary-600 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 py-2 text-sm",
        md: "h-11 px-6 py-2.5",
        lg: "h-14 px-8 py-3 text-lg",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
