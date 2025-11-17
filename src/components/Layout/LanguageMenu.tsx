'use client'
import { useRef } from 'react'
import { PiCaretDownBold as CaretIcon } from 'react-icons/pi'
import cn from 'classnames'

import Image from 'next/image'
import { Button } from '../UI/Button'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { languages } from '@/utils/language'
import useChangeLanguage from '@/hooks/useChangeLanguage'
import Typography from '../UI/Typography'

interface PropTypes {
  className?: string
  isInverted?: boolean
}

const LanguageMenu = ({ className, isInverted = false }: PropTypes) => {
  const ref = useRef(null)
  const onToggle = () => setIsOpen(prev => !prev)

  const {
    isOpen,
    setIsOpen,
    handleClose,
    currentLanguage,
    onChangeLanguage,
    isPending,
  } = useChangeLanguage()

  useOnClickOutside(ref, handleClose) // Closes language menu if user clicks outside of ref

  return (
    <div className={cn('relative', className)} ref={ref}>
      <Button
        className="relative hover:shadow-none hover:opacity-90"
        disabled={isPending}
        tag="span"
        onClick={onToggle}
      >
        <Image
          priority
          alt={currentLanguage.label}
          height={19}
          src={currentLanguage.icon}
          width={19}
        />
        <Typography uppercase className="mx-3" size="xs" tag="span">
          {currentLanguage.value}
        </Typography>
        <CaretIcon
          className={cn('transition-transform duration-200', {
            'rotate-180': isOpen,
          })}
          size={15}
        />
      </Button>

      <style jsx>{`
        ul::before {
          content: '';
          position: absolute;
          top: -0.6rem;
          right: 0.6rem;
          width: 1.2rem;
          height: 1.2rem;
          background-color: var(--bg-primary);
          border-left: 1px solid var(--border-color);
          border-top: 1px solid var(--border-color);
          transform: rotate(45deg);
          z-index: 1;
        }
        ul.inverted::before {
          top: auto;
          bottom: -0.6rem;
          border-left: none;
          border-top: none;
          border-right: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }
      `}</style>
      <ul
        className={cn(
          'hidden absolute top-[calc(100%+0.8rem)] right-0 z-10 bg-bg-primary flex flex-col justify-center items-start flex-wrap border border-border rounded-[0.8rem] shadow-[0_0.2rem_0.3rem_rgba(0,0,0,0.2)] min-w-[10rem]',
          {
            visible: isOpen,
            'top-auto bottom-[calc(100%+0.8rem)] right-auto left-0': isInverted,
          }
        )}
      >
        {languages.map(el => {
          const isSelected = currentLanguage.value === el.value
          return (
            <li
              key={el.id}
              lang={el.value}
              title={el.label}
              className="cursor-pointer flex flex-row justify-start items-center flex-nowrap transition-opacity duration-300 p-4 px-2 w-full hover:opacity-70 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-border"
              onClick={() => onChangeLanguage(el.value)}
            >
              <Image
                alt={el.label}
                className="mr-3"
                height={18}
                src={el.icon}
                width={18}
              />
              <Typography
                className="capitalize"
                size="xs"
                tag="span"
                weight={isSelected ? 'semiBold' : undefined}
              >
                {el.label}
              </Typography>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LanguageMenu
