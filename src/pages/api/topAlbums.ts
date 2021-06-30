import { NextApiRequest, NextApiResponse } from 'next'
const { NEXT_PUBLIC_LASTFM_API_KEY } = process.env

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=venoras&api_key=${NEXT_PUBLIC_LASTFM_API_KEY}&format=json`
  )
  const data = await response.json()
  res.status(200).json(data)
}
