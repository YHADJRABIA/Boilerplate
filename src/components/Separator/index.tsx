import React from 'react'
import cn from 'classnames'

type PropTypes =
  | { label: string; color?: false }
  | { color?: string; label?: false }

/**
 * Horizontal line.
 * Continuous if no label provided.
 * With gap in the middle if label provided.
 */
const Separator = ({
  label,
  color,
  className,
}: PropTypes & { className?: string }) => {
  return label ? (
    <div
      className={cn(
        'my-6 w-full flex items-center text-text-primary opacity-60',
        className
      )}
    >
      <style jsx>{`
        div::before,
        div::after {
          content: '';
          flex-grow: 1;
          background-color: var(--text-primary);
          opacity: 0.6;
          height: 1px;
          margin: 0 0.8rem;
        }
      `}</style>
      <span className="text-sm truncate-custom">{label}</span>
    </div>
  ) : (
    <hr
      className={cn('my-6 w-full', className)}
      style={{ borderColor: color || undefined }}
    />
  )
}

export default Separator
