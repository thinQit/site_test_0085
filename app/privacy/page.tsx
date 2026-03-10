export const dynamic = 'force-dynamic';

import HeroAurora from '@/components/HeroAurora'
import CTAVortex from '@/components/CTAVortex'

export default function PrivacyPage() {
  return (
    <main>
      <section className="py-20 md:py-24">
        <HeroAurora
          badge="Effective date: 2026-01-15"
          title="Privacy policy"
          subtitle="We collect the minimum information needed to respond to inquiries and improve the site experience."
          primaryCta={{ label: 'Contact', href: '/contact' }}
          secondaryCta={{ label: 'Back to Home', href: '/' }}
        />
      </section>

      <section className="py-20 md:py-24 bg-muted/40">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">What we collect</h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            A straightforward summary of data handling for a simple marketing site.
          </p>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Contact form data</h3>
              <p className="mt-2 text-gray-600">
                If you submit the contact form, we collect your name, email, and message so we can respond. We do not
                sell your information.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Analytics</h3>
              <p className="mt-2 text-gray-600">
                We may use privacy-friendly analytics to understand page performance (for example, which sections are
                most viewed).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Data retention</h3>
              <p className="mt-2 text-gray-600">
                We keep inquiry emails as long as needed to provide support and maintain business records.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Your choices</h3>
              <p className="mt-2 text-gray-600">
                You can request deletion of your inquiry data by emailing hello@conversionlanding.co.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <CTAVortex
          title="Have a privacy question?"
          subtitle="We’ll respond within 1 business day."
          ctaLabel="Email hello@conversionlanding.co"
          ctaHref="mailto:hello@conversionlanding.co"
          secondaryCtaLabel="Contact"
          secondaryCtaHref="/contact"
        />
      </section>
    </main>
  )
}
