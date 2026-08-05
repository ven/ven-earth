import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SongImage from '@public/img/song.webp'
import { truncate } from 'lib/utils'
import Image from 'next/image'
import FadeIn from 'react-fade-in'
import { LastFMResponse } from 'types/lastFM'
import useSWR from 'useSWR'

export const NowPlayingCard = () => {
  const { data }: { data?: LastFMResponse } = useSWR('getCurrentPlaying', { refreshInterval: 5000 })

  if (!data) return null

  if (['connecting', 'error'].includes(data.status)) return null



  return (
    <FadeIn>
      <a
        href={lastFM.status === 'playing' ? lastFM.song.url : 'https://spotify.com/'}
        rel="noopener noreferrer"
        target="_blank"
        className="focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 p-3 rounded-md border border-gray-800 shadow flex flex-row items-center max-w-sm"
      >
        {/* can't dynamically change Image src (swapping between `string` and `StaticImageData`) */}
        <div className="flex items-center justify-center h-full">
          {lastFM.status === 'idle' && (
            <Image
              height={45}
              width={45}
              alt="Song cover art"
              placeholder="blur"
              className="w-full h-full rounded shadow"
              src={SongImage}
            />
          )}
          {lastFM.status === 'playing' && (
            <Image
              height={45}
              width={45}
              alt="Song cover art"
              className="w-full h-full rounded shadow"
              src={lastFM.song.art}
            />
          )}
        </div>
        <div className="my-auto ml-4">
          <div className="font-semibold text-sm sm:text-regular">
            {lastFM.status === 'playing'
              ? `Listening to ${truncate(lastFM.song.name, 25)}`
              : 'Not listening to anything'}
          </div>
          <p className="text-xxs">
            <FontAwesomeIcon className="fill-current text-green-500" icon={['fab', 'spotify']} />{' '}
            Spotify
          </p>
        </div>
      </a>
    </FadeIn>
  )
}
