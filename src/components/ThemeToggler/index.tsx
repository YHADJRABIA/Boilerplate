import { GrMoon as MoonIcon, GrSun as SunIcon } from 'react-icons/gr'
import styles from './ThemeToggler.module.scss'

interface PropTypes {
  isDarkTheme: boolean
  onClick: () => void
  title: string
}

const ThemeToggler = ({ isDarkTheme, onClick, title }: PropTypes) => {
  const Icon = isDarkTheme ? SunIcon : MoonIcon

  return (
    <Icon
      className={styles.root}
      data-testid="theme-toggler"
      size={28}
      title={title}
      onClick={onClick}
    />
  )
}

export default ThemeToggler
