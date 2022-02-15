import { isAxiosError } from 'scripts/functions'
import { trelloAction } from 'state/actions/trello'
import { actionType } from 'state/actions/types'
import { Dispatch } from 'redux'
import { list } from './variables'
import { getTrelloList, getTrelloCards } from './functions'

export const getTrello = () => {
  return async (dispatch: Dispatch<trelloAction>) => {
    dispatch({
      type: actionType.get_trello
    });

    try {
      const { pages, projects, roles, education } = list;
      
      dispatch({
        type: actionType.get_trello_success,
        payload: {
          pages: {
            list: await getTrelloList(pages),
            cards: await getTrelloCards(pages)
          },
          projects: {
            list: await getTrelloList(projects),
            cards: await getTrelloCards(projects)
          },
          roles: {
            list: await getTrelloList(roles),
            cards: await getTrelloCards(roles)
          },
          education: {
            list: await getTrelloList(education),
            cards: await getTrelloCards(education)
          },
        }
      });
      
    } catch (error) {
      if (isAxiosError(error)) {
        dispatch({
          type: actionType.get_trello_error,
          payload: error.message
        });        
      }
    }
  }
}