import { actionType } from 'state/actions/types'

interface getSpotifyAction {
  type: actionType.get_spotify
}

interface track {
  artist: {
    url: string
    name: string
  }
  url: string
  name: string
}

interface owner {
  name: string
  url: string
}

interface playlist {
  profile: string
  description: string
  url: string
  followers: string
  image: string
  name: string
  owner: owner
  tracks: track[]
}

export interface getSpotifySuccess {
  _2020: playlist
  _2021: playlist
}

export interface getSpotifySuccessAction {
  type: actionType.get_spotify_success
  payload: getSpotifySuccess
}

interface getSpotifyErrorAction {
  type: actionType.get_spotify_error
  payload: string
}

export type spotifyAction = 
  | getSpotifyAction
  | getSpotifySuccessAction
  | getSpotifyErrorAction