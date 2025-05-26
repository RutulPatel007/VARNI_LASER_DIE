import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Varni Laser Die - Precision Die Cutting Solutions",
  description:
    "Leading manufacturer of laser dies, embossing blocks, and precision converting tools in Ahmedabad, India",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
