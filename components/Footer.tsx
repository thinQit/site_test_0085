"use client";

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
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
  columns?: FooterColumn[]
  email?: string
  phone?: string
  address?: string
  copyright?: string
  className?: string
}

export default function Footer({
  brandName = 'GrowthPilot',
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
  ],
  email = 'hello@growthpilot.io',
  phone = '+1 (415) 555-0199',
  address = '548 Market Street, San Francisco, CA',
  copyright = '© 2026 GrowthPilot. All rights reserved.',
  className = '',
}: Partial<FooterProps>) {
  return (
    <footer className={cn('border-t border-border bg-muted/20', className)}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold tracking-tight text-foreground">{brandName}</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Convert more visitors with a clean, high-performance funnel and one clear call-to-action per section.
          </p>
        </div>

        {columns.map((column, idx) => (
          <div key={column.title + idx}>
            <h4 className="text-sm font-semibold text-foreground">{column.title}</h4>
            <ul className="mt-4 space-y-2">
              {column.links.map((link, lidx) => (
                <li key={link.href + lidx}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <span>{email}</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <span>{phone}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>{address}</span>
            </li>
          </ul>
        </div>
      </div>

      <Separator />
      <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-muted-foreground md:px-6">{copyright}</div>
    </footer>
  )
}
