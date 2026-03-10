"use client";

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TestimonialItem {
  name: string
  title: string
  quote: string
  rating: number
}

interface TestimonialsProps {
  heading?: string
  items?: TestimonialItem[]
  className?: string
}

export default function Testimonials({
  heading = 'Loved by marketers and founders',
  items = [
    {
      name: 'Ariana Patel',
      title: 'Head of Growth, NovaCommerce',
      quote: 'We rebuilt our funnel in a day and saw demo requests climb 28% in the first two weeks.',
      rating: 5,
    },
    {
      name: 'Marcus Lee',
      title: 'Founder, MetricLabs',
      quote: 'The clarity of the sections and CTA placement made it easy for visitors to take action.',
      rating: 5,
    },
    {
      name: 'Sofia Nguyen',
      title: 'VP Marketing, LaunchForge',
      quote: 'Simple, clean, and conversion-focused. Exactly what our campaign pages needed.',
      rating: 5,
    },
  ],
  className = '',
}: Partial<TestimonialsProps>) {
  return (
    <section id="testimonials" className={cn('bg-muted/20 py-20 md:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{heading}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <Card key={item.name + idx} className="rounded-xl border border-border bg-card shadow-sm">
              <CardHeader className="space-y-4">
                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: Math.max(0, Math.min(item.rating, 5)) }).map((_, starIdx) => (
                    <Star key={item.name + '-star-' + starIdx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-foreground">“{item.quote}”</p>
              </CardHeader>
              <CardContent className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{item.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
