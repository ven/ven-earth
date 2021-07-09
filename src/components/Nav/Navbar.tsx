import NextLink from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { ThemeSwitcher } from './ThemeSwitcher'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Route, RouteData } from 'data/routes'
import { Dropdown } from './Dropdown'

const NavbarItem = ({ name, href, icon }: Omit<Route, 'type'>) => {
  return (
    <NextLink href={href}>
      <a
        aria-label={name}
        className="focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
      >
        {icon && <FontAwesomeIcon className="w-4 h-4" icon={icon} />}
        {name !== 'home' && <span>{name}</span>}
      </a>
    </NextLink>
  )
}

export const Navbar = () => {
  return (
    <nav className="z-50 w-full flex justify-start items-center mx-auto max-w-4xl px-8 my-20">
      {RouteData.filter((route) => route.type !== 'dropdown').map((route) => (
        <NavbarItem key={uuidv4()} name={route.name} href={route.href} icon={route.icon} />
      ))}

      <Dropdown />

      <div className="ml-auto">
        <ThemeSwitcher />
      </div>
    </nav>
  )
}
