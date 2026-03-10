'use client'

import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  className?: string
}

export default function PrimaryButton({
  label = 'Get Started',
  className = '',
  type = 'button',
  ...props
}: Partial<PrimaryButtonProps>) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold tracking-tight text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      {label}
    </button>
  )
}
