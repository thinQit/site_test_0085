'use client'

import Link from 'next/link'
import { Menu, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface NavbarProps {
  logoText?: string
  ctaText?: string
  ctaHref?: string
  links?: { label: string; href: string }[]
}

export default function Navbar({
  logoText = 'GrowthPilot',
  ctaText = 'Start Free Trial',
  ctaHref = '#pricing',
  links = [
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="#" className="inline-flex items-center gap-2 font-semibold text-[#111827]">
          <span className="rounded-lg bg-[#2563EB] p-1.5 text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>{logoText}</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-[#111827]/80 hover:text-[#111827]">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild className="rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1d4ed8]">
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex rounded-lg border p-2 text-[#111827] md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <div className={cn('border-t bg-white px-4 py-4 md:hidden', open ? 'block' : 'hidden')}>
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-[#111827]" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1d4ed8]">
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
