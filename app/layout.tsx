import type { Metadata } from "next"
import { publicSans } from "@/app/fonts"
import "./globals.css"
import Nav from "./components/Nav"

// import { Inter } from "next/font/google"
// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sophie Abromowitz",
  description: "Sophie Abromowitz website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
