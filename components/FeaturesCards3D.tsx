'use client';
import React from 'react';
import { Sparkles, Shield, Zap, Globe, BarChart3, Rocket, CreditCard, HelpCircle } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from '@/components/ui/effects/3d-card-effect';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

export default function FeaturesCards3D({
  badge = 'Core Benefits',
  headline = 'Everything you need to increase conversion',
  subheadline = 'Purpose-built components and messaging patterns designed for revenue impact.',
  features = [],
}: Partial<FeaturesCards3DProps>) {
  const iconMap: Record<string, React.ElementType> = { CreditCard, HelpCircle, 
    Sparkles,
    Shield,
    Zap,
    Globe,
    BarChart3,
    Rocket,
  };

  return (
    <section className="py-20 md:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <CardContainer key={index} className="inter-var w-full">
                <CardBody className="group/card relative h-auto w-full rounded-xl border border-border bg-card p-6 shadow-sm">
                  <CardItem translateZ="50" className="mb-4">
                    {React.createElement(Icon, { className: 'h-8 w-8 text-primary' })}
                  </CardItem>
                  <CardItem translateZ="60" className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ="40" className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
