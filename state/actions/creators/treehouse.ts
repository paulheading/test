import axios from 'axios'
import { isAxiosError } from 'scripts/functions'
import { treehouseAction } from 'state/actions'
import { actionType } from 'state/actions/types'
import { Dispatch } from 'redux'

export const getTreehouse = () => {
  return async (dispatch: Dispatch<treehouseAction>) => {
    dispatch({
      type: actionType.get_treehouse
    });

    try {
      const { data } = await axios.get("/api/treehouse");

      dispatch({
        type: actionType.get_treehouse_success,
        payload: data
      });
      
    } catch (error) {
      if (isAxiosError(error)) {
        dispatch({
          type: actionType.get_treehouse_error,
          payload: error.message
        });        
      }
    }
  }
}