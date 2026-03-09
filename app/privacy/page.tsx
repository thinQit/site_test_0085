export const dynamic = 'force-dynamic';

import Section from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main>
      <Section>
        <div className="max-w-4xl mx-auto py-20 md:py-24 px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-600">
            We collect as little as possible and use it only to respond to your requests.
          </p>
          <p className="mt-2 text-sm text-gray-500">Effective: January 15, 2026</p>

          <Card className="mt-10 rounded-xl border bg-card p-6 md:p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">Information you provide</h2>
              <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
                <li>Name (if included in your message)</li>
                <li>Email address</li>
                <li>Message content and any attachments you send</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Analytics</h2>
              <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
                <li>This template is designed to work without analytics by default.</li>
                <li>If you add analytics, disclose it and comply with applicable laws.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Contact</h2>
              <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
                <li>Questions: hello@convertly.page</li>
                <li>548 Market St, Suite 94123, San Francisco, CA 94104</li>
              </ul>
            </div>
          </Card>

          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/terms">Terms</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
