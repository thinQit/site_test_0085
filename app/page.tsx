export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import LogoCloud from "@/components/LogoCloud";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import PricingTable from "@/components/PricingTable";
import FAQAccordion from "@/components/FAQAccordion";
import CTAVortex from "@/components/CTAVortex";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <main>
      <section id="hero">
        <HeroAurora
          badge="Built with Next.js + Tailwind + shadcn/ui"
          title="Launch a landing page that turns visits into signups."
          subtitle="Convertly is a conversion-first Next.js landing page kit with crisp sections, strong CTA hierarchy, and copy that’s ready to ship. Perfect for waitlists, product launches, and lead gen."
          primaryCta={{ label: "Get the template", href: "#pricing" }}
          secondaryCta={{ label: "See what’s included", href: "#features" }}
        />
      </section>

      <Section>
        <section id="social-proof" className="py-20 md:py-24">
          <LogoCloud />
        </section>
      </Section>

      <section id="features">
        <FeaturesCards3D
          badge="Designed for conversion"
          title="Everything you need to convert—nothing you don’t."
          subtitle="A simple, structured landing page with clear messaging, strong hierarchy, and reusable components."
          features={[
            {
              icon: "LayoutGrid",
              title: "Benefit-led sections",
              description:
                "Hero, social proof, features, testimonials, pricing, FAQ, and final CTA—arranged for momentum and clarity.",
            },
            {
              icon: "MousePointerClick",
              title: "One CTA per section",
              description:
                "Each section has a single primary action to reduce decision fatigue and increase clicks.",
            },
            {
              icon: "Component",
              title: "Polished UI components",
              description:
                "shadcn/ui building blocks styled for a clean, modern look.",
            },
            {
              icon: "Smartphone",
              title: "Responsive by default",
              description:
                "Mobile-first layouts with readable type scales and comfortable spacing across breakpoints.",
            },
            {
              icon: "Search",
              title: "SEO-ready structure",
              description:
                "Semantic headings, clean navigation, and metadata defaults to help your page rank and share well.",
            },
            {
              icon: "Zap",
              title: "Fast to customize",
              description:
                "Swap colors, copy, and sections quickly—without rewriting layout logic.",
            },
          ]}
        />
      </section>

      <section id="testimonials">
        <TestimonialsAnimated
          title="Copy and layout that feel credible."
          subtitle="Realistic testimonials you can replace with your own—structured to reduce risk and build trust."
          autoplay
          testimonials={[
            {
              quote:
                "We shipped a waitlist page in a single afternoon. The CTA hierarchy and spacing made it feel premium without extra design work.",
              name: "Maya Chen",
              designation: "Growth Lead, Northwind Labs",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            },
            {
              quote:
                "The pricing section is clean and persuasive. We saw a noticeable lift in clicks to signup compared to our previous page.",
              name: "Ethan Rivera",
              designation: "Founder, Juniper Studio",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            },
            {
              quote:
                "Simple, fast, and easy to customize. The sections are exactly what we need for client launches.",
              name: "Sofia Patel",
              designation: "Creative Director, Brightside Ventures",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg",
            },
          ]}
        />
      </section>

      <section id="pricing">
        <PricingTable
          headline="Simple pricing for a simple launch."
          subheadline="Choose a plan that matches your timeline. Upgrade anytime."
          tiers={[
            {
              name: "Starter",
              price: "$29",
              description: "For solo founders launching a waitlist or MVP.",
              features: [
                "Full landing page (8 sections)",
                "Responsive layout + accessible components",
                "SEO meta defaults + Open Graph",
                "Basic customization guide",
              ],
              ctaLabel: "Get Starter",
              ctaHref: "#cta",
            },
            {
              name: "Pro",
              price: "$59",
              description: "For teams that want faster iteration and polish.",
              features: [
                "Everything in Starter",
                "Extra section variants (2 hero options, 2 pricing layouts)",
                "Animation presets (fade-in-up + stagger)",
                "Copy checklist for conversion",
              ],
              ctaLabel: "Get Pro",
              ctaHref: "#cta",
              highlighted: true,
            },
            {
              name: "Studio",
              price: "$129",
              description:
                "For agencies and studios shipping multiple client pages.",
              features: [
                "Everything in Pro",
                "Reusable component library page",
                "Multi-brand color presets (blue/purple/green accents)",
                "Priority support (email, 48-hour response)",
              ],
              ctaLabel: "Get Studio",
              ctaHref: "#cta",
            },
          ]}
        />
      </section>

      <section id="faq">
        <FAQAccordion
          headline="Questions, answered."
          subheadline="Everything you need to know before you ship."
          items={[
            {
              question: "Do I need a backend or database?",
              answer:
                "No. This is a static marketing site by default. You can add a form provider later if you want email capture.",
            },
            {
              question: "Can I change the colors and fonts?",
              answer:
                "Yes. The palette is defined as tokens and the typography uses clean sans fonts that are easy to swap globally.",
            },
            {
              question: "Is it optimized for mobile?",
              answer:
                "Yes. Spacing, type scale, and grids are designed mobile-first with clear tap targets and readable line lengths.",
            },
            {
              question: "What’s included in the template?",
              answer:
                "A full landing page with hero, social proof, features, testimonials, pricing, FAQ, final CTA, and footer.",
            },
            {
              question: "Can I deploy to Vercel?",
              answer:
                "Yes. It’s a standard Next.js project—connect the repo and deploy.",
            },
          ]}
        />
      </section>

      <section id="cta">
        <CTAVortex
          title="Ready to publish a landing page that converts?"
          subtitle="Ship today with a clean, high-contrast design system and a proven section flow."
          ctaLabel="Get Convertly"
          ctaHref="#pricing"
          secondaryCtaLabel="Email us"
          secondaryCtaHref="mailto:hello@convertly.page"
        />
      </section>
    </main>
  );
}
