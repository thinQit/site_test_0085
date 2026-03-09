"use client";

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionContainerProps {
  id?: string
  className?: string
  contentClassName?: string
  muted?: boolean
  children?: ReactNode
}

export default function SectionContainer({
  id = '',
  className = '',
  contentClassName = '',
  muted = false,
  children = null,
}: Partial<SectionContainerProps>) {
  return (
    <section id={id} className={cn('py-20 md:py-24', muted ? 'bg-muted/40' : 'bg-white', className)}>
      <div className={cn('mx-auto w-full max-w-7xl px-4 md:px-6', contentClassName)}>{children}</div>
    </section>
  )
}
