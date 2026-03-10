"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  reset,
}: {
  reset: () => void
}) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold text-foreground md:text-4xl">Something went wrong.</h1>
      <p className="mt-4 text-muted-foreground">
        We hit an unexpected error while loading this page.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button onClick={reset}>Try again</Button>
        <Button asChild variant="outline">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  )
}
