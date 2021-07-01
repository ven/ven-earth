export interface LastFMResponse {
  topalbums: Topalbums
}

export interface Topalbums {
  album: Album[]
  '@attr': TopalbumsAttr
}

export interface TopalbumsAttr {
  page: string
  perPage: string
  user: string
  total: string
  totalPages: string
}

export interface Album {
  artist: Artist
  '@attr': AlbumAttr
  image: Image[]
  playcount: string
  url: string
  name: string
  mbid: string
}

export interface AlbumAttr {
  rank: string
}

export interface Artist {
  url: string
  name: string
  mbid: string
}

export interface Image {
  size: Size
  '#text': string
}

export enum Size {
  Extralarge = 'extralarge',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}
