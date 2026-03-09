'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  logoText?: string
  logoHref?: string
  links?: NavLink[]
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

export default function Navbar({
  logoText = 'AcmeFlow',
  logoHref = '#',
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
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-border/60 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80',
        className
      )}
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6'>
        <Link href={logoHref} className='text-lg font-extrabold tracking-tight text-gray-900 md:text-xl'>
          {logoText}
        </Link>

        <nav className='hidden items-center gap-8 md:flex'>
          {links.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className='text-sm font-medium text-gray-700 transition-colors hover:text-gray-900'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='hidden md:block'>
          <Button asChild className='rounded-lg bg-blue-600 px-6 py-3 font-semibold tracking-tight text-white hover:bg-blue-700'>
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <button
          type='button'
          className='inline-flex items-center justify-center rounded-md p-2 text-gray-800 md:hidden'
          onClick={() => setOpen(!open)}
          aria-label='Toggle menu'
        >
          {open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
        </button>
      </div>

      {open && (
        <div className='border-t border-border/60 bg-white md:hidden'>
          <nav className='mx-auto flex max-w-7xl flex-col px-4 py-4'>
            {links.map((link) => (
              <Link
                key={link.href + '-mobile'}
                href={link.href}
                className='rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-muted'
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className='mt-3 rounded-lg bg-blue-600 px-6 py-3 font-semibold tracking-tight text-white hover:bg-blue-700'>
              <Link href={ctaHref} onClick={() => setOpen(false)}>
                {ctaLabel}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
