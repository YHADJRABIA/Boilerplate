import React from 'react'
import cn from 'classnames'
import Typography from '../../Typography'
import { IconType } from 'react-icons/lib'

export interface TextWithIconProps {
  icon: IconType
  title: string
  description: string
  className?: string
}

const TextWithIcon = ({
  className,
  title,
  description,
  icon: Icon,
}: TextWithIconProps) => {
  return (
    <div
      className={cn(
        'flex flex-col justify-start items-start flex-wrap border border-border rounded-[0.8rem] p-6 shadow-[0.15rem_0.25rem_0.2rem_rgba(0,0,0,0.15)] gap-6 sm:gap-8 sm:content-start sm:flex-row sm:text-center sm:p-7 sm:h-full',
        className
      )}
    >
      <span className="p-3 border border-border text-text-secondary shadow-[0.1rem_0.15rem_0.1rem_rgba(0,0,0,0.15)] rounded-full flex items-center">
        <Icon className="text-[clamp(1.6rem,4vw,2rem)]" />
      </span>

      <div className="w-full flex flex-col justify-start items-start flex-wrap flex-1 gap-4">
        <Typography size="m" tag="h3" weight="bold">
          {title}
        </Typography>

        <Typography className="text-text-secondary" size="s" weight="semiLight">
          {description}
        </Typography>
      </div>
    </div>
  )
}

export default TextWithIcon
