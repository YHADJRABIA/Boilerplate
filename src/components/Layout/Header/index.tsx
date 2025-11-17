'use client'
import React from 'react'
import Nav from './Nav'
import Logo from './Logo'
import cn from 'classnames'
import { useScrollDirection } from '@/hooks/useScrollDirection'

interface PropTypes {
  className?: string
  isConcealable?: boolean
}

const Header = ({ className, isConcealable = false }: PropTypes) => {
  const scrollDirection = useScrollDirection()
  const isDownScroll = scrollDirection === 'down'
  const translateY = () => (isDownScroll ? '-100%' : 0)

  return (
    <header
      className={cn(
        'transition-transform duration-500 ease-in-out z-10 w-full sticky top-0 h-header flex flex-row justify-center items-center flex-wrap bg-bg-header-footer px-10 py-2',
        className
      )}
      style={
        isConcealable ? { transform: `translateY(${translateY()})` } : undefined
      }
    >
      <Logo size={50} />
      <Nav className="ml-auto" />
    </header>
  )
}

export default Header
