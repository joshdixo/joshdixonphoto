import './globals.css'
import { inter } from '@/app/fonts';
import Navigation from '../components/Navigation/Navigation'



export const metadata = {
  title: 'Josh Dixon Photography',
  description: 'Photography Portfolio of Josh Dixon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} block`}>
      <Navigation />
        {children}
        </body>
    </html>
  )
}
