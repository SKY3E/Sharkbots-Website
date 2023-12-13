import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import Footer from "./components/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sharkbots 🦈 14903',
  description: 'A team website for Sharkbots, 14903, which participate in FTC.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}