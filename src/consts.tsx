import { HomeIcon, InformationCircleIcon, BookOpenIcon, LightBulbIcon } from '@heroicons/react/24/outline'

export const SITE_TITLE = 'CJ Williams';
export const SITE_DESCRIPTION = 'My personal blog';
export const SITE_NAVIGATION = [
  {'name': 'Home', 'url': '/', 'icon': <HomeIcon /> },
  {'name': 'About', 'url': '/about', 'icon': <InformationCircleIcon />},
  {'name': 'Blog', 'url': '/blog', 'icon': <BookOpenIcon />},
  {'name': 'Projects', 'url': '/projects', 'icon': <LightBulbIcon />}
]
export const SITE_SOCIALS = [
  {'name': 'LinkedIn', 'url': 'https://www.linkedin.com/in/cjwilliamsdev/'},
  {'name': 'GitHub', 'url': 'https://github.com/WilliamsCJ'},
  {'name': 'X', 'url': 'https://twitter.com/CJWilliamsDev'}
]

