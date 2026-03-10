"use client";

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionContainerProps {
  id?: string
  className?: string
  innerClassName?: string
  children?: ReactNode
}

export default function SectionContainer({
  id = '',
  className = '',
  innerClassName = '',
  children = null,
}: Partial<SectionContainerProps>) {
  return (
    <section id={id} className={cn('py-20 md:py-24', className)}>
      <div className={cn('mx-auto max-w-7xl px-4 md:px-6', innerClassName)}>{children}</div>
    </section>
  )
}
