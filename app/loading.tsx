import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 px-6 py-24">
      <Skeleton className="h-10 w-2/3" />
      <Skeleton className="h-6 w-full max-w-3xl" />
      <Skeleton className="h-6 w-5/6 max-w-2xl" />
      <div className="grid gap-4 pt-8 md:grid-cols-3">
        <Skeleton className="h-40 w-full rounded-xl" />
        <Skeleton className="h-40 w-full rounded-xl" />
        <Skeleton className="h-40 w-full rounded-xl" />
      </div>
    </div>
  )
}
