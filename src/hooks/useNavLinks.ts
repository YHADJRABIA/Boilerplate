import { useTranslations } from 'next-intl'

import {
  GrTechnology as StackIcon,
  GrCircleInformation as AboutIcon,
  GrMailOption as ContactIcon,
  GrLayer as ProjectIcon,
} from 'react-icons/gr'

const useNavLinks = () => {
  const t = useTranslations('Navigation')

  const navLinks = [
    {
      url: '/#about',
      label: t('about'),
      icon: AboutIcon,
    },
    {
      url: '/#stack',
      label: t('stack'),
      icon: StackIcon,
    },
    {
      url: '/#projects',
      label: t('projects'),
      icon: ProjectIcon,
    },
    {
      url: '/#contact',
      label: t('contact'),
      icon: ContactIcon,
    },
  ]

  return navLinks
}

export default useNavLinks
