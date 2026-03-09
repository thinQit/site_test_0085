"use client";

import Link from 'next/link'
import { ArrowRight, BarChart3, ShieldCheck, Sparkles, Workflow } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FeatureItem {
  icon: string
  title: string
  description: string
}

interface FeatureGridProps {
  heading?: string
  subheading?: string
  features?: FeatureItem[]
  calloutTitle?: string
  calloutDescription?: string
  calloutCtaLabel?: string
  calloutCtaHref?: string
  className?: string
}

const iconMap = {
  Sparkles,
  BarChart3,
  Workflow,
  ShieldCheck,
}

function getIcon(name: string) {
  return iconMap[name as keyof typeof iconMap] || Sparkles
}

export default function FeatureGrid({
  heading = 'Everything you need to scale conversions',
  subheading = 'From instant experimentation to deep funnel analytics, AcmeFlow gives teams complete control of their growth workflow.',
  features = [
    {
      icon: 'Sparkles',
      title: 'Smart page personalization',
      description: 'Automatically adapt headlines and CTA copy by audience source, campaign intent, or funnel stage.',
    },
    {
      icon: 'BarChart3',
      title: 'Revenue-focused analytics',
      description: 'Track signups, trials, and paid conversions in one clean dashboard with clear attribution.',
    },
    {
      icon: 'Workflow',
      title: 'Fast experimentation',
      description: 'Launch and compare multiple funnel variants without engineering bottlenecks or slow release cycles.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Built-in reliability',
      description: 'Enterprise-grade security, role controls, and stable performance for teams shipping at speed.',
    },
  ],
  calloutTitle = 'Need enterprise rollout support?',
  calloutDescription = 'Work directly with our onboarding specialists to migrate your funnels and train your team in under 2 weeks.',
  calloutCtaLabel = 'Talk to Sales',
  calloutCtaHref = '#contact',
  className = '',
}: Partial<FeatureGridProps>) {
  return (
    <section id='features' className={cn('bg-muted/40 py-20 md:py-24', className)}>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <div className='max-w-3xl'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 md:text-4xl'>{heading}</h2>
          <p className='mt-4 text-base text-gray-600 md:text-lg'>{subheading}</p>
        </div>

        <div className='mt-10 grid gap-6 md:grid-cols-2'>
          {features.map((feature) => {
            const Icon = getIcon(feature.icon)
            return (
              <Card key={feature.title} className='rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md'>
                <div className='inline-flex rounded-lg bg-blue-50 p-2 text-blue-600'>
                  <Icon className='h-5 w-5' />
                </div>
                <h3 className='mt-4 text-lg font-semibold text-gray-900'>{feature.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-gray-600'>{feature.description}</p>
              </Card>
            )
          })}
        </div>

        <Card className='mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-border bg-card p-6 shadow-sm md:flex-row md:items-center'>
          <div>
            <h3 className='text-lg font-semibold text-gray-900'>{calloutTitle}</h3>
            <p className='mt-1 text-sm text-gray-600'>{calloutDescription}</p>
          </div>
          <Button asChild className='rounded-lg bg-blue-600 px-6 py-3 font-semibold tracking-tight text-white hover:bg-blue-700'>
            <Link href={calloutCtaHref}>
              {calloutCtaLabel}
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        </Card>
      </div>
    </section>
  )
}
