import type { Metadata } from 'next'
import './globals.css'

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
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@100..900&display=swap'
        rel='stylesheet'
      ></link>
      <body>{children}</body>
    </html>
  )
}
