import { trelloAction, getTrelloSuccessAction } from 'state/actions'
import { actionType } from 'state/actions/types'
import { initial } from 'state/reducers/trello'

interface trelloState {
  loading: boolean
  error: string | null
  data: getTrelloSuccessAction["payload"]
}

const { list, pages, projects, roles, education } = initial;

const initialState = {
  loading: false,
  error: null,
  data: {
    pages: {
      list,
      cards: [pages.card[0], pages.card[1], pages.card[1]]
    },
    projects: {
      list: projects.list,
      cards: [projects.card, projects.card, projects.card]
    },
    roles: {
      list: roles.list,
      cards: [roles.card, roles.card, roles.card]
    },
    education: {
      list: education.list,
      cards: [education.card, education.card, education.card]
    }
  }
}

const reducer = (
  state: trelloState = initialState,
  action: trelloAction
): trelloState => {
  switch (action.type) {
    case actionType.get_trello: 
      return { loading: true, error: null, data: initialState.data }; 
    case actionType.get_trello_success: 
      return { loading: false, error: null, data: action.payload };
    case actionType.get_trello_error: 
      return { loading: false, error: action.payload, data: initialState.data };
    default: 
      return state;
  }
}

export * from './initial'
export default reducer
