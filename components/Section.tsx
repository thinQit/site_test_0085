"use client";

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  children?: ReactNode
  className?: string
  muted?: boolean
  pattern?: boolean
}

export default function Section({
  id = '',
  children = null,
  className = '',
  muted = false,
  pattern = false,
}: Partial<SectionProps>) {
  return (
    <section
      id={id}
      className={cn(
        'py-20 md:py-24',
        muted ? 'bg-[#f8fafc]' : 'bg-white',
        pattern && 'bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_40%)]',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">{children}</div>
    </section>
  )
}
