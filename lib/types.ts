export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface SectionBase {
  id: string;
  type: string;
  headline: string;
  subheadline?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
}
