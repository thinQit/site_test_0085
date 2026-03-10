export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import CTAVortex from "@/components/CTAVortex"

export default function FeaturesPage() {
  return (
    <>
      <HeroAurora
        badge="Features"
        headline="Conversion sections, pre-built and ready to customize."
        subheadline="Use a proven page flow and swap in your product copy, screenshots, and testimonials in minutes."
        primaryCta={{ label: "See pricing", href: "/pricing" }}
        secondaryCta={{ label: "Back to home", href: "/" }}
      />

      <FeaturesCards3D
        badge="Section library"
        headline="Mix and match sections while keeping a consistent rhythm and hierarchy."
        subheadline="Built for clarity from hero to final CTA."
        features={[
          {
            icon: "Rocket",
            title: "Hero",
            description: "Clarify value proposition and drive the first click.",
          },
          {
            icon: "Grid3X3",
            title: "Features",
            description: "Explain how it works and why it’s better.",
          },
          {
            icon: "MessageSquareQuote",
            title: "Testimonials",
            description: "Reduce perceived risk with real outcomes.",
          },
          {
            icon: "BadgeDollarSign",
            title: "Pricing",
            description: "Make the decision easy with clear tiers.",
          },
          {
            icon: "ListChecks",
            title: "FAQ",
            description: "Handle objections before the final conversion step.",
          },
          {
            icon: "Flag",
            title: "Final CTA",
            description: "Close with one strong action and minimal friction.",
          },
        ]}
      />

      <CTAVortex
        headline="Ship your next landing page with confidence."
        subheadline="A clean system that keeps the focus on the CTA—without sacrificing polish."
        ctaLabel="View pricing"
        ctaHref="/pricing"
        secondaryCtaLabel="Contact sales"
        secondaryCtaHref="/contact"
      />
    </>
  )
}
