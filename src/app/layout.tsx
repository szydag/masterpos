import type { Metadata } from 'next'
import './globals.css'
import Home from './home'

export const metadata: Metadata = {
  title: 'MasterPos',
  description: 'MasterPos Application',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Home />
      </body>
    </html>
  )
} 