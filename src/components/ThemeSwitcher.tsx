import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'next-themes'
import useSound from 'use-sound'
import { useEffect, useState } from 'react'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const [playOn] = useSound('/switch-on.mp3')
  const [playOff] = useSound('/switch-off.mp3')

  const toggle = () => {
    if (theme === 'dark') {
      setTheme('light')
      playOn()
    } else {
      setTheme('dark')
      playOff()
    }
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="focus:outline-none bg-none xs:bg-gray-200 xs:dark:bg-gray-800 rounded p-3 h-10 w-10 flex items-center justify-center"
      onClick={() => toggle()}
    >
      <FontAwesomeIcon
        className="h-4 w-4 text-gray-800 dark:text-gray-200"
        icon={theme === 'light' ? ['far', 'moon'] : ['fad', 'sun']}
      />
    </button>
  )
}
