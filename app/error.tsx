'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="mx-auto max-w-3xl px-6 md:px-8 py-20 md:py-24 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
        Something went wrong
      </h1>
      <p className="mt-4 text-gray-600">
        We hit an unexpected issue. Please try again.
      </p>
      <Button onClick={reset} className="mt-8">
        Try again
      </Button>
    </main>
  )
}
