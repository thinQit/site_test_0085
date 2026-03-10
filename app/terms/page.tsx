export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesCards3D from "@/components/FeaturesCards3D"

export default function TermsPage() {
  return (
    <>
      <HeroAurora
        badge="Effective January 15, 2026"
        title="Terms of Service"
        subtitle="The terms that apply when you purchase and use Convertly templates."
        primaryCta={{ label: "View pricing", href: "/pricing" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />

      <FeaturesCards3D
        badge="Key terms"
        title="A plain-language overview of licensing and refunds."
        features={[
          {
            icon: "FileText",
            title: "License",
            description:
              "Starter and Pro are single-project licenses. Agency supports multiple projects and client work.",
          },
          {
            icon: "RotateCcw",
            title: "Refunds",
            description: "Refunds are available within 14 days of purchase upon request.",
          },
          {
            icon: "LifeBuoy",
            title: "Support",
            description: "Email support is available Mon–Fri, 9:00 AM–5:00 PM PT.",
          },
        ]}
      />
    </>
  )
}
