export interface NavItem {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

export interface PricingTier {
  name: string;
  priceMonthly: number;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
  recommended?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
