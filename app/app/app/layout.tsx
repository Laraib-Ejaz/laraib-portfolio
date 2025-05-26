import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Laraib Ejaz - Portfolio',
  description: 'Computer Science student passionate about web development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
