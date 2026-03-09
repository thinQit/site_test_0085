export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import LogoCloud from "@/components/LogoCloud"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import PricingTable from "@/components/PricingTable"
import FAQAccordion from "@/components/FAQAccordion"
import CTAVortex from "@/components/CTAVortex"

export default function HomePage() {
  return (
    <main>
      <section id="hero">
        <HeroAurora
          badge="Conversion Landing"
          title="Launch a high-converting landing page in a single afternoon."
          subtitle="A clean, conversion-first template with social proof, pricing, FAQs, and a clear CTA—built with Next.js, Tailwind, and shadcn/ui."
          primaryCta={{ label: "Get the template", href: "#pricing" }}
          secondaryCta={{ label: "See what’s included", href: "#features" }}
        />
      </section>

      <section id="social-proof" className="py-20 md:py-24">
        <LogoCloud />
      </section>

      <section id="features">
        <FeaturesCards3D
          badge="Features"
          title="Everything you need to convert—nothing you don’t."
          subtitle="A simple, focused landing page architecture with reusable components and consistent spacing."
          features={[
            {
              icon: "Sparkles",
              title: "Benefit-first hero layout",
              description:
                "Large headline, supporting copy, and two CTAs with a single primary action emphasized.",
            },
            {
              icon: "BadgeCheck",
              title: "Social proof that fits",
              description:
                "Logo row and short proof bullets to build trust without distracting from the offer.",
            },
            {
              icon: "LayoutGrid",
              title: "Scannable feature grid",
              description:
                "3×2 grid with concise titles and outcomes-focused descriptions for fast comprehension.",
            },
            {
              icon: "MessageSquareQuote",
              title: "Testimonial cards",
              description:
                "Quote, name, role, and company—designed for credibility and readability.",
            },
            {
              icon: "CreditCard",
              title: "Pricing that’s easy to choose",
              description:
                "Three tiers with a highlighted recommended plan and clear inclusions.",
            },
            {
              icon: "HelpCircle",
              title: "FAQ accordion",
              description:
                "Answer objections quickly with accessible, keyboard-friendly accordions.",
            },
          ]}
        />
      </section>

      <section id="testimonials">
        <TestimonialsAnimated
          title="Teams use it to ship faster—and convert more confidently."
          subtitle="Realistic, credible testimonials with specific outcomes and use cases."
          autoplay
          testimonials={[
            {
              quote:
                "We replaced a messy page with this layout and saw a 22% lift in demo requests within two weeks. The spacing and hierarchy just work.",
              name: "Maya Chen",
              designation: "Growth Lead, OrbitOps",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            },
            {
              quote:
                "The shadcn components made it easy to keep everything consistent. We shipped a polished page the same day we finalized the copy.",
              name: "Ethan Rivera",
              designation: "Design Engineer, Juniper Studio",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            },
            {
              quote:
                "Pricing and FAQ sections are structured perfectly for objections. We spent time on messaging instead of layout decisions.",
              name: "Priya Nair",
              designation: "Founder, BrightDesk",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg",
            },
          ]}
        />
      </section>

      <section id="pricing">
        <PricingTable
          headline="Simple pricing for shipping faster."
          subheadline="Pick a plan that matches how quickly you want to launch and iterate."
          tiers={[
            {
              name: "Starter",
              price: "$29",
              description: "For solo builders launching a single page.",
              features: [
                "Full landing page sections (8)",
                "Tailwind + shadcn/ui setup",
                "Responsive navbar + footer",
                "SEO meta + Open Graph",
              ],
              ctaLabel: "Get Starter",
              ctaHref: "#cta",
            },
            {
              name: "Team",
              price: "$59",
              description: "For teams iterating on messaging and variants.",
              features: [
                "Everything in Starter",
                "Reusable section components",
                "Testimonial + logo data models",
                "Copy checklist for conversion",
              ],
              ctaLabel: "Get Team",
              ctaHref: "#cta",
              highlighted: true,
            },
            {
              name: "Agency",
              price: "$129",
              description: "For agencies shipping multiple client pages.",
              features: [
                "Everything in Team",
                "Multi-brand theming guidance",
                "Component library page",
                "Priority setup notes",
              ],
              ctaLabel: "Get Agency",
              ctaHref: "#cta",
            },
          ]}
        />
      </section>

      <section id="faq">
        <FAQAccordion
          headline="Questions, answered."
          subheadline="Clear answers to common objections so visitors can commit with confidence."
          items={[
            {
              question: "Is this a full website or a web app starter?",
              answer:
                "It’s a marketing website landing page blueprint: conversion-focused sections, reusable components, and SEO basics—no dashboards or complex app flows.",
            },
            {
              question: "Can I change the colors and fonts easily?",
              answer:
                "Yes. The palette maps to Tailwind/shadcn tokens (primary, secondary, muted, etc.), and typography uses clean sans fonts intended for high readability.",
            },
            {
              question: "Does it include a backend or database?",
              answer:
                "No. This is intentionally frontend-only for speed. You can connect your own form provider (e.g., Formspree) or add Next.js API routes later if needed.",
            },
            {
              question: "Is it optimized for mobile?",
              answer:
                "Yes. Spacing, typography scales, and layout patterns are mobile-first with clear tap targets and a sticky CTA-friendly navbar.",
            },
            {
              question: "What should my primary CTA be?",
              answer:
                "Choose one action per page (e.g., “Start free trial”, “Book a demo”, or “Get the template”). Keep it consistent across sections to reduce decision fatigue.",
            },
          ]}
        />
      </section>

      <section id="cta">
        <CTAVortex
          title="Ready to launch a page that’s built to convert?"
          subtitle="Use a proven layout, strong visual rhythm, and a single clear CTA—then focus on your offer and messaging."
          ctaLabel="Get the template"
          ctaHref="#pricing"
          secondaryCtaLabel="Email us questions"
          secondaryCtaHref="/contact"
        />
      </section>
    </main>
  )
}
