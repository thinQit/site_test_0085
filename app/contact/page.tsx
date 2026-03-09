export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import ContactForm from "@/components/ContactForm";
import CTAVortex from "@/components/CTAVortex";

export default function ContactPage() {
  return (
    <main>
      <HeroAurora
        badge="Contact"
        title="Contact Convertly"
        subtitle="Have a question about the template, licensing, or customization? Send a note and we’ll reply within 2 business days."
        primaryCta={{ label: "Email hello@convertly.page", href: "mailto:hello@convertly.page" }}
        secondaryCta={{ label: "View FAQ", href: "/#faq" }}
      />

      <ContactForm
        headline="Send a message"
        subheadline="This site is backend-free by default. The form can be wired to your preferred provider (Formspree, Basin, or a simple mailto)."
        contactInfo={[
          { icon: "Mail", label: "Email", value: "hello@convertly.page" },
          { icon: "Clock3", label: "Response time", value: "Within 2 business days" },
          { icon: "MapPin", label: "Location", value: "San Francisco, CA" },
        ]}
      />

      <CTAVortex
        title="Want to see the full flow?"
        subtitle="The homepage includes every conversion section: proof, features, testimonials, pricing, FAQ, and a final CTA."
        ctaLabel="Go to homepage"
        ctaHref="/"
        secondaryCtaLabel="See pricing"
        secondaryCtaHref="/#pricing"
      />
    </main>
  );
}
