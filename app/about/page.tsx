export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import CTAVortex from "@/components/CTAVortex";
import Section from "@/components/Section";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main>
      <HeroAurora
        badge="About Convertly"
        title="Built for founders who want clarity, not clutter."
        subtitle="Convertly is a small, opinionated landing page system designed around conversion fundamentals: hierarchy, contrast, proof, and momentum."
        primaryCta={{ label: "See the sections", href: "/#features" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
      />

      <Section>
        <div className="max-w-7xl mx-auto py-20 md:py-24 px-4">
          <Card className="rounded-xl border bg-card p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Our approach
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              A landing page is a sales conversation. We structure it so visitors
              always know what you do, why it matters, and what to do next.
            </p>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                We’ve shipped dozens of launch pages across SaaS, agencies, and
                ecommerce. The highest-performing pages share the same traits:
                clear promise, strong proof, and frictionless CTAs.
              </p>
              <p>
                Convertly packages those patterns into a clean, modern design
                system using Next.js, Tailwind, and shadcn/ui—so you can ship fast
                and iterate confidently.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <FeaturesCards3D
        badge="Small team, high standards"
        title="Design-minded builders focused on clarity and conversion."
        features={[
          {
            icon: "Palette",
            title: "Avery Kim — Design Systems",
            description:
              "Creates scalable type, spacing, and component patterns that feel premium and readable.",
          },
          {
            icon: "Code2",
            title: "Jordan Lee — Front-End",
            description:
              "Builds fast, accessible UI with Tailwind and shadcn/ui, optimized for performance.",
          },
          {
            icon: "PenLine",
            title: "Priya Nair — Copy & Conversion",
            description:
              "Writes benefit-led messaging and CTA flows that reduce friction and increase intent.",
          },
        ]}
      />

      <CTAVortex
        title="Ship your next launch page today."
        subtitle="Use Convertly’s proven flow and customize it to your product in minutes."
        ctaLabel="Get Convertly"
        ctaHref="/#pricing"
        secondaryCtaLabel="Back to home"
        secondaryCtaHref="/"
      />
    </main>
  );
}
