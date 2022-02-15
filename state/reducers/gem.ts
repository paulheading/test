import { gemAction, getGemSuccessAction } from 'state/actions'
import { actionType } from 'state/actions/types'

interface gemState {
  loading: boolean
  error: string | null
  data: getGemSuccessAction["payload"]
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
  state: gemState = initialState,
  action: gemAction
): gemState => {
  switch (action.type) {
    case actionType.get_gem:
      return { loading: true, error: null, data: initialState.data }; 
    case actionType.get_gem_success:
      return { loading: false, error: null, data: action.payload };
    case actionType.get_gem_error:
      return { loading: false, error: action.payload, data: initialState.data };
    default:
      return state;
  }
}

export default reducer;