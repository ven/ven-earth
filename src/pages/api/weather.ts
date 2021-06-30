import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${process.env.WEATHER_API_KEY}`
  )
  const data = await response.json()
  res.status(200).json(data)
}
