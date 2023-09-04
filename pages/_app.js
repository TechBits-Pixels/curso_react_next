import '@/styles/globals.css'
import Navbar from '@/components/Navbar/Navbar'
import { Press_Start_2P, Open_Sans } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin-ext'],
})

export const openSans = Open_Sans({
  subsets: ['latin-ext'],
})


export default function App({ Component, pageProps }) {
  return (
    <main className={`layout ${openSans.className}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
