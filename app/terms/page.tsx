export const dynamic = 'force-dynamic';

import Section from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main>
      <Section>
        <div className="max-w-4xl mx-auto py-20 md:py-24 px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-lg text-gray-600">
            Simple terms for using the Convertly template and content.
          </p>
          <p className="mt-2 text-sm text-gray-500">Effective: January 15, 2026</p>

          <Card className="mt-10 rounded-xl border bg-card p-6 md:p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">Template use</h2>
              <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
                <li>You may customize the template for your own business or client projects.</li>
                <li>You may not resell the template as a standalone product without permission.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">No warranty</h2>
              <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
                <li>The template is provided “as is” without warranties of any kind.</li>
                <li>
                  You are responsible for compliance, accessibility, and legal requirements for your
                  use case.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Contact</h2>
              <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
                <li>Support: hello@convertly.page</li>
                <li>548 Market St, Suite 94123, San Francisco, CA 94104</li>
              </ul>
            </div>
          </Card>

          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/privacy">Privacy</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
