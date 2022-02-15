import { actionType } from 'state/actions/types'

interface getGemAction {
  type: actionType.get_gem
}

export interface getGemSuccessAction {
  type: actionType.get_gem_success
  payload: {
    downloads: number
    name: string
    url: string
  }
}

interface getGemErrorAction {
  type: actionType.get_gem_error
  payload: string
}

export type gemAction = 
  | getGemAction
  | getGemSuccessAction
  | getGemErrorAction