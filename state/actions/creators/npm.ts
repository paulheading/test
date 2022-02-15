import axios from 'axios'
import { isAxiosError } from 'scripts/functions'
import { npmAction } from 'state/actions'
import { actionType } from 'state/actions/types'
import { Dispatch } from 'redux'

export const getNpm = () => {
  return async (dispatch: Dispatch<npmAction>) => {
    dispatch({
      type: actionType.get_npm
    });

    try {
      const { data } = await axios.get("https://api.npms.io/v2/package/barbican-reset", { headers: { Accept: "application/json" } });
      const { npm, metadata } = data.collected;
      const { name, links, version } = metadata;
      const { downloads } = npm;

      dispatch({
        type: actionType.get_npm_success,
        payload: {
          downloads: downloads[5].count,
          name,
          url: links.npm,
          version
        }
      });
      
    } catch (error) {
      if (isAxiosError(error)) {
        dispatch({
          type: actionType.get_npm_error,
          payload: error.message
        });              
      }
    }
  }
}