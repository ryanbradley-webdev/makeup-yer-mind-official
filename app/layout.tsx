import './globals.css'
import { Cabin } from 'next/font/google'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const cabin = Cabin({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cabin.className}>

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  )
}
