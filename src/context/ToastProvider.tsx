'use client'

import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

interface PropTypes {
  children: ReactNode
}

export default function ToastProvider({ children }: PropTypes) {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  )
}
