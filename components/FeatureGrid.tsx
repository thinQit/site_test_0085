"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  Activity,
  BarChart3,
  Bot,
  CheckSquare,
  Clock3,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

interface FeatureItem {
  icon: string
  title: string
  description: string
}

interface FeatureGridProps {
  title?: string
  subtitle?: string
  features?: FeatureItem[]
  className?: string
}

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Bot,
  BarChart3,
  CheckSquare,
  Clock3,
  Activity,
}

export default function FeatureGrid({
  title = 'Everything your team needs to convert faster',
  subtitle = 'Purpose-built features designed to remove friction from your sales process.',
  features = [
    { icon: 'Bot', title: 'Smart Follow-ups', description: 'Automate personalized follow-ups based on deal stage and buyer behavior.' },
    { icon: 'BarChart3', title: 'Pipeline Analytics', description: 'Track conversion rates and identify bottlenecks with real-time reporting.' },
    { icon: 'CheckSquare', title: 'Task Automation', description: 'Auto-create tasks and reminders so no opportunity slips through.' },
    { icon: 'Clock3', title: 'Response Time Alerts', description: 'Get notified when high-value leads are waiting too long for a reply.' },
    { icon: 'Activity', title: 'Team Performance', description: 'Compare rep activity and outcomes to coach with data, not guesswork.' },
    { icon: 'Sparkles', title: 'AI Insights', description: 'Surface next-best actions and risk signals to improve close rates.' },
  ],
  className = '',
}: Partial<FeatureGridProps>) {
  return (
    <section id="features" className={cn('bg-white py-20 md:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">{title}</h2>
          <p className="mt-4 text-[#111827]/70">{subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || Sparkles
            return (
              <Card key={feature.title} className="rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg text-[#111827]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
