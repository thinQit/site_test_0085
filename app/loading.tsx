import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-24 space-y-6">
      <Skeleton className="h-10 w-2/3" />
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-5/6" />
      <div className="grid gap-6 md:grid-cols-3 pt-6">
        <Skeleton className="h-48 w-full rounded-xl" />
        <Skeleton className="h-48 w-full rounded-xl" />
        <Skeleton className="h-48 w-full rounded-xl" />
      </div>
    </main>
  )
}
