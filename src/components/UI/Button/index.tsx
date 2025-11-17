'use client'
import { ButtonHTMLAttributes, MouseEvent } from 'react'
import cn from 'classnames'
import Loader from '../Loader'
import Typography, { TypographyPropTypes } from '../Typography'

interface ButtonPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  testId?: string
  isLoading?: boolean
  isFullWidth?: boolean
  isRounded?: boolean
  variation?: 'primary' | 'secondary' | 'regular'
  backgroundColor?: string
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
}

export const Button = ({
  variation = 'regular',
  tag,
  children,
  disabled,
  testId,
  isLoading,
  type = 'button',
  isFullWidth = true,
  isRounded = false,
  className,
  backgroundColor,
  onClick,
  ...rest
}: ButtonPropTypes & TypographyPropTypes) => {
  const isClickable = !(isLoading || disabled)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (onClick && isClickable) {
      onClick(event)
    }
    if (isClickable) {
      const form = event.currentTarget.closest('form')
      if (form) {
        if (type === 'submit') {
          form.requestSubmit() // Triggers form submission
        } else if (type === 'reset') {
          form.reset() // Resets form
        }
      }
    }
  }

  const baseClasses =
    'flex flex-row justify-center items-center flex-wrap border-none outline-none cursor-pointer tracking-wider transition-[opacity,border-color,box-shadow] duration-300 ease-in-out p-6 rounded-[0.8rem] sm:p-7'
  const disabledClasses = isClickable
    ? ''
    : 'no-select cursor-not-allowed opacity-50'
  const clickableClasses = isClickable
    ? variation === 'primary'
      ? 'hover:opacity-80 active:opacity-80'
      : 'shadow-[0_0.1rem_0.1rem_rgba(0,0,0,0.1)] hover:shadow-[0.2rem_0.4rem_0.6rem_rgba(0,0,0,0.2)] active:shadow-[0.2rem_0.4rem_0.6rem_rgba(0,0,0,0.2)]'
    : ''

  const variationClasses = {
    primary: 'text-bg-primary bg-primary',
    secondary: 'text-text-primary bg-bg-primary border border-border',
    regular:
      'p-3 px-[1.15rem] rounded-[0.5rem] w-fit min-h-[3.8rem] bg-bg-primary border border-border hover:opacity-70',
  }

  const roundedClasses = isRounded ? 'rounded-full p-4 px-6' : ''

  return children ? (
    <Typography
      {...rest}
      aria-disabled={!isClickable}
      backgroundColor={backgroundColor}
      className={cn(
        baseClasses,
        disabledClasses,
        clickableClasses,
        variationClasses[variation],
        roundedClasses,
        {
          'w-full': isFullWidth,
        },
        className
      )}
      data-testid={testId}
      role="button"
      tabIndex={isClickable ? 0 : -1} // Prevents focus if disabled
      tag={tag}
      onClick={handleClick}
    >
      {isLoading ? (
        <Loader className="text-[clamp(1.8rem,3vw,2.2rem)]" />
      ) : (
        children
      )}
    </Typography>
  ) : null
}
