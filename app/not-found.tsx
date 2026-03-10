import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold text-foreground md:text-4xl">Page not found</h1>
      <p className="mt-4 text-muted-foreground">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Go to homepage</Link>
      </Button>
    </div>
  )
}
