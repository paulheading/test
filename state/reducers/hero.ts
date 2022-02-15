import { heroAction, setHeroSuccessAction } from 'state/actions'
import { actionType } from 'state/actions/types'
import { initial } from 'state/reducers/trello'

interface heroState {
  loading: boolean
  error: string | null
  data: setHeroSuccessAction["payload"]
}

const initialState = {
  loading: false,
  error: null,
  data: [initial.projects.card]
}

const reducer = (
  state: heroState = initialState,
  action: heroAction
): heroState => {
  switch (action.type) {
    case actionType.set_hero:
      return { loading: true, error: null, data: initialState.data }; 
    case actionType.set_hero_success:
      return { loading: false, error: null, data: action.payload };
    case actionType.set_hero_error:
      return { loading: false, error: action.payload, data: initialState.data };
    default:
      return state;
  }
}

export default reducer;