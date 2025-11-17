import { SetStateAction, Dispatch } from 'react'
import cn from 'classnames'
import { useEventListener } from '@/hooks/useEventListener'
import useLockBodyScroll from '@/hooks/useLockBodyScroll'

interface PropTypes {
  toggled: boolean
  setToggled: Dispatch<SetStateAction<boolean>>
  className?: string
}

const BurgerMenu = ({ toggled, setToggled, className }: PropTypes) => {
  // On/Off menu button
  const toggleMenu = (): void => setToggled(prev => !prev)

  // Prevent scroll when menu is opened
  useLockBodyScroll(toggled)

  // Closes menu if escape key pressed
  const keyboardHandler = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') setToggled(false)
  }

  useEventListener('keydown', keyboardHandler)

  return (
    <div
      aria-controls="navigation"
      aria-label="Menu"
      className={cn('block cursor-pointer mx-4', className)}
      data-testid="burger-menu"
      role="button"
      onClick={toggleMenu}
    >
      <div
        className={cn(
          'w-8 h-[2px] my-2 bg-text-inverse transition-all duration-300',
          {
            'rotate-[-45deg] translate-x-[-4px] translate-y-[6px]': toggled,
          }
        )}
      ></div>
      <div
        className={cn(
          'w-8 h-[2px] my-2 bg-text-inverse transition-all duration-300',
          {
            'opacity-0': toggled,
          }
        )}
      ></div>
      <div
        className={cn(
          'w-8 h-[2px] my-2 bg-text-inverse transition-all duration-300',
          {
            'rotate-[45deg] translate-x-[-4px] translate-y-[-6px]': toggled,
          }
        )}
      ></div>
    </div>
  )
}

export default BurgerMenu
