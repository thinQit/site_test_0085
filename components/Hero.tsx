'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface HeroProps {
  badgeText?: string
  headline?: string
  subheadline?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  imageSrc?: string
}

export default function Hero({
  badgeText = 'New: AI Pipeline Assistant',
  headline = 'Close more deals with a conversion-first growth platform',
  subheadline = 'GrowthPilot helps SaaS teams automate outreach, qualify leads, and convert pipeline with clear insights in one dashboard.',
  primaryCtaText = 'Start Free Trial',
  primaryCtaHref = '#pricing',
  secondaryCtaText = 'Book Demo',
  secondaryCtaHref = '#',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
}: Partial<HeroProps>) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <span className="inline-flex rounded-full border border-[#2563EB]/30 bg-[#eff6ff] px-3 py-1 text-xs font-semibold text-[#2563EB]">
            {badgeText}
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#111827] md:text-5xl">{headline}</h1>
          <p className="mt-5 max-w-xl text-lg text-[#111827]/75">{subheadline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild className="rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1d4ed8]">
              <Link href={primaryCtaHref}>
                {primaryCtaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-lg px-6 py-3 font-semibold">
              <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
            </Button>
          </div>

          <div className="mt-6 space-y-2 text-sm text-[#111827]/80">
            <p className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#2563EB]" />
              No credit card required
            </p>
            <p className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#2563EB]" />
              Setup in under 10 minutes
            </p>
          </div>
        </div>

        <Card className="overflow-hidden rounded-xl border bg-white shadow-sm">
          <Image src={imageSrc} alt="Product dashboard preview" width={1600} height={900} unoptimized className="h-auto w-full" />
          <div className="space-y-2 p-5">
            <p className="text-sm font-semibold text-[#111827]">Live Performance Snapshot</p>
            <p className="text-sm text-[#111827]/70">+42% qualified demos booked in the last 30 days.</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
