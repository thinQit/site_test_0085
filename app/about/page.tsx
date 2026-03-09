export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import TeamGrid from "@/components/TeamGrid"
import CTAVortex from "@/components/CTAVortex"

export default function AboutPage() {
  return (
    <main>
      <HeroAurora
        badge="About"
        title="A landing page system designed for clarity and action."
        subtitle="We obsess over hierarchy, spacing, and copy structure so your visitors can decide quickly—and confidently."
        primaryCta={{ label: "See features", href: "/#features" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />

      <TeamGrid
        headline="Built by people who ship."
        subheadline="A small team focused on fast, polished marketing sites."
        members={[
          {
            name: "Alex Morgan",
            title: "Product Designer",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            bio: "Designs conversion-first layouts with strong typography and clear visual rhythm.",
          },
          {
            name: "Samira Patel",
            title: "Front-End Engineer",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            bio: "Builds accessible, responsive components with Tailwind and shadcn/ui.",
          },
          {
            name: "Jordan Lee",
            title: "Copy & Messaging",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg",
            bio: "Turns product value into scannable, benefit-led sections and CTAs.",
          },
        ]}
      />

      <CTAVortex
        title="Want a landing page you can iterate on weekly?"
        subtitle="Start with a clean foundation and refine your message—not your layout."
        ctaLabel="Get the template"
        ctaHref="/#pricing"
        secondaryCtaLabel="Contact"
        secondaryCtaHref="/contact"
      />
    </main>
  )
}
