import "./globals.css"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import NavbarSticky from "@/components/NavbarSticky"
import FooterMultiColumn from "@/components/FooterMultiColumn"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
})

export const metadata: Metadata = {
  title: "Convertly — Conversion-First Landing Page Template",
  description:
    "A clean, conversion-driven Next.js landing page system with hero, social proof, features, testimonials, pricing, FAQ, and CTAs—built with Tailwind and shadcn/ui.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}>
        <NavbarSticky
          logo="Convertly"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Features", href: "/features" },
            { label: "Pricing", href: "/pricing" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Get Template"
          ctaHref="/pricing"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="Convertly"
          description="Conversion-first landing pages built with Next.js, Tailwind, and shadcn/ui."
          columns={[
            {
              title: "Product",
              links: [
                { label: "Features", href: "/features" },
                { label: "Pricing", href: "/pricing" },
                { label: "FAQ", href: "/pricing#faq" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
              ],
            },
          ]}
          copyright="© 2026 Convertly Studio. All rights reserved."
        />
      </body>
    </html>
  )
}
