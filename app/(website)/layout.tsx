import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter, DM_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Pearlaw Corporate - Expert Legal Solutions",
  description: "We provide expert legal solutions for businesses and individuals. Experience. Trust. Results.",
  keywords: ["law firm", "corporate law", "tech law", "legal services", "Nigeria"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} ${dmSans.variable}`}>
      <body className="font-montserrat antialiased bg-brand-light min-h-screen">{children}</body>
    </html>
  )
}
