import axios from 'axios'
import { isAxiosError } from 'scripts/functions'
import { gemAction } from 'state/actions'
import { actionType } from 'state/actions/types'
import { Dispatch } from 'redux'

export const getGem = () => {
  return async (dispatch: Dispatch<gemAction>) => {
    dispatch({
      type: actionType.get_gem
    });

    try {
      const { data } = await axios.get("https://rubygems.org/api/v1/gems/futuro", { headers: { Accept: "application/json" } });
      const { downloads, name, project_uri, version, platform } = data;

      dispatch({
        type: actionType.get_gem_success,
        payload: {
          downloads,
          name,
          url: project_uri,
          version,
          platform
        }
      });
      
    } catch (error) {
      if (isAxiosError(error)) {
        dispatch({
          type: actionType.get_gem_error,
          payload: error.message
        });        
      }
    }
  }
}