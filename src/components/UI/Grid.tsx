import React, { forwardRef, HTMLProps } from 'react'
import cn from 'classnames'

type Tag = 'div' | 'section' | 'header' | 'footer' | 'aside'

export interface RowProps extends HTMLProps<HTMLDivElement> {
  Tag?: Tag
  gap?: string
}

export const Row = forwardRef<HTMLDivElement, RowProps>(function Row(
  { className, gap = 'gap-4', Tag = 'div', ...props },
  ref
) {
  return (
    <Tag
      {...props}
      className={cn('flex flex-wrap', gap, className)}
      ref={ref}
    />
  )
})

export interface ColProps extends HTMLProps<HTMLDivElement> {
  Tag?: Tag
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  spanSm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  spanMd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  spanLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

const colSpanClasses: Record<number, string> = {
  1: 'basis-[8.333333%]',
  2: 'basis-[16.666667%]',
  3: 'basis-[25%]',
  4: 'basis-[33.333333%]',
  5: 'basis-[41.666667%]',
  6: 'basis-[50%]',
  7: 'basis-[58.333333%]',
  8: 'basis-[66.666667%]',
  9: 'basis-[75%]',
  10: 'basis-[83.333333%]',
  11: 'basis-[91.666667%]',
  12: 'basis-full',
}

const colSpanSmClasses: Record<number, string> = {
  1: 'sm:basis-[8.333333%]',
  2: 'sm:basis-[16.666667%]',
  3: 'sm:basis-[25%]',
  4: 'sm:basis-[33.333333%]',
  5: 'sm:basis-[41.666667%]',
  6: 'sm:basis-[50%]',
  7: 'sm:basis-[58.333333%]',
  8: 'sm:basis-[66.666667%]',
  9: 'sm:basis-[75%]',
  10: 'sm:basis-[83.333333%]',
  11: 'sm:basis-[91.666667%]',
  12: 'sm:basis-full',
}

const colSpanMdClasses: Record<number, string> = {
  1: 'md:basis-[8.333333%]',
  2: 'md:basis-[16.666667%]',
  3: 'md:basis-[25%]',
  4: 'md:basis-[33.333333%]',
  5: 'md:basis-[41.666667%]',
  6: 'md:basis-[50%]',
  7: 'md:basis-[58.333333%]',
  8: 'md:basis-[66.666667%]',
  9: 'md:basis-[75%]',
  10: 'md:basis-[83.333333%]',
  11: 'md:basis-[91.666667%]',
  12: 'md:basis-full',
}

const colSpanLgClasses: Record<number, string> = {
  1: 'lg:basis-[8.333333%]',
  2: 'lg:basis-[16.666667%]',
  3: 'lg:basis-[25%]',
  4: 'lg:basis-[33.333333%]',
  5: 'lg:basis-[41.666667%]',
  6: 'lg:basis-[50%]',
  7: 'lg:basis-[58.333333%]',
  8: 'lg:basis-[66.666667%]',
  9: 'lg:basis-[75%]',
  10: 'lg:basis-[83.333333%]',
  11: 'lg:basis-[91.666667%]',
  12: 'lg:basis-full',
}

export const Col = forwardRef<HTMLDivElement, ColProps>(function Col(
  { className, span = 12, spanSm, spanMd, spanLg, Tag = 'div', ...props },
  ref
) {
  return (
    <Tag
      {...props}
      className={cn(
        'flex-shrink-0 flex-grow-0 px-4 box-border',
        colSpanClasses[span],
        spanSm && colSpanSmClasses[spanSm],
        spanMd && colSpanMdClasses[spanMd],
        spanLg && colSpanLgClasses[spanLg],
        className
      )}
      ref={ref}
    />
  )
})
