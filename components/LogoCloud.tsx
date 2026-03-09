"use client";

import { Card } from '@/components/ui/card'

interface LogoCloudProps {
  logos?: string[]
  metrics?: { label: string; value: string }[]
}

export default function LogoCloud({
  logos = ['Northstar', 'Cloudloop', 'Metricly', 'OpenForge', 'ScaleOps', 'Bluewave'],
  metrics = [
    { label: 'Teams onboarded', value: '1,200+' },
    { label: 'Avg. conversion lift', value: '38%' },
    { label: 'Messages automated', value: '12M+' },
  ],
}: Partial<LogoCloudProps>) {
  return (
    <section className="bg-[#f8fafc] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-center text-sm font-medium text-[#111827]/60">Trusted by high-growth teams worldwide</p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo} className="rounded-xl border bg-white px-4 py-4 text-center text-sm font-semibold text-[#111827]/70">
              {logo}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <Card key={metric.label} className="rounded-xl border bg-white p-5 text-center">
              <p className="text-2xl font-bold text-[#111827]">{metric.value}</p>
              <p className="mt-1 text-sm text-[#111827]/65">{metric.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
