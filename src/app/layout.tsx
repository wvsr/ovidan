import type { Metadata } from 'next'
import Head from 'next/head'
import './globals.css'
import { Poppins } from '@next/font/google'
import { Hind_Siliguri } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
})

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['400', '700'], // Specify the weights you need
})

export const metadata: Metadata = {
  title: 'GenZ Ovidhan',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@100..900&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <body className={`dark ${poppins.className} ${hindSiliguri.className}`}>
        {children}
      </body>
    </html>
  )
}
