"use client";

import { cn } from '@/lib/utils'

interface LogoItem {
  name: string
}

interface LogoCloudProps {
  statement?: string
  logos?: LogoItem[]
  className?: string
}

export default function LogoCloud({
  statement = 'Trusted by fast-growing SaaS, eCommerce, and B2B teams worldwide.',
  logos = [
    { name: 'Northstar AI' },
    { name: 'MetricLabs' },
    { name: 'LaunchForge' },
    { name: 'NovaCommerce' },
    { name: 'ScaleOps' },
    { name: 'BrightData Co.' },
  ],
  className = '',
}: Partial<LogoCloudProps>) {
  return (
    <section className={cn('border-y border-border bg-muted/20 py-12', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-center text-sm font-medium text-muted-foreground">{statement}</p>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo, idx) => (
            <div
              key={logo.name + idx}
              className="flex h-14 items-center justify-center rounded-lg border border-border bg-background px-4 text-center text-sm font-semibold text-foreground/80"
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
