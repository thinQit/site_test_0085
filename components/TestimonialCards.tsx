"use client";

import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

interface TestimonialCardsProps {
  testimonials?: Testimonial[]
  ratingText?: string
}

export default function TestimonialCards({
  testimonials = [
    {
      quote: 'We replaced three disconnected tools and doubled our meeting-to-opportunity conversion.',
      name: 'Maya Chen',
      role: 'VP of Revenue',
      company: 'Cloudloop',
    },
    {
      quote: 'Our SDR team now spends more time selling and less time managing spreadsheets.',
      name: 'Jordan Ellis',
      role: 'Sales Director',
      company: 'Northstar AI',
    },
    {
      quote: 'The AI lead scoring is shockingly accurate. We close faster with less back-and-forth.',
      name: 'Priya Nair',
      role: 'Head of Growth',
      company: 'Metricly',
    },
  ],
  ratingText = 'Rated 4.9/5 by 600+ GTM leaders',
}: Partial<TestimonialCardsProps>) {
  return (
    <section id="testimonials" className="bg-[#f8fafc] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex items-center gap-2 text-[#111827]">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-5 w-5 fill-[#f59e0b] text-[#f59e0b]" />
          ))}
          <span className="text-sm font-medium text-[#111827]/75">{ratingText}</span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="rounded-xl border bg-white p-6 shadow-sm">
              <p className="text-sm leading-7 text-[#111827]/80">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-[#111827]">{item.name}</p>
                <p className="text-sm text-[#111827]/65">
                  {item.role}, {item.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
