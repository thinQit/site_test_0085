"use client";

import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FooterProps {
  brand?: string
  address?: string
  productLinks?: { label: string; href: string }[]
  companyLinks?: { label: string; href: string }[]
  legalLinks?: { label: string; href: string }[]
  copyright?: string
}

export default function Footer({
  brand = 'GrowthPilot',
  address = '120 Market Street, Suite 400, San Francisco, CA 94103',
  productLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#' },
    { label: 'API', href: '#' },
  ],
  companyLinks = [
    { label: 'About', href: '#' },
    { label: 'Customers', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Security', href: '#' },
  ],
  copyright = '© 2026 GrowthPilot. All rights reserved.',
}: Partial<FooterProps>) {
  return (
    <footer className="border-t bg-[#f8fafc]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="text-lg font-semibold text-[#111827]">{brand}</h3>
          <p className="mt-3 text-sm text-[#111827]/70">
            Built for modern teams that want faster growth with less manual work.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#111827]">Product</h4>
          <ul className="mt-4 space-y-2">
            {productLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-[#111827]/70 hover:text-[#111827]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#111827]">Company</h4>
          <ul className="mt-4 space-y-2">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-[#111827]/70 hover:text-[#111827]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#111827]">Legal</h4>
          <ul className="mt-4 space-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-[#111827]/70 hover:text-[#111827]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className={cn('mt-6 inline-flex items-start gap-2 text-sm text-[#111827]/70')}>
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{address}</span>
          </p>
        </div>
      </div>
      <div className="border-t px-4 py-4 text-center text-xs text-[#111827]/60 md:px-6">{copyright}</div>
    </footer>
  )
}
