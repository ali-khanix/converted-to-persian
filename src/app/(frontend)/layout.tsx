import React from 'react'
import './../../styles/globals.css'
import { iranYekan } from '../fonts/fonts'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="fa" className={iranYekan.variable}>
      <body className="font-iranYekan">
        <main>{children}</main>
      </body>
    </html>
  )
}
