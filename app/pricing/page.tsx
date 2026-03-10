export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import PricingTable from "@/components/PricingTable"
import FAQAccordion from "@/components/FAQAccordion"
import CTAVortex from "@/components/CTAVortex"
import ComparisonTable from "@/components/ComparisonTable"

export default function PricingPage() {
  return (
    <>
      <HeroAurora
        badge="One-time pricing"
        headline="Pricing that stays simple."
        subheadline="One-time plans for fast launches—no subscriptions, no surprises."
        primaryCta={{ label: "Choose Pro", href: "#plans" }}
        secondaryCta={{ label: "Compare plans", href: "#plans" }}
      />

      <div id="plans">
        <PricingTable
          headline="Plans"
          subheadline="Pick the license that matches your use case."
          tiers={[
            {
              name: "Starter",
              price: "$29",
              period: "one-time",
              description: "Single project license.",
              features: [
                "Home page sections",
                "Reusable components",
                "Light theme optimized for conversion",
              ],
              ctaLabel: "Buy Starter",
              ctaHref: "/contact",
              highlighted: false,
            },
            {
              name: "Pro",
              price: "$59",
              period: "one-time",
              description: "Best for teams and multiple pages.",
              features: [
                "Home + About + Features + Contact",
                "Pricing + FAQ patterns",
                "Animation presets",
              ],
              ctaLabel: "Buy Pro",
              ctaHref: "/contact",
              highlighted: true,
            },
            {
              name: "Agency",
              price: "$129",
              period: "one-time",
              description: "Multi-client usage.",
              features: ["Multi-project license", "Section library page", "Brand tokens guide"],
              ctaLabel: "Buy Agency",
              ctaHref: "/contact",
              highlighted: false,
            },
          ]}
        />
      </div>

      <ComparisonTable />

      <div id="faq">
        <FAQAccordion
          headline="Pricing FAQ"
          subheadline="Quick answers about licensing and usage."
          items={[
            {
              question: "Is the payment recurring?",
              answer: "No. All plans are one-time purchases.",
            },
            {
              question: "Can I use this for client work?",
              answer: "Yes—choose the Agency plan for multi-project usage.",
            },
            {
              question: "Do you offer refunds?",
              answer: "Yes. 14-day refund policy if it’s not a fit.",
            },
          ]}
        />
      </div>

      <CTAVortex
        headline="Want help tailoring the copy to your product?"
        subheadline="We can help you tighten messaging and align each section to one clear action."
        ctaLabel="Contact us"
        ctaHref="/contact"
        secondaryCtaLabel="View features"
        secondaryCtaHref="/features"
      />
    </>
  )
}
