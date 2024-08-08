import localFont from "next/font/local"
import { Public_Sans } from "next/font/google"

export const publicSans = Public_Sans({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: "variable",
})

export const karrik = localFont({
  src: [
    { path: "../public/fonts/Karrik-Regular.woff2" },
    { path: "../public/fonts/Karrik-Italic.woff2", style: "italic" },
  ],
  display: "swap",
  variable: "--font-karrik",
})
