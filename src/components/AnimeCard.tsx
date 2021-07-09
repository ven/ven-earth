import { useState } from 'react'
import { Anime } from 'data/anime'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AnimeCard = ({ title, href, imgName, altTitle, starred }: Anime) => {
  const [hovering, setHovering] = useState(false)

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      onMouseOver={() => setHovering(true)}
      onTouchStart={() => setHovering(true)}
      onTouchEnd={() => setHovering(false)}
      onMouseLeave={() => setHovering(false)}
      className="relative h-32 focus:outline-none transition duration-300 ease-in-out transform hover:scale-102.5 flex flex-col sm:flex-row text-center sm:text-left shadow-lg max-w-2xl"
    >
      <div
        className={`transition duration-300 ease-in-out ${
          hovering ? 'opacity-40' : 'opacity-100 '
        } rounded-md bg-cover absolute w-full h-full`}
        style={{ backgroundImage: `url('./img/anime/${imgName}.jpg')` }}
      ></div>
      <div
        className={`transition duration-300 ease-in-out ${
          hovering ? 'opacity-100' : 'opacity-0 '
        } ml-0 sm:ml-4 z-40 text-2xl my-auto font-bold`}
      >
        <div>
          {starred && <FontAwesomeIcon icon={['far', 'stars']} className="mr-2" />}
          {title}
        </div>{' '}
        {altTitle && (
          <div className="text-xs text-gray-900 dark:text-gray-200 italic font-semibold opacity-75">
            ({altTitle})
          </div>
        )}
      </div>
    </a>
  )
}
