import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GenericMeta } from 'components/GenericMeta'
import { NowPlayingCard } from 'components/NowPlayingCard'
import { Weather } from 'components/Weather'
import { Account, AccountData } from 'data/accounts'
import { MainLayout } from 'layouts/MainLayout'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'
const Time = dynamic(() => import('components/Time'), {
  ssr: false,
})

const SocialLink = ({ name, href, icon, copyEmail }: Account) => {
  return (
    <a
      aria-label={name}
      onClick={() => copyEmail && copyEmail()}
      className="cursor-pointer fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon size="1x" icon={icon ? icon : ['fab', name.toLowerCase() as IconName]} />
    </a>
  )
}

const Home = () => {
  const { theme } = useTheme()

  const copyEmail = () => {
    navigator.clipboard.writeText('v@ven.earth')
    theme === 'dark'
      ? toast.success('Copied email to clipboard!', {
          style: {
            background: '#333',
            color: '#fff',
          },
        })
      : toast.success('Copied email to clipboard!')
  }

  return (
    <>
      <GenericMeta
        title="ven.earth"
        description="20-year-old software engineer and student from the United Kingdom."
      />

      <MainLayout margin={false}>
        <h1 className="text-6xl font-bold">ven</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-sm mt-2">
          20-year-old <span className="font-semibold">software engineer</span> from the United
          Kingdom.
        </p>
        <div className="grid grid-flow-col w-48 mt-3 text-lg">
          {AccountData.map((account) => (
            <SocialLink
              key={uuidv4()}
              name={account.name}
              href={account.href}
              icon={account.icon}
              copyEmail={copyEmail}
            />
          ))}
        </div>
        <div className="grid my-8 gap-2">
          <Time />
          <Weather />
        </div>
        <div>
          <NowPlayingCard />
        </div>
      </MainLayout>
    </>
  )
}

export default Home
