import React, { ReactNode } from 'react'
import '@/styles/globals.css'

interface PropTypes {
  children: ReactNode
}

export default function RootLayout({ children }: PropTypes) {
  return <>{children}</>
}
