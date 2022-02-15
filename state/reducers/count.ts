import { countAction, setCountSuccessAction } from 'state/actions'
import { actionType } from 'state/actions/types'

interface countState {
  loading: boolean
  error: string | null
  data: setCountSuccessAction["payload"]
}

const initialState = {
  loading: false,
  error: null,
  data: 0
}

const reducer = (
  state: countState = initialState,
  action: countAction
): countState => {
  switch (action.type) {
    case actionType.set_count:
      return { loading: true, error: null, data: initialState.data }; 
    case actionType.set_count_success:
      return { loading: false, error: null, data: action.payload };
    case actionType.set_count_error:
      return { loading: false, error: action.payload, data: initialState.data };
    default:
      return state;
  }
}

export default reducer;