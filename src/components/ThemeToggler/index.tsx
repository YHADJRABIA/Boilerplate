import { GrMoon as MoonIcon, GrSun as SunIcon } from 'react-icons/gr'

interface PropTypes {
  isDarkTheme: boolean
  onClick: () => void
  title: string
}

const ThemeToggler = ({ isDarkTheme, onClick, title }: PropTypes) => {
  const Icon = isDarkTheme ? SunIcon : MoonIcon

  return (
    <Icon
      className="cursor-pointer text-accent animate-icon-switch"
      data-testid="theme-toggler"
      size={28}
      title={title}
      onClick={onClick}
    />
  )
}

export default ThemeToggler
