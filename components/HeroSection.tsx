"use client";

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface StatItem {
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
  stats?: StatItem[]
  imageSrc?: string
  imageAlt?: string
  className?: string
}

export default function HeroSection({
  headline = 'Convert More Visitors Into Customers',
  subheadline = 'AcmeFlow helps SaaS teams launch high-performing funnels, optimize messaging, and increase qualified signups without adding complexity.',
  primaryCtaLabel = 'Start Free Trial',
  primaryCtaHref = '#pricing',
  secondaryCtaLabel = 'Book a Demo',
  secondaryCtaHref = '#contact',
  stats = [
    { label: 'Avg. conversion lift', value: '+38%' },
    { label: 'Time to launch', value: 'Under 1 day' },
    { label: 'Trusted teams', value: '2,500+' },
  ],
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  imageAlt = 'Dashboard preview',
  className = '',
}: Partial<HeroSectionProps>) {
  return (
    <section className={cn('bg-white py-20 md:py-24', className)}>
      <div className='mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-12'>
        <div>
          <p className='inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700'>
            <CheckCircle2 className='mr-2 h-3.5 w-3.5' />
            Built for conversion-focused teams
          </p>
          <h1 className='mt-5 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
            {headline}
          </h1>
          <p className='mt-5 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg'>{subheadline}</p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
            <Button asChild className='rounded-lg bg-blue-600 px-6 py-3 font-semibold tracking-tight text-white hover:bg-blue-700'>
              <Link href={primaryCtaHref}>
                {primaryCtaLabel}
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
            <Button asChild variant='outline' className='rounded-lg px-6 py-3 font-semibold tracking-tight'>
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          </div>

          <div className='mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3'>
            {stats.map((stat) => (
              <div key={stat.label} className='rounded-xl border border-border bg-card p-4 shadow-sm'>
                <p className='text-2xl font-bold text-gray-900'>{stat.value}</p>
                <p className='mt-1 text-sm text-gray-600'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='relative'>
          <div className='overflow-hidden rounded-xl border border-border bg-card shadow-sm'>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1600}
              height={900}
              unoptimized
              className='h-auto w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
