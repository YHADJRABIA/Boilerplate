import cn from 'classnames'
import Image, { ImageProps } from 'next/image'
import React from 'react'

export type AspectRatio = '16/9' | '16/10' | '4/3' | '1/1'

interface PropTypes extends Omit<ImageProps, 'width' | 'height'> {
  className?: string
  hasRoundedBorder?: boolean
  aspectRatio?: AspectRatio
}

const FilledImage = ({
  className,
  hasRoundedBorder = true,
  aspectRatio = '16/9',
  ...props
}: PropTypes) => {
  return (
    <div className={cn('w-full relative', className)} style={{ aspectRatio }}>
      <Image
        {...props}
        fill
        className={cn({ 'rounded-[1rem]': hasRoundedBorder })}
      />
    </div>
  )
}

export default FilledImage
