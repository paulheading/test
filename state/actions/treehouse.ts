import { actionType } from 'state/actions/types'

interface getTreehouseAction {
  type: actionType.get_treehouse
}

export interface getTreehouseSuccessAction {
  type: actionType.get_treehouse_success
  payload: {
    "JavaScript": number,
    "CSS": number,
    "Development Tools": number,
    "Databases": number,
    "HTML": number,
    "Computer Science": number,
    "PHP": number,
    "Design": number,
    "Business": number
  }
}

interface getTreehouseErrorAction {
  type: actionType.get_treehouse_error
  payload: string
}

export type treehouseAction = 
  | getTreehouseAction
  | getTreehouseSuccessAction
  | getTreehouseErrorAction