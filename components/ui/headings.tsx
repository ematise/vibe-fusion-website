import * as React from "react"
import { cn } from "@/lib/utils"

// Base heading props interface
interface BaseHeadingProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'primary' | 'accent' | 'gradient'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  align?: 'left' | 'center' | 'right'
}

// H1 Component - Page titles and hero headings
interface H1Props extends BaseHeadingProps {
  size?: 'md' | 'lg' | 'xl' | 'xxl'
}

export const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(
  ({ children, className, variant = 'default', weight = 'bold', align = 'left', size = 'xl', ...props }, ref) => {
    const baseClasses = "font-serif tracking-tight"
    
    const sizeClasses = {
      md: "text-3xl md:text-4xl",
      lg: "text-4xl md:text-5xl",
      xl: "text-5xl md:text-6xl",
      xxl: "text-6xl md:text-7xl"
    }
    
    const variantClasses = {
      default: "text-brand-dark",
      primary: "text-brand-primary",
      accent: "text-brand-secondary",
      gradient: "text-gradient"
    }
    
    const weightClasses = {
      normal: "font-normal",
      medium: "font-medium", 
      semibold: "font-semibold",
      bold: "font-bold"
    }
    
    const alignClasses = {
      left: "text-left",
      center: "text-center", 
      right: "text-right"
    }

    return (
      <h1
        ref={ref}
        className={cn(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant],
          weightClasses[weight],
          alignClasses[align],
          "mb-8",
          className
        )}
        {...props}
      >
        {children}
      </h1>
    )
  }
)
H1.displayName = "H1"

// H2 Component - Main section headings
interface H2Props extends BaseHeadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const H2 = React.forwardRef<HTMLHeadingElement, H2Props>(
  ({ children, className, variant = 'default', weight = 'bold', align = 'left', size = 'lg', ...props }, ref) => {
    const baseClasses = "font-serif tracking-tight"
    
    const sizeClasses = {
      sm: "text-2xl md:text-3xl",
      md: "text-3xl md:text-4xl", 
      lg: "text-4xl md:text-5xl",
      xl: "text-5xl md:text-6xl"
    }
    
    const variantClasses = {
      default: "text-brand-dark",
      primary: "text-brand-primary",
      accent: "text-brand-secondary",
      gradient: "text-gradient"
    }
    
    const weightClasses = {
      normal: "font-normal",
      medium: "font-medium", 
      semibold: "font-semibold",
      bold: "font-bold"
    }
    
    const alignClasses = {
      left: "text-left",
      center: "text-center", 
      right: "text-right"
    }

    return (
      <h2
        ref={ref}
        className={cn(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant],
          weightClasses[weight],
          alignClasses[align],
          "mb-6",
          className
        )}
        {...props}
      >
        {children}
      </h2>
    )
  }
)
H2.displayName = "H2"

// H3 Component - Subsection headings
interface H3Props extends BaseHeadingProps {
  size?: 'sm' | 'md' | 'lg'
}

export const H3 = React.forwardRef<HTMLHeadingElement, H3Props>(
  ({ children, className, variant = 'default', weight = 'semibold', align = 'left', size = 'md', ...props }, ref) => {
    const baseClasses = "font-serif tracking-tight"
    
    const sizeClasses = {
      sm: "text-lg md:text-xl",
      md: "text-xl md:text-2xl",
      lg: "text-2xl md:text-3xl"
    }
    
    const variantClasses = {
      default: "text-brand-dark",
      primary: "text-brand-primary", 
      accent: "text-brand-secondary",
      gradient: "text-gradient"
    }
    
    const weightClasses = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold", 
      bold: "font-bold"
    }
    
    const alignClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }

    return (
      <h3
        ref={ref}
        className={cn(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant],
          weightClasses[weight],
          alignClasses[align],
          "mb-4",
          className
        )}
        {...props}
      >
        {children}
      </h3>
    )
  }
)
H3.displayName = "H3"

// H4 Component - Smaller headings and labels
interface H4Props extends BaseHeadingProps {
  size?: 'sm' | 'md'
}

export const H4 = React.forwardRef<HTMLHeadingElement, H4Props>(
  ({ children, className, variant = 'default', weight = 'semibold', align = 'left', size = 'sm', ...props }, ref) => {
    const baseClasses = "font-serif tracking-tight"
    
    const sizeClasses = {
      sm: "text-base md:text-lg",
      md: "text-lg md:text-xl"
    }
    
    const variantClasses = {
      default: "text-brand-dark",
      primary: "text-brand-primary",
      accent: "text-brand-secondary", 
      gradient: "text-gradient"
    }
    
    const weightClasses = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold"
    }
    
    const alignClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }

    return (
      <h4
        ref={ref}
        className={cn(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant],
          weightClasses[weight],
          alignClasses[align],
          "mb-2",
          className
        )}
        {...props}
      >
        {children}
      </h4>
    )
  }
)
H4.displayName = "H4"
