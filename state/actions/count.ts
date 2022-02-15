import { actionType } from 'state/actions/types'

interface setCountAction {
  type: actionType.set_count
}

export interface setCountSuccessAction {
  type: actionType.set_count_success
  payload: number
}

interface setCountErrorAction {
  type: actionType.set_count_error
  payload: string
}

export type countAction = 
  | setCountAction
  | setCountSuccessAction
  | setCountErrorAction