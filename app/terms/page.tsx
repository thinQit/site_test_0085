export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import CTASection from "@/components/CTASection"

export default function TermsPage() {
  return (
    <main>
      <HeroAurora
        badge="Effective date: 2026-01-15"
        title="Terms of Service"
        subtitle="Simple terms for using this website and purchasing the template."
        primaryCta={{ label: "View pricing", href: "/#pricing" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">Key terms</h2>
            <p className="mt-3 text-muted-foreground">The essentials, without legalese overload.</p>
          </div>
          <div className="space-y-6">
            <article>
              <h3 className="text-xl font-semibold">License</h3>
              <p className="mt-2 text-muted-foreground">
                Your purchase grants a license to use and modify the template for your own projects. Redistribution as a
                standalone template is not permitted.
              </p>
            </article>
            <article>
              <h3 className="text-xl font-semibold">Refunds</h3>
              <p className="mt-2 text-muted-foreground">
                Refund requests are accepted within 14 days of purchase if the template does not meet your needs.
              </p>
            </article>
            <article>
              <h3 className="text-xl font-semibold">Support</h3>
              <p className="mt-2 text-muted-foreground">
                Support is provided via email on business days. We aim to respond within 1 business day.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
