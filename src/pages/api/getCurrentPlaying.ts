import { NextApiRequest, NextApiResponse } from 'next'
import { TrackImage, LastFMResponseBody } from './lastFMLib/types'
import { parseSong } from './lastFMLib/lib'
const { NEXT_PUBLIC_LASTFM_API_KEY } = process.env
const user = "username123"

/*
 * Returns the current playing song :)
 * Thanks to https://github.com/alii/use-last-fm/tree/master, "borrowed" the method/types
 * Current issues:
 *  - Tends to spam the API
 *  - It's loaded for *every* user, *every time*, at least while they have the homepage open. Could be vulnerable to API abuse, but since we control the parameters, the only thing it would return is what I'm listening to.
 */

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO: Maybe create a way that hits the API less?
  const endpoint = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${NEXT_PUBLIC_LASTFM_API_KEY!}&format=json&limit=1`

  // Get data
  const response = await fetch(endpoint)

  // Parse & format
  const data = await response.json()
  const body = data as LastFMResponseBody
  const imageSize = 'extralarge' as TrackImage['size']
  const state = parseSong(body, imageSize)
  console.log(state)

  // Return state
  res.status(200).json(state)
}
