export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import CTASection from "@/components/CTASection"

export default function PrivacyPage() {
  return (
    <main>
      <HeroAurora
        badge="Effective date: 2026-01-15"
        title="Privacy Policy"
        subtitle="A plain-language overview of how we handle information on this website."
        primaryCta={{ label: "Contact", href: "/contact" }}
        secondaryCta={{ label: "Home", href: "/" }}
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">What we collect</h2>
            <p className="mt-3 text-muted-foreground">We keep it minimal.</p>
          </div>
          <div className="space-y-6">
            <article>
              <h3 className="text-xl font-semibold">Contact form information</h3>
              <p className="mt-2 text-muted-foreground">
                If you contact us, we collect the information you provide (name, email, and message) to respond to your
                request.
              </p>
            </article>
            <article>
              <h3 className="text-xl font-semibold">Analytics</h3>
              <p className="mt-2 text-muted-foreground">
                If analytics are enabled during implementation, they may collect anonymized usage data such as page views
                and device type.
              </p>
            </article>
            <article>
              <h3 className="text-xl font-semibold">Data retention</h3>
              <p className="mt-2 text-muted-foreground">
                We retain messages only as long as needed to provide support and maintain business records.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
