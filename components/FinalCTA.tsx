"use client";

import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FinalCTAProps {
  heading?: string
  subheading?: string
  bullets?: string[]
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

export default function FinalCTA({
  heading = 'Ready to launch a higher-converting landing page?',
  subheading = 'Join growth teams using GrowthPilot to turn traffic into predictable pipeline.',
  bullets = ['Conversion-first templates', 'Fast setup with your existing stack', 'Actionable performance insights'],
  ctaLabel = 'Start Free Trial',
  ctaHref = '#',
  className = '',
}: Partial<FinalCTAProps>) {
  return (
    <section id="cta" className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-2xl bg-primary px-6 py-10 text-primary-foreground md:px-10">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{heading}</h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/90">{subheading}</p>

          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {bullets.map((bullet, idx) => (
              <li key={bullet + idx} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button asChild variant="secondary" className="rounded-lg px-6 py-3 font-semibold tracking-tight text-foreground">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
