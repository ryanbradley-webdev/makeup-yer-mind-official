import './globals.css'
import { Bodoni_Moda } from 'next/font/google'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const bodoni = Bodoni_Moda({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bodoni.className}>

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  )
}
