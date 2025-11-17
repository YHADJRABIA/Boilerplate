import { ImSpinner2 } from 'react-icons/im'
import cn from 'classnames'

interface PropTypes {
  size?: number
  className?: string
}

const Loader = (props: PropTypes) => {
  const { size, className } = props
  return (
    <ImSpinner2
      {...props}
      className={cn('animate-spin m-auto', className)}
      size={size}
    />
  )
}

export default Loader
