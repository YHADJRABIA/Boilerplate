import React, { ReactNode } from 'react'
import '@/styles/main.scss'

interface PropTypes {
  children: ReactNode
}

export default function RootLayout({ children }: PropTypes) {
  return <>{children}</>
}
