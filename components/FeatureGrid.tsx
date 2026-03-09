"use client";

import { BarChart3, Bot, Clock3, Layers3, ShieldCheck, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface FeatureItem {
  title: string
  description: string
  icon: string
}

interface FeatureGridProps {
  title?: string
  subtitle?: string
  features?: FeatureItem[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Bot,
  BarChart3,
  Layers3,
  ShieldCheck,
  Clock3,
}

export default function FeatureGrid({
  title = 'Everything your revenue team needs to convert faster',
  subtitle = 'Purpose-built features that remove busywork and keep every rep focused on qualified opportunities.',
  features = [
    { title: 'Smart Lead Scoring', description: 'Automatically prioritize accounts with highest win potential.', icon: 'BarChart3' },
    { title: 'AI Outreach Drafts', description: 'Generate personalized first-touch messages in seconds.', icon: 'Bot' },
    { title: 'Multi-Channel Sequences', description: 'Coordinate email, LinkedIn, and call tasks from one place.', icon: 'Layers3' },
    { title: 'Real-Time Alerts', description: 'Get notified when high-intent leads are active on site.', icon: 'Zap' },
    { title: 'Enterprise Security', description: 'SOC 2-ready controls, SSO, and role-based access.', icon: 'ShieldCheck' },
    { title: 'Time-Saving Workflows', description: 'Automate repetitive follow-ups and status updates.', icon: 'Clock3' },
  ],
}: Partial<FeatureGridProps>) {
  return (
    <section id="features" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-[#111827]/70">{subtitle}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || Zap
            return (
              <Card key={feature.title} className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="inline-flex rounded-lg bg-[#eff6ff] p-2 text-[#2563EB]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#111827]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#111827]/70">{feature.description}</p>
              </Card>
            )
          })}
        </div>

        <Card className="mt-8 rounded-xl border bg-[#111827] p-6 text-white md:p-8">
          <p className="text-sm uppercase tracking-wide text-white/70">Callout</p>
          <h3 className="mt-2 text-2xl font-bold">Teams using GrowthPilot book 2.1x more qualified demos in 90 days.</h3>
        </Card>
      </div>
    </section>
  )
}
