"use client";

import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Row {
  feature: string
  starter: boolean
  growth: boolean
  scale: boolean
}

interface ComparisonTableProps {
  title?: string
  rows?: Row[]
  className?: string
}

export default function ComparisonTable({
  title = 'Choose the plan that matches your growth stage',
  rows = [
    { feature: 'Unlimited contacts', starter: true, growth: true, scale: true },
    { feature: 'Workflow automation', starter: false, growth: true, scale: true },
    { feature: 'Advanced analytics', starter: false, growth: true, scale: true },
    { feature: 'Forecast intelligence', starter: false, growth: false, scale: true },
    { feature: 'Dedicated success manager', starter: false, growth: false, scale: true },
  ],
  className = '',
}: Partial<ComparisonTableProps>) {
  return (
    <section id="pricing" className={cn('bg-muted/40 py-20 md:py-24', className)}>
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">{title}</h2>

        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-white shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-[#111827]">Feature</th>
                <th className="px-6 py-4 text-sm font-semibold text-[#111827]">Starter</th>
                <th className="px-6 py-4 text-sm font-semibold text-[#111827]">Growth</th>
                <th className="px-6 py-4 text-sm font-semibold text-[#111827]">Scale</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-t">
                  <td className="px-6 py-4 text-sm text-[#111827]/85">{row.feature}</td>
                  {[row.starter, row.growth, row.scale].map((value, idx) => (
                    <td key={row.feature + idx} className="px-6 py-4">
                      {value ? (
                        <Check className="h-4 w-4 text-emerald-600" />
                      ) : (
                        <Minus className="h-4 w-4 text-muted-foreground" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
