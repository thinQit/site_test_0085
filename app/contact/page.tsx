export const dynamic = 'force-dynamic';

import HeroAurora from '@/components/HeroAurora'
import ContactForm from '@/components/ContactForm'
import CTAVortex from '@/components/CTAVortex'

export default function ContactPage() {
  return (
    <main>
      <section className="py-20 md:py-24">
        <HeroAurora
          badge="Replies within 1 business day"
          title="Talk to us before you launch."
          subtitle="Have questions about the starter, pricing, or how to tailor the copy to your offer? Send a note and we’ll reply within 1 business day."
          primaryCta={{ label: 'Email Us', href: 'mailto:hello@conversionlanding.co' }}
          secondaryCta={{ label: 'View Pricing', href: '/pricing' }}
        />
      </section>

      <section className="py-20 md:py-24 bg-muted/40">
        <ContactForm
          headline="Send a message"
          subheadline="Tell us what you’re launching and your timeline. We’ll point you to the best plan and next steps."
          contactInfo={[
            { icon: 'Mail', label: 'Email', value: 'hello@conversionlanding.co' },
            { icon: 'Phone', label: 'Phone', value: '+1 (415) 555-0138' },
            { icon: 'Clock3', label: 'Hours', value: 'Mon–Fri, 9:00 AM–5:00 PM PT' },
          ]}
        />
      </section>

      <section className="py-20 md:py-24">
        <CTAVortex
          title="Prefer to start now?"
          subtitle="Pick a plan and customize the copy as you go."
          ctaLabel="Choose Pro"
          ctaHref="/pricing"
          secondaryCtaLabel="Back to Home"
          secondaryCtaHref="/"
        />
      </section>
    </main>
  )
}
