'use client'

import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  className?: string
}

export default function SecondaryButton({
  label = 'Learn More',
  className = '',
  type = 'button',
  ...props
}: Partial<SecondaryButtonProps>) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 font-semibold tracking-tight text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      {label}
    </button>
  )
}
