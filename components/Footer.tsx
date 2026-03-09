"use client";

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  brandName?: string
  brandBlurb?: string
  columns?: FooterColumn[]
  copyright?: string
  className?: string
}

export default function Footer({
  brandName = 'AcmeFlow',
  brandBlurb = 'A conversion-focused growth platform for modern SaaS teams.',
  columns = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Integrations', href: '#integrations' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#privacy' },
        { label: 'Terms', href: '#terms' },
        { label: 'Security', href: '#security' },
      ],
    },
  ],
  copyright = '© 2026 AcmeFlow. All rights reserved.',
  className = '',
}: Partial<FooterProps>) {
  return (
    <footer className={cn('border-t border-border bg-white', className)}>
      <div className='mx-auto max-w-7xl px-4 py-16 md:px-6'>
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <p className='text-lg font-bold tracking-tight text-gray-900'>{brandName}</p>
            <p className='mt-3 max-w-sm text-sm text-gray-600'>{brandBlurb}</p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className='text-sm font-semibold uppercase tracking-wide text-gray-900'>{column.title}</h3>
              <ul className='mt-4 space-y-3'>
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className='text-sm text-gray-600 transition-colors hover:text-gray-900'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className='my-8' />

        <p className='text-xs text-gray-500'>{copyright}</p>
      </div>
    </footer>
  )
}
