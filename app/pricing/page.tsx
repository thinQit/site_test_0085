export const dynamic = 'force-dynamic';

import HeroAurora from '@/components/HeroAurora'
import PricingTable from '@/components/PricingTable'
import FAQAccordion from '@/components/FAQAccordion'
import CTAVortex from '@/components/CTAVortex'

export default function PricingPage() {
  return (
    <main>
      <section className="py-20 md:py-24">
        <HeroAurora
          badge="Annual billing saves 20%"
          title="Pricing that stays out of the way."
          subtitle="Choose a plan, launch your page, and iterate on your offer. Annual billing saves 20%."
          primaryCta={{ label: 'Choose Pro', href: '/contact' }}
          secondaryCta={{ label: 'Read FAQs', href: '/#faq' }}
        />
      </section>

      <section className="py-20 md:py-24 bg-muted/40">
        <PricingTable
          headline="Pick your plan"
          subheadline="Clear tiers with a recommended option to reduce decision friction."
          tiers={[
            {
              name: 'Starter',
              price: '$19',
              period: '/month',
              description: 'For solo builders validating an idea.',
              features: ['Conversion section layout', 'Tailwind tokens + typography', 'Basic SEO defaults'],
              ctaLabel: 'Get Starter',
              ctaHref: '/contact',
            },
            {
              name: 'Pro',
              price: '$49',
              period: '/month',
              description: 'For teams launching a product or service.',
              features: [
                'Everything in Starter',
                'Testimonials + logo wall',
                'Pricing + FAQ components',
                'Subtle animations',
              ],
              ctaLabel: 'Choose Pro',
              ctaHref: '/contact',
              highlighted: true,
            },
            {
              name: 'Team',
              price: '$99',
              period: '/month',
              description: 'For agencies and multi-brand rollouts.',
              features: [
                'Everything in Pro',
                'Multiple page variants',
                'Reusable section presets',
                'Priority implementation notes',
              ],
              ctaLabel: 'Talk to Sales',
              ctaHref: '/contact',
            },
          ]}
        />
      </section>

      <section className="py-20 md:py-24">
        <FAQAccordion
          headline="Pricing FAQs"
          subheadline="Quick answers to common questions about plans and billing."
          items={[
            {
              question: 'Do you offer annual billing?',
              answer: 'Yes—annual billing saves 20% compared to monthly.',
            },
            {
              question: 'Can I upgrade later?',
              answer: 'Yes. Start with Starter or Pro and upgrade anytime as your needs grow.',
            },
            {
              question: 'Do you provide implementation help?',
              answer: 'Team includes priority guidance and implementation notes for faster rollout.',
            },
          ]}
        />
      </section>

      <section className="py-20 md:py-24 bg-muted/40">
        <CTAVortex
          title="Ship your landing page this week."
          subtitle="Use a proven structure and spend your time on the offer—not the layout."
          ctaLabel="Choose Pro"
          ctaHref="/contact"
          secondaryCtaLabel="Back to Home"
          secondaryCtaHref="/"
        />
      </section>
    </main>
  )
}
