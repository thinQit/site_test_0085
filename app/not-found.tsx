import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 md:px-8 py-20 md:py-24 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
        Page not found
      </h1>
      <p className="mt-4 text-gray-600">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back to home</Link>
      </Button>
    </main>
  )
}
