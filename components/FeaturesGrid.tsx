"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BarChart3, CheckCircle2, Clock3, Layers3, ShieldCheck, Sparkles, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureItem {
  title: string
  description: string
  icon: string
}

interface FeaturesGridProps {
  heading?: string
  subheading?: string
  features?: FeatureItem[]
  calloutTitle?: string
  calloutDescription?: string
  className?: string
}

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  BarChart3,
  Layers3,
  Clock3,
  ShieldCheck,
  CheckCircle2,
}

export default function FeaturesGrid({
  heading = 'Built for conversion-first growth teams',
  subheading = 'Everything you need to craft compelling offers, reduce friction, and drive more qualified signups.',
  features = [
    { title: 'Benefit-first sections', description: 'Use proven headline and CTA structures designed to improve clarity and action.', icon: 'Sparkles' },
    { title: 'Performance analytics', description: 'Track visitor behavior and monitor conversion lifts in real time.', icon: 'BarChart3' },
    { title: 'Modular content blocks', description: 'Swap social proof, features, and FAQ blocks in minutes.', icon: 'Layers3' },
    { title: 'Faster launch cycles', description: 'Ship polished landing pages in hours, not weeks.', icon: 'Clock3' },
  ],
  calloutTitle = 'Conversion callout',
  calloutDescription = 'Teams using GrowthPilot report up to 31% lift in demo bookings after simplifying section flow and CTA hierarchy.',
  className = '',
}: Partial<FeaturesGridProps>) {
  return (
    <section id="features" className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Badge className="rounded-full px-3 py-1 text-xs font-semibold">Features</Badge>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">{heading}</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{subheading}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Sparkles
            return (
              <Card key={feature.title + idx} className="rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <span className="rounded-md bg-primary/10 p-2 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6">
          <p className="text-sm font-semibold text-primary">{calloutTitle}</p>
          <p className="mt-2 text-sm text-foreground">{calloutDescription}</p>
        </div>
      </div>
    </section>
  )
}
