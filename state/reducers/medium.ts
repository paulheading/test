import { mediumAction, getMediumSuccessAction } from 'state/actions'
import { actionType } from 'state/actions/types'

interface mediumState {
  loading: boolean
  error: string | null
  data: getMediumSuccessAction["payload"]
}

const initialState = {
  loading: false,
  error: null,
  data: {
    feed: {
      link: "",
      rss: ""
    },
    articles: [{
      author: "",
      categories: [""],
      content: "",
      description: "",
      link: "",
      pubDate: "",
      title: ""
    }]
  }
}

const reducer = (
  state: mediumState = initialState,
  action: mediumAction
): mediumState => {
  switch (action.type) {
    case actionType.get_medium:
      return { loading: true, error: null, data: initialState.data }; 
    case actionType.get_medium_success:
      return { loading: false, error: null, data: action.payload };
    case actionType.get_medium_error:
      return { loading: false, error: action.payload, data: initialState.data };
    default:
      return state;
  }
}

export default reducer;