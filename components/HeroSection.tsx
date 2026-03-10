"use client";

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Stat {
  label: string
  value: string
}

interface HeroSectionProps {
  headline?: string
  subheadline?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  proofBullets?: string[]
  stats?: Stat[]
  imageSrc?: string
  className?: string
}

export default function HeroSection({
  headline = 'Close More Deals With Less Busywork',
  subheadline = 'AcmeFlow helps revenue teams automate follow-ups, track pipeline health, and move opportunities forward faster.',
  primaryCtaLabel = 'Start Free Trial',
  primaryCtaHref = '#cta',
  secondaryCtaLabel = 'Watch Demo',
  secondaryCtaHref = '#features',
  proofBullets = ['No credit card required', 'Setup in under 10 minutes', 'Trusted by 2,000+ teams'],
  stats = [
    { label: 'Revenue lift', value: '31%' },
    { label: 'Faster response', value: '4x' },
    { label: 'Avg. time saved', value: '12 hrs/wk' },
  ],
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  className = '',
}: Partial<HeroSectionProps>) {
  return (
    <section className={cn('bg-white py-20 md:py-24', className)}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-[#111827] md:text-5xl lg:text-6xl">{headline}</h1>
          <p className="mt-6 max-w-xl text-lg text-[#111827]/75">{subheadline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild className="rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1D4ED8]">
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-lg px-6 py-3 font-semibold">
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          </div>

          <ul className="mt-8 space-y-3">
            {proofBullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3 text-sm text-[#111827]/80">
                <CheckCircle2 className="h-4 w-4 text-[#2563EB]" />
                {bullet}
              </li>
            ))}
          </ul>

          {stats.length > 0 && (
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border bg-card p-4 text-center">
                  <p className="text-xl font-bold text-[#111827]">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <Image
              src={imageSrc}
              alt="Team dashboard preview"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
