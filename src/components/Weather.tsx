import useSWR from 'swr'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { WeatherResponse } from '../types/weather'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'

export const Weather = () => {
  const [useCelsius, setCelsius] = useState<boolean>(true)

  const { data }: { data?: WeatherResponse } = useSWR('/api/weather', (url) =>
    fetch(url).then((res) => res.json())
  )

  if (!data) return null

  const weatherName = data.weather[0].main
  const weatherDescription = data.weather[0].description

  const celsius = Number(data.main.temp)
  const fahrenheit = (celsius * 9) / 5 + 32
  const toggleTemperature = () => setCelsius((celsius) => !celsius)

  return (
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <FontAwesomeIcon
        icon={
          weatherName
            ? ({
                Snow: ['far', 'cloud-snow'],
                Thunderstorm: ['far', 'thunderstorm'],
                Rain: ['far', 'cloud-showers-heavy'],
                Drizzle: ['far', 'cloud-rain'],
                Mist: ['far', 'cloud-rain'],
                Clouds: ['far', 'clouds'],
                Clear: ['far', 'cloud-sun'],
              }[weatherName] as [IconPrefix, IconName])
            : ['far', 'cloud']
        }
        className="mr-2"
      />
      It's currently{' '}
      {(celsius < 8 && <span className="mr-1">❄️</span>) ||
        (celsius > 30 && <span className="mr-1">🔥</span>)}
      <span onMouseOver={toggleTemperature} onMouseLeave={toggleTemperature} className="font-bold">
        {useCelsius ? `${Math.round(celsius)} °C` : `${Math.round(fahrenheit)} °F`}
      </span>{' '}
      <span className="text-xs">({weatherDescription})</span> in{' '}
      <a
        href="https://weather.com/en-GB/weather/today/l/51.49,-0.14"
        rel="noopener noreferrer"
        target="_blank"
        className="font-bold focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
      >
        London
      </a>
      .
    </motion.p>
  )
}
