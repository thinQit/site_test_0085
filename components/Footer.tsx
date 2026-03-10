"use client";

import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FooterProps {
  brandName?: string
  addressLine?: string
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

export default function Footer({
  brandName = 'AcmeFlow',
  addressLine = '123 Market Street, Suite 400, San Francisco, CA 94103',
  ctaLabel = 'Book a Demo',
  ctaHref = '#cta',
  className = '',
}: Partial<FooterProps>) {
  const productLinks = ['Features', 'Integrations', 'Automation', 'Analytics']
  const companyLinks = ['About', 'Customers', 'Careers', 'Contact']
  const legalLinks = ['Privacy', 'Terms', 'Security', 'Cookie Policy']

  return (
    <footer className={cn('border-t bg-white', className)}>
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 inline-flex items-center gap-2 text-lg font-bold text-[#111827]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563EB] text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              {brandName}
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Turn your revenue workflows into predictable growth with automation, reporting, and team alignment in one platform.
            </p>
            <p className="mt-4 text-sm text-[#111827]/70">{addressLine}</p>
            <Button asChild className="mt-6 rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1D4ED8]">
              <Link href={ctaHref} className="inline-flex items-center gap-2">
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#111827]">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-[#111827]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#111827]">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-[#111827]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#111827]">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-[#111827]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
