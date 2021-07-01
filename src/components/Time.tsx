import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import moment from 'moment'
import 'moment-timezone'

const now = () => moment.tz('Europe/London')

const events = {
  christmas: [25, 12],
  newYear: [1, 1],
}

const format = 'hh:mm:ss'
const beforeTime = moment.tz('00:00:00', format, 'Europe/London')
const afterTime = moment.tz('08:00:00', format, 'Europe/London')

export const Time = () => {
  const [date, setDate] = useState(now())

  const currentEvent = Object.entries(events)
    .filter((entry) => entry[1][0] === date.day() && entry[1][1] === date.month() + 1)
    .flat()[0] as string

  useEffect(() => {
    const timer = setInterval(() => setDate(now()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <p suppressHydrationWarning>
      <FontAwesomeIcon
        className="mr-2"
        icon={date.isBetween(beforeTime, afterTime) ? ['far', 'snooze'] : ['far', 'clock']}
      />
      {date.format('Do MMMM YYYY • h:mm:ss A')}{' '}
      {currentEvent && (
        <span className="font-bold">
          —{' '}
          {
            {
              christmas: 'Merry Christmas!',
              newYear: 'Happy New Year!',
            }[currentEvent]
          }
        </span>
      )}
    </p>
  )
}
