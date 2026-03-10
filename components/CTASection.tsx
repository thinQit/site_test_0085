"use client";

import Link from 'next/link'
import { ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface SupportCard {
  icon: string
  title: string
  text: string
}

interface CTASectionProps {
  headline?: string
  subheadline?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  cards?: SupportCard[]
  className?: string
}

export default function CTASection({
  headline = 'Ready to accelerate revenue?',
  subheadline = 'Launch your workspace today and see measurable pipeline impact in your first week.',
  primaryLabel = 'Start Free Trial',
  primaryHref = '#',
  secondaryLabel = 'Talk to Sales',
  secondaryHref = '#',
  cards = [
    { icon: 'Zap', title: 'Fast setup', text: 'Go live in under 10 minutes with guided onboarding.' },
    { icon: 'ShieldCheck', title: 'Enterprise ready', text: 'SOC 2-ready controls and secure team permissions.' },
    { icon: 'Users', title: 'Team alignment', text: 'Keep sales, ops, and leadership in one shared workflow.' },
  ],
  className = '',
}: Partial<CTASectionProps>) {
  const iconMap = { Zap, ShieldCheck, Users }

  return (
    <section id="cta" className={cn('bg-white py-20 md:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-2xl border border-border bg-muted/40 p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">{headline}</h2>
            <p className="mt-4 text-[#111827]/75">{subheadline}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild className="rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1D4ED8]">
                <Link href={primaryHref} className="inline-flex items-center gap-2">
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-lg px-6 py-3 font-semibold">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {cards.map((card) => {
              const Icon = iconMap[card.icon as keyof typeof iconMap] || Zap
              return (
                <Card key={card.title} className="rounded-xl border border-border bg-card shadow-sm">
                  <CardContent className="p-5">
                    <Icon className="h-5 w-5 text-[#2563EB]" />
                    <h3 className="mt-3 text-sm font-semibold text-[#111827]">{card.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{card.text}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
