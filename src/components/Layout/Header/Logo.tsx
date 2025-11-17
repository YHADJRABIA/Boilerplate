import { Link } from '@/i18n/routing'
import React from 'react'
import Image from 'next/image'

interface PropsType {
  className?: string
  size?: number
  isInvertedColor?: boolean
}

const Logo = ({ className, size, isInvertedColor }: PropsType) => {
  return (
    <Link className={className} href="/">
      <Image
        priority
        alt="Logo"
        className="transition-transform duration-300 ease-in-out hover:scale-105 max-[767px]:p-1"
        height={size ?? 65}
        src="/logo.svg"
        style={isInvertedColor ? { filter: 'invert(100%)' } : undefined}
        width={size ?? 65}
      />
    </Link>
  )
}

export default Logo
