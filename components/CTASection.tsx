"use client";

import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CTASectionProps {
  heading?: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
  bullets?: string[]
  className?: string
}

export default function CTASection({
  heading = 'Ready to unlock faster SaaS growth?',
  description = 'Join thousands of teams using AcmeFlow to convert more traffic into qualified pipeline.',
  buttonLabel = 'Get Started Now',
  buttonHref = '#signup',
  bullets = ['14-day free trial', 'No credit card required', 'Cancel anytime'],
  className = '',
}: Partial<CTASectionProps>) {
  return (
    <section id='cta' className={cn('py-20 md:py-24', className)}>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <div className='rounded-2xl bg-gray-900 px-6 py-12 text-white md:px-10 md:py-14'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>{heading}</h2>
            <p className='mt-4 text-base text-gray-300 md:text-lg'>{description}</p>

            <div className='mt-8'>
              <Button asChild className='rounded-lg bg-blue-600 px-6 py-3 font-semibold tracking-tight text-white hover:bg-blue-700'>
                <Link href={buttonHref}>
                  {buttonLabel}
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </div>

            <div className='mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6'>
              {bullets.map((bullet) => (
                <div key={bullet} className='inline-flex items-center text-sm text-gray-200'>
                  <Check className='mr-2 h-4 w-4 text-blue-400' />
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
