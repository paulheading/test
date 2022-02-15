import { treehouseAction, getTreehouseSuccessAction } from 'state/actions'
import { actionType } from 'state/actions/types'

interface treehouseState {
  loading: boolean
  error: string | null
  data: getTreehouseSuccessAction["payload"]
}

const initialState = {
  loading: false,
  error: null,
  data: {
    "JavaScript": 0,
    "CSS": 0,
    "Development Tools": 0,
    "Databases": 0,
    "HTML": 0,
    "Computer Science": 0,
    "PHP": 0,
    "Design": 0,
    "Business": 0
  }
}

const reducer = (
  state: treehouseState = initialState,
  action: treehouseAction
): treehouseState => {
  switch (action.type) {
    case actionType.get_treehouse:
      return { loading: true, error: null, data: initialState.data }; 
    case actionType.get_treehouse_success:
      return { loading: false, error: null, data: action.payload };
    case actionType.get_treehouse_error:
      return { loading: false, error: action.payload, data: initialState.data };
    default:
      return state;
  }
}

export default reducer;