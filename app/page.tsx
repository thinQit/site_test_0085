export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import LogoStrip from "@/components/LogoStrip"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import TestimonialCards from "@/components/TestimonialCards"
import PricingTable from "@/components/PricingTable"
import FAQAccordion from "@/components/FAQAccordion"
import CTAVortex from "@/components/CTAVortex"

export default function HomePage() {
  return (
    <>
      <HeroAurora
        badge="Conversion-First Template"
        headline="Launch a high-converting landing page in a weekend—without design debt."
        subheadline="Convertly is a clean, conversion-driven Next.js landing page system with proven sections, crisp typography, and a vibrant CTA that stands out."
        primaryCta={{ label: "Get the template", href: "#pricing" }}
        secondaryCta={{ label: "See how it works", href: "#features" }}
      />

      <LogoStrip />

      <div id="features">
        <FeaturesCards3D
          badge="Everything you need"
          headline="Everything you need to convert—nothing you don’t."
          subheadline="Each section is built to answer buyer questions quickly: what it is, why it matters, and what to do next."
          features={[
            {
              icon: "LayoutTemplate",
              title: "Benefit-first copy blocks",
              description:
                "Pre-structured headings and subheadlines that keep messaging crisp and skimmable.",
            },
            {
              icon: "MousePointerClick",
              title: "Vibrant CTA system",
              description:
                "Primary CTA uses #2563EB with strong contrast; secondary actions stay subtle to reduce distraction.",
            },
            {
              icon: "ShieldCheck",
              title: "Social proof that fits",
              description:
                "Logo strip + testimonials designed to sit naturally under the hero without pushing content down.",
            },
            {
              icon: "CreditCard",
              title: "Pricing that’s easy to compare",
              description:
                "Simple tiers with a highlighted most-popular plan and clear inclusions.",
            },
            {
              icon: "CircleHelp",
              title: "FAQ that removes friction",
              description:
                "Accordion layout that answers objections right before the final CTA.",
            },
            {
              icon: "SearchCheck",
              title: "SEO-ready structure",
              description:
                "Semantic sections, sensible heading hierarchy, and metadata defaults for sharing.",
            },
          ]}
        />
      </div>

      <TestimonialCards />

      <div id="pricing">
        <PricingTable
          headline="Simple pricing for a fast launch."
          subheadline="Pick a plan that matches your timeline. Upgrade anytime."
          tiers={[
            {
              name: "Starter",
              price: "$29",
              period: "one-time",
              description: "For solo founders launching a single product page.",
              features: [
                "Home page with 8 sections",
                "Reusable components (Navbar, Footer, CTA blocks)",
                "Basic SEO meta defaults",
                "Email capture form (static, no backend)",
              ],
              ctaLabel: "Get Starter",
              ctaHref: "#cta",
              highlighted: false,
            },
            {
              name: "Pro",
              price: "$59",
              period: "one-time",
              description: "For teams who want extra pages and polish.",
              features: [
                "Everything in Starter",
                "About + Contact + Features pages",
                "Pricing comparison table styling",
                "Testimonial variants (cards + quotes)",
                "Animation presets (subtle on-scroll)",
              ],
              ctaLabel: "Get Pro",
              ctaHref: "#cta",
              highlighted: true,
            },
            {
              name: "Agency",
              price: "$129",
              period: "one-time",
              description: "For client work and multiple launches.",
              features: [
                "Everything in Pro",
                "Multi-project license",
                "Section library page",
                "Brand tokens guide (colors/typography/spacing)",
                "Priority updates (template improvements)",
              ],
              ctaLabel: "Get Agency",
              ctaHref: "#cta",
              highlighted: false,
            },
          ]}
        />
      </div>

      <div id="faq">
        <FAQAccordion
          headline="FAQ"
          subheadline="Everything you need to know before you ship."
          items={[
            {
              question: "Is this a web app template?",
              answer:
                "No—this is a marketing website template focused on conversion sections: hero, proof, features, testimonials, pricing, FAQ, and CTAs.",
            },
            {
              question: "Do I need a backend or database?",
              answer:
                "No. The default setup is static. If you later want email capture or analytics integrations, you can add them without changing the design system.",
            },
            {
              question: "Can I change the CTA color?",
              answer:
                "Yes. The design system is token-based. Primary is set to #2563EB and accent to #7C3AED, but you can swap tokens while keeping contrast and hierarchy.",
            },
            {
              question: "Does it support dark mode?",
              answer:
                "This blueprint is optimized for a high-contrast light theme to maximize clarity and conversion. Dark mode can be added later if needed.",
            },
            {
              question: "What’s included in the pages?",
              answer:
                "Home, About, Features, Pricing, and Contact—each with a hero, content sections, a CTA, and a footer.",
            },
          ]}
        />
      </div>

      <div id="cta">
        <CTAVortex
          headline="Ready to turn your landing page into signups?"
          subheadline="Launch a clean, conversion-first site with a proven layout and a design system you won’t fight later."
          ctaLabel="Get Convertly"
          ctaHref="#pricing"
          secondaryCtaLabel="View Features"
          secondaryCtaHref="/features"
        />
      </div>
    </>
  )
}
