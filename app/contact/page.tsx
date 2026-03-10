export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import ContactForm from "@/components/ContactForm"
import CTAVortex from "@/components/CTAVortex"

export default function ContactPage() {
  return (
    <>
      <HeroAurora
        badge="Contact"
        headline="Contact Convertly"
        subheadline="Questions about licensing or want help tailoring your landing page copy? We’ll reply within 1 business day."
        primaryCta={{ label: "Email us", href: "mailto:hello@convertly.studio" }}
        secondaryCta={{ label: "View pricing", href: "/pricing" }}
      />

      <ContactForm
        headline="Send a message"
        subheadline="Tell us what you’re building and what you want the page to achieve."
        contactInfo={[
          { icon: "Mail", label: "Email", value: "hello@convertly.studio" },
          { icon: "Briefcase", label: "Sales", value: "sales@convertly.studio" },
          { icon: "Receipt", label: "Billing", value: "billing@convertly.studio" },
          { icon: "Clock3", label: "Hours", value: "Mon–Fri, 9:00 AM–5:00 PM PT" },
        ]}
      />

      <CTAVortex
        headline="Prefer to self-serve?"
        subheadline="Compare plans and pick the one that matches your launch timeline."
        ctaLabel="View pricing"
        ctaHref="/pricing"
        secondaryCtaLabel="View features"
        secondaryCtaHref="/features"
      />
    </>
  )
}
