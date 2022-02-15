import { spotifyAction, getSpotifySuccess } from 'state/actions'
import { actionType } from 'state/actions/types'
import { initial } from 'state/reducers/spotify'

interface spotifyState {
  loading: boolean
  error: string | null
  data: getSpotifySuccess
}

const initialState = {
  loading: false,
  error: null,
  data: {
    _2020: initial,
    _2021: initial
  }
}

const reducer = (
  state: spotifyState = initialState,
  action: spotifyAction
): spotifyState => {
  switch (action.type) {
    case actionType.get_spotify:
      return { loading: true, error: null, data: initialState.data }; 
    case actionType.get_spotify_success:
      return { loading: false, error: null, data: action.payload };
    case actionType.get_spotify_error:
      return { loading: false, error: action.payload, data: initialState.data };
    default:
      return state;
  }
}

export * from './initial'
export default reducer