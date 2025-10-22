import React, { ReactNode } from 'react'
import Footer from '@/components/Layout/Footer'
import styles from './layout.module.scss'
import Header from '@/components/Layout/Header'

interface PropTypes {
  children: ReactNode
}

const layout = ({ children }: PropTypes) => {
  return (
    <>
      <Header isConcealable />
      <main className={styles.root}>{children}</main>
      <Footer />
    </>
  )
}

export default layout
