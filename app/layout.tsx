import './globals.css'
import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import NavbarSticky from '@/components/NavbarSticky'
import FooterMultiColumn from '@/components/FooterMultiColumn'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

export const metadata: Metadata = {
  title: 'Conversion Landing — A clean, high-converting landing page starter',
  description:
    'Launch a conversion-focused landing page with Next.js, Tailwind, and shadcn/ui. Includes hero, social proof, features, testimonials, pricing, FAQ, and final CTA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans bg-white text-gray-900`}>
        <NavbarSticky
          logo="Conversion Landing"
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Features', href: '/#features' },
            { label: 'Testimonials', href: '/#testimonials' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'FAQ', href: '/#faq' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Get the Starter"
          ctaHref="/pricing"
        />
        {children}
        <FooterMultiColumn
          brand="Conversion Landing"
          description="A clean, conversion-driven landing page starter."
          columns={[
            {
              title: 'Product',
              links: [
                { label: 'Features', href: '/#features' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'FAQ', href: '/#faq' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy', href: '/privacy' },
              ],
            },
            {
              title: 'Get in touch',
              links: [
                { label: 'hello@conversionlanding.co', href: 'mailto:hello@conversionlanding.co' },
                { label: '+1 (415) 555-0138', href: 'tel:+14155550138' },
                {
                  label: '548 Market St, San Francisco, CA 94104',
                  href: 'https://maps.google.com/?q=548+Market+St,+San+Francisco,+CA+94104',
                },
              ],
            },
          ]}
          copyright="© 2026 Conversion Landing. All rights reserved."
        />
      </body>
    </html>
  )
}
