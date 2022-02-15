import { isAxiosError } from 'scripts/functions'
import { countAction } from 'state/actions'
import { actionType } from 'state/actions/types'
import { Dispatch } from 'redux'

export const setCount = (payload:number) => {
  return async (dispatch: Dispatch<countAction>) => {
    dispatch({
      type: actionType.set_count
    });

    try {
      dispatch({
        type: actionType.set_count_success,
        payload
      });
      
    } catch (error) {
      if (isAxiosError(error)) {
        dispatch({
          type: actionType.set_count_error,
          payload: error.message
        });        
      }
    }
  }
}