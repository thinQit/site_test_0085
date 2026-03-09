"use client";

import Link from 'next/link'
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface FinalCTAProps {
  title?: string
  subtitle?: string
  bullets?: string[]
  ctaText?: string
  ctaHref?: string
  contactNote?: string
}

export default function FinalCTA({
  title = 'Ready to turn more pipeline into revenue?',
  subtitle = 'Join growth-focused teams using GrowthPilot to automate follow-up and close deals faster.',
  bullets = ['Launch in one afternoon', 'No sales process disruption', 'Dedicated onboarding support'],
  ctaText = 'Start Free Trial',
  ctaHref = '#',
  contactNote = 'Questions? Email sales@growthpilot.com',
}: Partial<FinalCTAProps>) {
  return (
    <section className="bg-[#f8fafc] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <Card className="rounded-xl border bg-[#111827] p-8 text-white md:p-10">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-white/80">{subtitle}</p>

          <ul className="mt-6 space-y-2">
            {bullets.map((bullet) => (
              <li key={bullet} className="inline-flex items-center gap-2 text-sm text-white/90">
                <CheckCircle2 className="h-4 w-4 text-[#60a5fa]" />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild className="rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1d4ed8]">
              <Link href={ctaHref}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="inline-flex items-center gap-2 text-sm text-white/80">
              <Mail className="h-4 w-4" />
              {contactNote}
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
