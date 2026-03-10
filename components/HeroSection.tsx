"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface StatItem {
  label: string
  value: string
}

interface HeroSectionProps {
  eyebrow?: string
  headline?: string
  subheadline?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  trustBadges?: string[]
  stats?: StatItem[]
  imageSrc?: string
  className?: string
}

export default function HeroSection({
  eyebrow = 'Revenue Acceleration Platform',
  headline = 'Turn more clicks into customers with a conversion-focused landing experience.',
  subheadline = 'GrowthPilot helps teams launch high-converting pages fast with proven messaging blocks, social proof, and clear CTA structure.',
  primaryCtaLabel = 'Get Started',
  primaryCtaHref = '#pricing',
  secondaryCtaLabel = 'Book a Demo',
  secondaryCtaHref = '#cta',
  trustBadges = ['No credit card required', 'Setup in 10 minutes', 'Cancel anytime'],
  stats = [
    { label: 'Avg. conversion uplift', value: '31%' },
    { label: 'Active growth teams', value: '2,400+' },
    { label: 'Time to launch', value: '< 1 day' },
  ],
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  className = '',
}: Partial<HeroSectionProps>) {
  return (
    <section className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <Badge className="rounded-full px-3 py-1 text-xs font-semibold">{eyebrow}</Badge>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">{headline}</h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">{subheadline}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild className="rounded-lg px-6 py-3 font-semibold tracking-tight">
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-lg px-6 py-3 font-semibold tracking-tight">
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {trustBadges.map((item, idx) => (
              <Badge key={item + idx} variant="secondary" className="rounded-full px-3 py-1 text-xs">
                {item}
              </Badge>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map((stat, idx) => (
              <div key={stat.label + idx}>
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <Image src={imageSrc} alt="Hero showcase" width={1600} height={900} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
