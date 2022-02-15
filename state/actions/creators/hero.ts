import { isAxiosError } from 'scripts/functions'
import { getTrelloSuccessCard, heroAction } from 'state/actions'
import { actionType } from 'state/actions/types'
import { Dispatch } from 'redux'

export const setHero = (payload:Array<getTrelloSuccessCard>) => {
  return async (dispatch: Dispatch<heroAction>) => {
    dispatch({
      type: actionType.set_hero
    });

    try {
      dispatch({
        type: actionType.set_hero_success,
        payload
      });
      
    } catch (error) {
      if (isAxiosError(error)) {
        dispatch({
          type: actionType.set_hero_error,
          payload: error.message
        });        
      }
    }
  }
}