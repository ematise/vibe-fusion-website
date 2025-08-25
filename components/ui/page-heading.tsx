import { H1, H2, H3 } from "./headings"

interface PageHeadingProps {
  children: React.ReactNode
  level?: 'h1' | 'h2' | 'h3'
  className?: string
  variant?: 'default' | 'primary' | 'accent' | 'gradient'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  align?: 'left' | 'center' | 'right'
}

export function PageHeading({ 
  children, 
  level = 'h2', 
  className,
  variant = 'default',
  size,
  align = 'left'
}: PageHeadingProps) {
  if (level === 'h1') {
    return (
      <H1 
        className={className}
        variant={variant}
        size={size as 'md' | 'lg' | 'xl' | 'xxl'}
        align={align}
      >
        {children}
      </H1>
    )
  }

  if (level === 'h3') {
    return (
      <H3 
        className={className}
        variant={variant}
        size={size as 'sm' | 'md' | 'lg'}
        align={align}
      >
        {children}
      </H3>
    )
  }

  return (
    <H2 
      className={className}
      variant={variant}
      size={size as 'sm' | 'md' | 'lg' | 'xl'}
      align={align}
    >
      {children}
    </H2>
  )
}
