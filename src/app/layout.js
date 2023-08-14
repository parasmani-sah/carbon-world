import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import './globals.css'
import { Roboto, Lora, Catamaran } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto'
})

const catamaran = Catamaran({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-catamaran'
})

const lora = Lora({
  weight: '400',
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-lora'
})

export const metadata = {
  title: 'Carbon World',
  description: 'Carbon footprint calculator website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}, ${lora.variable}`}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
