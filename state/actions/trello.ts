import { actionType } from 'state/actions/types'

interface getTrelloAction {
  type: actionType.get_trello
}

export interface attachment {
  name: string,
  url: string,
  id: string,
}

export interface action {
  data: {
    text: string
  }
}

export interface label {
  name: string
  color: string
}

export interface getTrelloSuccessCard {
  name: string,
  id: string,
  marquee: string | null,
  attachments: attachment[],
  more: attachment | null,
  labels: label[] | null,
  svg: string | null,
  desc: string,
  start: string,
  due: string,
  dueComplete: boolean,
}

export interface getTrelloSuccessList {
  id: string
  name: string
}

export interface getTrelloSuccessAction {
  type: actionType.get_trello_success
  payload: {
    pages: {
      list: getTrelloSuccessList
      cards: getTrelloSuccessCard[]
    },
    projects: {
      list: getTrelloSuccessList
      cards: getTrelloSuccessCard[]
    },
    roles: {
      list: getTrelloSuccessList
      cards: getTrelloSuccessCard[]
    },
    education: {
      list: getTrelloSuccessList
      cards: getTrelloSuccessCard[]
    }
  }
}

interface getTrelloErrorAction {
  type: actionType.get_trello_error
  payload: string
}

export type trelloAction = 
  | getTrelloAction
  | getTrelloSuccessAction
  | getTrelloErrorAction