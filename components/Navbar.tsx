'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavbarProps {
  logoText?: string
  ctaLabel?: string
  ctaHref?: string
  links?: { label: string; href: string }[]
  className?: string
}

export default function Navbar({
  logoText = 'AcmeFlow',
  ctaLabel = 'Start Free Trial',
  ctaHref = '#cta',
  links = [
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  className = '',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className={cn('sticky top-0 z-50 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70', className)}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-lg font-bold text-[#111827]">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563EB] text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          {logoText}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium text-[#111827]/80 transition-colors hover:text-[#111827]">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild className="rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5 text-[#111827]" /> : <Menu className="h-5 w-5 text-[#111827]" />}
        </button>
      </nav>

      {open && (
        <div className="border-t bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#111827]/80 hover:text-[#111827]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1D4ED8]">
              <Link href={ctaHref} onClick={() => setOpen(false)}>
                {ctaLabel}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
