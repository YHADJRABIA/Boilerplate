import { IconType } from '@/types/icon'
import Typography, { LinkType, TypographyPropTypes } from '../Typography'
import cn from 'classnames'

interface LinkButtonPropTypes extends TypographyPropTypes {
  testId?: string
  variation?: 'primary' | 'secondary' | 'regular'
  backgroundColor?: string
  isRounded?: boolean
  icon?: IconType
  link: LinkType
}

export const LinkButton = ({
  variation = 'regular',
  testId,
  isFullWidth = true,
  isRounded = false,
  className,
  link = { href: '/', openInNewTab: false },
  backgroundColor,
  children,
  icon,
  ...rest
}: LinkButtonPropTypes) => {
  const isPrimary = variation === 'primary'
  const Icon = icon?.src

  const baseClasses =
    'flex flex-row justify-center items-center flex-wrap border-none outline-none cursor-pointer tracking-wider transition-[opacity,border-color,box-shadow] duration-300 ease-in-out p-6 rounded-[0.8rem] sm:p-7 sm:items-normal'
  const clickableClasses = isPrimary
    ? 'hover:opacity-80 active:opacity-80'
    : 'shadow-[0_0.1rem_0.1rem_rgba(0,0,0,0.1)] hover:shadow-[0.2rem_0.4rem_0.6rem_rgba(0,0,0,0.2)] active:shadow-[0.2rem_0.4rem_0.6rem_rgba(0,0,0,0.2)]'

  const variationClasses = {
    primary: 'text-bg-primary bg-primary',
    secondary: 'text-text-primary bg-bg-primary border border-border',
    regular:
      'p-3 px-[1.15rem] rounded-[0.5rem] w-fit min-h-[3.8rem] bg-bg-primary border border-border hover:opacity-70',
  }

  const roundedClasses = isRounded ? 'rounded-full p-4 px-6' : ''

  return (
    <Typography
      {...rest}
      aria-pressed={isPrimary ? 'true' : 'false'}
      className={cn(
        baseClasses,
        clickableClasses,
        variationClasses[variation],
        roundedClasses,
        {
          'w-full': isFullWidth,
        },
        className
      )}
      data-testid={testId}
      link={{ ...link }}
      role="button"
      style={{ backgroundColor }}
      tabIndex={0}
    >
      {Icon && (
        <span className="mr-4">
          <Icon color={icon.color} size={icon.size ?? 18} />
        </span>
      )}
      {children}
    </Typography>
  )
}
