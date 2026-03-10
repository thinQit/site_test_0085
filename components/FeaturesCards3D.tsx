"use client";
import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";
import { Sparkles, Globe, Shield, Star, Zap, Heart, ShieldCheck, CreditCard, Rocket, ListChecks, Flag, Type, User, Target, BarChart3, Database, FileText, LifeBuoy } from 'lucide-react';
import React from "react";

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

const iconMap: Record<string, React.ElementType> = { ShieldCheck, CreditCard, Rocket, ListChecks, Flag, Type, User, Target, BarChart3, Database, FileText, LifeBuoy, 
  Sparkles,
  Globe,
  Shield,
  Star,
  Zap,
  Heart,
};

export default function FeaturesCards3D({
  badge = '',
  headline = 'Everything you need to increase conversions',
  subheadline = '',
  features = [],
}: Partial<FeaturesCards3DProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
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
                <CardBody className="relative group/card border-black/[0.1] w-auto h-auto rounded-xl border bg-background p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
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
