export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesCards3D from "@/components/FeaturesCards3D"

export default function PrivacyPage() {
  return (
    <>
      <HeroAurora
        badge="Effective January 15, 2026"
        headline="Privacy Policy"
        subheadline="How Convertly Studio handles contact requests and website analytics."
        primaryCta={{ label: "Contact", href: "/contact" }}
        secondaryCta={{ label: "Home", href: "/" }}
      />

      <FeaturesCards3D
        badge="Summary"
        headline="We collect only what we need to respond to you and improve the site."
        features={[
          {
            icon: "UserRound",
            title: "Information you provide",
            description:
              "If you contact us, we may collect your name, email, company, and message so we can respond.",
          },
          {
            icon: "BarChart3",
            title: "Analytics",
            description:
              "We may use privacy-friendly analytics to understand page performance (e.g., which sections get clicked).",
          },
          {
            icon: "Database",
            title: "Data retention",
            description:
              "We keep contact messages as long as necessary to support your request and for recordkeeping.",
          },
        ]}
      />
    </>
  )
}
