"use client";

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  role: string
}

interface TestimonialCardsProps {
  title?: string
  testimonials?: Testimonial[]
  className?: string
}

export default function TestimonialCards({
  title = 'Teams are shipping faster and closing stronger',
  testimonials = [
    {
      quote: 'AcmeFlow helped us cut lead response times by 72% in the first month.',
      name: 'Maya Chen',
      role: 'Head of Revenue, NovaTech',
    },
    {
      quote: 'Our reps finally have a clear daily plan. Productivity and morale both improved.',
      name: 'David Romero',
      role: 'Sales Director, BrightLoop',
    },
    {
      quote: 'Forecast calls are now based on real activity, not assumptions.',
      name: 'Priya Nair',
      role: 'VP Sales, SummitOne',
    },
  ],
  className = '',
}: Partial<TestimonialCardsProps>) {
  return (
    <section id="testimonials" className={cn('bg-white py-20 md:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">{title}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="rounded-xl border border-border bg-card shadow-sm">
              <CardContent className="p-6">
                <Quote className="h-5 w-5 text-[#2563EB]" />
                <p className="mt-4 text-sm leading-relaxed text-[#111827]/85">“{item.quote}”</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-[#111827]">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
