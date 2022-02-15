import { actionType } from 'state/actions/types'

interface getNpmAction {
  type: actionType.get_npm
}

export interface getNpmSuccessAction {
  type: actionType.get_npm_success
  payload: {
    downloads: number
    name: string
    url: string
  }
}

interface getNpmErrorAction {
  type: actionType.get_npm_error
  payload: string
}

export type npmAction = 
  | getNpmAction
  | getNpmSuccessAction
  | getNpmErrorAction