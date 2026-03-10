export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import CTAVortex from "@/components/CTAVortex"

export default function AboutPage() {
  return (
    <>
      <HeroAurora
        badge="About Convertly"
        headline="Built for clarity, not clutter."
        subheadline="Convertly is a small studio template focused on one thing: helping your visitor understand the value and take action."
        primaryCta={{ label: "View features", href: "/features" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />

      <FeaturesCards3D
        badge="Why Convertly exists"
        headline="Most landing pages fail because they ask visitors to work too hard."
        subheadline="We built a system that keeps the message tight and the CTA obvious."
        features={[
          {
            icon: "Focus",
            title: "One primary action per section",
            description: "Reduce decision fatigue and keep the page moving forward.",
          },
          {
            icon: "Type",
            title: "High contrast, readable type",
            description:
              "White base, dark text (#111827), and a vibrant CTA for immediate clarity.",
          },
          {
            icon: "Shield",
            title: "Proof before persuasion",
            description: "Logos and testimonials appear early to build trust fast.",
          },
          {
            icon: "User",
            title: "Elena Park — Design Systems Lead",
            description:
              "Builds scalable UI systems with a focus on typography, spacing rhythm, and accessibility.",
          },
          {
            icon: "Code2",
            title: "Samir Haddad — Front-End Engineer",
            description:
              "Ships fast Next.js sites with clean Tailwind architecture and performance best practices.",
          },
          {
            icon: "Target",
            title: "Mission",
            description:
              "Make conversion-first design accessible to founders and small teams without sacrificing quality.",
          },
        ]}
      />

      <CTAVortex
        headline="Launch your next page with a system you can trust."
        subheadline="Start with a clean foundation and iterate on copy—not layout."
        ctaLabel="Get started"
        ctaHref="/pricing"
        secondaryCtaLabel="Contact"
        secondaryCtaHref="/contact"
      />
    </>
  )
}
