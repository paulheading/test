import axios from 'axios'
import { Dispatch } from 'redux'
import { isAxiosError } from 'scripts/functions'
import { spotifyAction } from 'state/actions'
import { actionType } from 'state/actions/types'
import { spotifyPlaylist, playlist, getToken } from './variables'

interface source {
  items: [{
    track: {
      name: string
      album: {
        release_date: string
      }
      artists: [{
        external_urls: {
          spotify: string
        }
        name: string
      }]
      external_urls: {
        spotify: string
      }
    }
  }]
}

const prepTracks = (items: source["items"]) => {
  return items.map(({ track }) => {
    const { name, artists, album, external_urls } = track;
    return {
      artist: {
        url: artists[0].external_urls.spotify,
        name: artists[0].name
      },
      release_date: album.release_date,
      url: external_urls.spotify,
      name
    }
  });
}

const getPlaylist = async (target: string | undefined) => {
  const token = await getToken();
  const { data } = await axios.get(spotifyPlaylist(target), { headers: { Authorization: "Bearer " + token } });
  const { name, owner, description, external_urls, followers, images, tracks } = data;

  return {
    profile: `https://open.spotify.com/user/${owner.display_name}`,
    description,
    url: external_urls.spotify,
    followers: followers.total,
    image: images[0].url,
    name,
    owner: {
      name: owner.display_name,
      url: owner.external_urls.spotify
    },
    tracks: prepTracks(tracks.items)
  }
}

export const getSpotify = () => {
  return async (dispatch: Dispatch<spotifyAction>) => {
    dispatch({
      type: actionType.get_spotify
    });

    try {
      dispatch({
        type: actionType.get_spotify_success,
        payload: {
          _2020: await getPlaylist(playlist._2020),
          _2021: await getPlaylist(playlist._2021)
        }
      });
      
    } catch (error) {
      if (isAxiosError(error)) {
        dispatch({
          type: actionType.get_spotify_error,
          payload: error.message
        });        
      }
    }
  }
}