'use client'

import Link from 'next/link'
import { Menu, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  logoText?: string
  links?: NavLink[]
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

export default function Navbar({
  logoText = 'GrowthPilot',
  links = [
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaLabel = 'Start Free Trial',
  ctaHref = '#cta',
  className = '',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className={cn('sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur', className)}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="#" className="flex items-center gap-2 text-foreground">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="text-base font-bold tracking-tight">{logoText}</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link, idx) => (
            <Link key={link.href + idx} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild className="rounded-lg px-6 py-3 font-semibold tracking-tight">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
          className="rounded-md border border-border p-2 text-foreground md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link, idx) => (
              <Link
                key={link.href + '-mobile-' + idx}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-lg px-6 py-3 font-semibold tracking-tight">
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
