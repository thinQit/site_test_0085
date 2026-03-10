"use client";

import Image from 'next/image'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureHighlightProps {
  eyebrow?: string
  title?: string
  description?: string
  bullets?: string[]
  imageSrc?: string
  className?: string
}

export default function FeatureHighlight({
  eyebrow = 'Built for revenue teams',
  title = 'One workspace for pipeline clarity and execution',
  description = 'Keep leadership aligned and reps focused with shared visibility, clear priorities, and guided next actions.',
  bullets = [
    'Unified view of every opportunity and owner',
    'Stage-based playbooks with automation triggers',
    'Forecast confidence powered by live activity',
  ],
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
  className = '',
}: Partial<FeatureHighlightProps>) {
  return (
    <section className={cn('bg-muted/40 py-20 md:py-24', className)}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">{title}</h2>
          <p className="mt-4 text-[#111827]/75">{description}</p>
          <ul className="mt-8 space-y-4">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm text-[#111827]/85">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
          <Image
            src={imageSrc}
            alt="Feature highlight illustration"
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
