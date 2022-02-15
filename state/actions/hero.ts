import { actionType } from 'state/actions/types'
import { getTrelloSuccessCard } from './trello'

interface setHeroAction {
  type: actionType.set_hero
}

export interface setHeroSuccessAction {
  type: actionType.set_hero_success
  payload: Array<getTrelloSuccessCard>
}

interface setHeroErrorAction {
  type: actionType.set_hero_error
  payload: string
}

export type heroAction = 
  | setHeroAction
  | setHeroSuccessAction
  | setHeroErrorAction