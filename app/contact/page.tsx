export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import ContactForm from "@/components/ContactForm"
import CTAVortex from "@/components/CTAVortex"

export default function ContactPage() {
  return (
    <main>
      <HeroAurora
        badge="Contact"
        title="Questions before you buy?"
        subtitle="Send a message and we’ll reply within 1 business day."
        primaryCta={{ label: "Email support", href: "mailto:support@conversionlanding.com" }}
        secondaryCta={{ label: "See FAQ", href: "/#faq" }}
      />

      <ContactForm
        headline="Send a message"
        subheadline="Tell us what you’re building and what you need help with."
        contactInfo={[
          { icon: "Mail", label: "Email", value: "support@conversionlanding.com" },
          { icon: "Clock3", label: "Response time", value: "Within 1 business day" },
          { icon: "CalendarClock", label: "Hours", value: "Mon–Fri, 9:00–17:00 PT" },
        ]}
      />

      <CTAVortex
        title="Prefer to skip the email?"
        subtitle="Go straight to pricing and choose the plan that fits your launch timeline."
        ctaLabel="Go to pricing"
        ctaHref="/#pricing"
        secondaryCtaLabel="Back to home"
        secondaryCtaHref="/"
      />
    </main>
  )
}
