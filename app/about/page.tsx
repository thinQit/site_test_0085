export const dynamic = 'force-dynamic';

import HeroAurora from '@/components/HeroAurora'
import TeamGrid from '@/components/TeamGrid'
import CTAVortex from '@/components/CTAVortex'

export default function AboutPage() {
  return (
    <main>
      <section className="py-20 md:py-24">
        <HeroAurora
          badge="Built from real launches"
          title="Built for clarity, speed, and trust."
          subtitle="We’ve shipped dozens of marketing sites and distilled what works into a simple, conversion-first structure you can reuse for any launch."
          primaryCta={{ label: 'See Pricing', href: '/pricing' }}
          secondaryCta={{ label: 'Contact', href: '/contact' }}
        />
      </section>

      <section className="py-20 md:py-24 bg-muted/40">
        <TeamGrid
          headline="A small team that obsesses over conversion details."
          subheadline="Design, copy structure, and implementation notes—so you can launch confidently."
          members={[
            {
              name: 'Avery Thompson',
              title: 'Product Designer',
              imageUrl: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
              bio: 'Specializes in high-contrast UI systems and landing page information hierarchy.',
            },
            {
              name: 'Samir Khan',
              title: 'Front-End Engineer',
              imageUrl: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
              bio: 'Next.js + Tailwind specialist focused on performance and clean component architecture.',
            },
            {
              name: 'Priya Nair',
              title: 'Copy & Positioning',
              imageUrl: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
              bio: 'Turns feature lists into benefit-driven sections that read like a real business.',
            },
          ]}
        />
      </section>

      <section className="py-20 md:py-24">
        <CTAVortex
          title="Want this structure for your next launch?"
          subtitle="Use the starter as-is, or tailor it to your brand in a day."
          ctaLabel="Get Started"
          ctaHref="/contact"
          secondaryCtaLabel="Pricing"
          secondaryCtaHref="/pricing"
        />
      </section>
    </main>
  )
}
