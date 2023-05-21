import Header from '@/components/Header'
import '../assets/styles/styles.scss'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog App || nextjs',
  description: 'Blog app with nextjs by mkt',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Header/>
        <main className='main'>
        {children}
          </main>
          <Footer/>
      </body>
    </html>
  )
}
