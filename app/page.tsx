export const dynamic = 'force-dynamic';

import HeroAurora from '@/components/HeroAurora'
import LogoCloud from '@/components/LogoCloud'
import FeaturesCards3D from '@/components/FeaturesCards3D'
import TestimonialsAnimated from '@/components/TestimonialsAnimated'
import PricingTable from '@/components/PricingTable'
import FAQAccordion from '@/components/FAQAccordion'
import CTAVortex from '@/components/CTAVortex'

export default function HomePage() {
  return (
    <main>
      <HeroAurora
        badge="No backend required • SEO-ready • Mobile-first"
        title="Launch a high-converting landing page in a single afternoon."
        subtitle="Conversion Landing is a clean, focused Next.js + Tailwind + shadcn/ui starter with the exact sections you need: social proof, features, testimonials, pricing, FAQ, and a final CTA—no fluff."
        primaryCta={{ label: 'Get the Starter', href: '/pricing' }}
        secondaryCta={{ label: 'See How It Works', href: '#features' }}
      />

      <section id="social-proof" className="py-20 md:py-24">
        <LogoCloud />
      </section>

      <section id="features" className="py-20 md:py-24 bg-muted/40">
        <FeaturesCards3D
          badge="Built for conversion"
          title="Everything you need to convert—nothing you don’t."
          subtitle="Designed for clarity: one message, one action, and a smooth path from curiosity to signup."
          features={[
            {
              icon: 'LayoutTemplate',
              title: 'Benefit-first sections',
              description:
                'Pre-written structure for hero, proof, features, testimonials, pricing, FAQ, and final CTA—so you can focus on your offer.',
            },
            {
              icon: 'MousePointerClick',
              title: 'High-contrast CTA system',
              description:
                'White base, dark text, vibrant primary CTA with consistent button hierarchy and spacing.',
            },
            {
              icon: 'Smartphone',
              title: 'Responsive by default',
              description:
                'Mobile-first layout patterns: stacked grids, readable typography, and touch-friendly CTAs.',
            },
            {
              icon: 'Component',
              title: 'shadcn/ui components',
              description:
                'Use accessible primitives (Accordion, Tabs, Cards, Buttons) with Tailwind tokens for fast iteration.',
            },
            {
              icon: 'Search',
              title: 'SEO-ready page structure',
              description:
                'Clear headings, semantic sections, and metadata defaults to help your landing page rank and share well.',
            },
            {
              icon: 'Sparkles',
              title: 'Subtle motion, not distraction',
              description:
                'Optional fade-in-up reveals and staggered grids to guide attention without slowing the page down.',
            },
          ]}
        />
      </section>

      <section id="testimonials" className="py-20 md:py-24">
        <TestimonialsAnimated
          title="Copy that reads like a real business."
          subtitle="Realistic testimonials and pricing help you ship a credible first version—then customize to your brand."
          autoplay
          testimonials={[
            {
              quote:
                'We replaced our cluttered page with this layout and immediately got cleaner demos—people finally understood what we do in 10 seconds.',
              name: 'Maya Chen',
              designation: 'Growth Lead, Metricly',
              src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
            },
            {
              quote:
                'The section flow is perfect: proof → features → pricing. We launched in a day and spent the rest of the week improving the offer instead of the UI.',
              name: 'Jonas Patel',
              designation: 'Founder, Northwind Labs',
              src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
            },
            {
              quote:
                'The CTA hierarchy is the best part. It keeps the page focused and prevents the “too many buttons” problem.',
              name: 'Elena Ruiz',
              designation: 'Design Director, Juniper Studio',
              src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
            },
          ]}
        />
      </section>

      <section id="pricing" className="py-20 md:py-24 bg-muted/40">
        <PricingTable
          headline="Simple pricing that makes the next step obvious."
          subheadline="Pick a plan that matches your launch timeline. Upgrade anytime."
          tiers={[
            {
              name: 'Starter',
              price: '$19',
              period: '/month',
              description: 'For solo builders validating an idea.',
              features: ['Full landing page sections', 'Responsive layout + tokens', 'Basic SEO metadata'],
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
                'Testimonial + logo components',
                'Pricing table + FAQ accordion',
                'Polished animations',
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

      <section id="faq" className="py-20 md:py-24">
        <FAQAccordion
          headline="Questions, answered."
          subheadline="Everything you need to know before you commit."
          items={[
            {
              question: 'Is this a website or a web app starter?',
              answer:
                'It’s a marketing website starter focused on conversion sections (hero, proof, features, testimonials, pricing, FAQ, CTA). No dashboards or app flows.',
            },
            {
              question: 'Do I need a backend or database?',
              answer:
                'No. The default setup is static/SSR-friendly with no backend. You can add a form provider later if you want.',
            },
            {
              question: 'Can I change the CTA color from blue to purple?',
              answer:
                'Yes. The palette includes both a primary blue and a secondary purple. Use one as the main CTA and keep the other for accents to maintain clarity.',
            },
            {
              question: 'What’s included for SEO?',
              answer:
                'Semantic headings, clean section structure, and page-level metadata defaults. Add Open Graph images and structured data as needed.',
            },
            {
              question: 'Is it accessible?',
              answer:
                'The UI uses accessible primitives with high contrast and clear focus rings to support keyboard navigation.',
            },
          ]}
        />
      </section>

      <section id="cta" className="py-20 md:py-24 bg-muted/40">
        <CTAVortex
          title="Ready to ship a landing page that converts?"
          subtitle="Start with a proven layout, then tailor the copy to your offer. Your next signup is one clean page away."
          ctaLabel="Get Started Now"
          ctaHref="/contact"
          secondaryCtaLabel="Read About"
          secondaryCtaHref="/about"
        />
      </section>
    </main>
  )
}
