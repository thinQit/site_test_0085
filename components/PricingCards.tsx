"use client";

import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Plan {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

interface PricingCardsProps {
  plans?: Plan[]
  guaranteeText?: string
}

export default function PricingCards({
  plans = [
    {
      name: 'Starter',
      price: '$49/mo',
      description: 'For early-stage teams validating outbound.',
      features: ['Up to 3 seats', 'Basic automations', 'Email support'],
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '$149/mo',
      description: 'Best for scaling teams focused on conversion.',
      features: ['Up to 15 seats', 'AI lead scoring', 'Advanced sequences', 'Priority support'],
      highlighted: true,
    },
    {
      name: 'Scale',
      price: '$399/mo',
      description: 'For mature GTM orgs with complex workflows.',
      features: ['Unlimited seats', 'SSO + permissions', 'Custom reporting', 'Dedicated success manager'],
      highlighted: false,
    },
  ],
  guaranteeText = '30-day money-back guarantee. Cancel anytime.',
}: Partial<PricingCardsProps>) {
  return (
    <section id="pricing" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">Simple pricing that scales with your team</h2>
          <p className="mt-3 text-lg text-[#111827]/70">Pick a plan and start converting more leads this week.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                'rounded-xl border p-6 shadow-sm',
                plan.highlighted ? 'border-[#2563EB] bg-[#eff6ff] shadow-md' : 'bg-white'
              )}
            >
              <h3 className="text-xl font-semibold text-[#111827]">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold text-[#111827]">{plan.price}</p>
              <p className="mt-2 text-sm text-[#111827]/70">{plan.description}</p>
              <ul className="mt-5 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="inline-flex w-full items-start gap-2 text-sm text-[#111827]/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#2563EB]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className={cn('mt-6 w-full rounded-lg px-6 py-3 font-semibold', plan.highlighted && 'bg-[#2563EB] text-white hover:bg-[#1d4ed8]')}>
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-xl border bg-[#f8fafc] p-4 text-center text-sm font-medium text-[#111827]/75">{guaranteeText}</div>
      </div>
    </section>
  )
}
