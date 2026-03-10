"use client";

import { cn } from '@/lib/utils'

interface SectionContainerProps {
  id?: string
  children?: React.ReactNode
  className?: string
  muted?: boolean
}

export default function SectionContainer({
  id = '',
  children = null,
  className = '',
  muted = false,
}: Partial<SectionContainerProps>) {
  return (
    <section id={id} className={cn('py-20 md:py-24', muted ? 'bg-muted/40' : 'bg-white', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">{children}</div>
    </section>
  )
}
