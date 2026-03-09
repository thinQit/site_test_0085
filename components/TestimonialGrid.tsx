"use client";

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface TestimonialItem {
  quote: string
  name: string
  role: string
  company: string
}

interface TestimonialGridProps {
  heading?: string
  testimonials?: TestimonialItem[]
  trustBadges?: string[]
  className?: string
}

export default function TestimonialGrid({
  heading = 'Loved by teams focused on measurable growth',
  testimonials = [
    {
      quote:
        'We increased trial signups by 42% within 6 weeks. AcmeFlow made optimization a weekly habit, not a quarterly project.',
      name: 'Ariana Patel',
      role: 'VP Marketing',
      company: 'Nexora',
    },
    {
      quote:
        'The clarity in funnel analytics is incredible. We finally know which pages drive pipeline and which ones need work.',
      name: 'Daniel Kim',
      role: 'Head of Growth',
      company: 'Cloudmint',
    },
    {
      quote:
        'Our team launched experiments 3x faster after moving to AcmeFlow. The impact on revenue has been immediate.',
      name: 'Leah Thompson',
      role: 'Director of Demand Gen',
      company: 'VelocityOS',
    },
  ],
  trustBadges = ['4.9/5 G2 Rating', 'SOC 2 Type II', '2,500+ SaaS Teams'],
  className = '',
}: Partial<TestimonialGridProps>) {
  return (
    <section id='testimonials' className={cn('bg-white py-20 md:py-24', className)}>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 md:text-4xl'>{heading}</h2>

        <div className='mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((item) => (
            <Card key={item.name + item.company} className='rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md'>
              <p className='text-sm leading-relaxed text-gray-700'>“{item.quote}”</p>
              <div className='mt-5'>
                <p className='text-sm font-semibold text-gray-900'>{item.name}</p>
                <p className='text-xs text-gray-600'>
                  {item.role} · {item.company}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className='mt-8 flex flex-wrap gap-3'>
          {trustBadges.map((badge) => (
            <Badge key={badge} variant='secondary' className='rounded-full px-3 py-1 text-xs font-medium'>
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
