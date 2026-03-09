"use client";
import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";
import { Sparkles, Globe, Shield, Zap, Star, Heart, Smartphone, Search, Palette } from 'lucide-react';

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

const iconMap: Record<string, React.ElementType> = { Smartphone, Search, Palette, 
  Sparkles,
  Globe,
  Shield,
  Zap,
  Star,
  Heart,
};

export default function FeaturesCards3D({
  badge = 'Core Benefits',
  headline = 'Everything you need to convert and scale',
  subheadline = 'Purpose-built tools to capture demand, nurture leads, and close faster.',
  features = [],
}: Partial<FeaturesCards3DProps>) {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
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
              <CardContainer key={index} className="inter-var">
                <CardBody className="relative h-auto w-auto rounded-xl border border-black/[0.1] bg-background p-6 group/card dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                  <CardItem translateZ="50" className="mb-4 text-primary">
                    {React.createElement(Icon, { className: "h-8 w-8" })}
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
