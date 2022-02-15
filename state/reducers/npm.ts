import { npmAction, getNpmSuccessAction } from 'state/actions'
import { actionType } from 'state/actions/types'

interface npmState {
  loading: boolean
  error: string | null
  data: getNpmSuccessAction["payload"]
}

const initialState = {
  loading: false,
  error: null,
  data: {
    downloads: 0,
    name: "",
    url: ""
  }
}

const reducer = (
  state: npmState = initialState,
  action: npmAction
): npmState => {
  switch (action.type) {
    case actionType.get_npm:
      return { loading: true, error: null, data: initialState.data }; 
    case actionType.get_npm_success:
      return { loading: false, error: null, data: action.payload };
    case actionType.get_npm_error:
      return { loading: false, error: action.payload, data: initialState.data };
    default:
      return state;
  }
}

export default reducer