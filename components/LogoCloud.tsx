"use client";

import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LogoItem {
  name: string
}

interface LogoCloudProps {
  title?: string
  logos?: LogoItem[]
  proofBullets?: string[]
  className?: string
}

export default function LogoCloud({
  title = 'Trusted by growth teams at leading companies',
  logos = [
    { name: 'Nexora' },
    { name: 'Cloudmint' },
    { name: 'VelocityOS' },
    { name: 'Finstack' },
    { name: 'BrightDesk' },
    { name: 'DataLyft' },
  ],
  proofBullets = ['SOC 2 compliant', '99.99% uptime', 'No-code setup'],
  className = '',
}: Partial<LogoCloudProps>) {
  return (
    <section className={cn('bg-white py-20 md:py-24', className)}>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <p className='text-center text-sm font-semibold uppercase tracking-wide text-gray-500'>{title}</p>

        <div className='mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
          {logos.map((logo) => (
            <div
              key={logo.name}
              className='flex h-16 items-center justify-center rounded-xl border border-border bg-card px-3 text-sm font-semibold text-gray-700 shadow-sm'
            >
              {logo.name}
            </div>
          ))}
        </div>

        {proofBullets.length > 0 && (
          <div className='mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6'>
            {proofBullets.map((bullet) => (
              <div key={bullet} className='inline-flex items-center text-sm text-gray-600'>
                <Check className='mr-2 h-4 w-4 text-blue-600' />
                {bullet}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
