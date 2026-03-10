"use client";

import { cn } from '@/lib/utils'

interface LogoStripProps {
  title?: string
  logos?: string[]
  className?: string
}

export default function LogoStrip({
  title = 'Trusted by modern teams at',
  logos = ['NovaTech', 'BrightLoop', 'Clearline', 'SummitOne', 'PulseWorks', 'VertexLab'],
  className = '',
}: Partial<LogoStripProps>) {
  return (
    <section className={cn('border-y bg-white py-10', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-center text-sm font-medium text-muted-foreground">{title}</p>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo} className="flex h-14 items-center justify-center rounded-lg border border-border bg-muted/40 px-3">
              <span className="text-sm font-semibold text-[#111827]/60">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
