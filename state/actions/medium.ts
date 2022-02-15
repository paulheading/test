import { actionType } from 'state/actions/types'

interface getMediumAction {
  type: actionType.get_medium
}

export interface article {
  author: string 
  categories: string[] 
  content: string 
  description: string
  link: string 
  pubDate: string 
  title: string
}

export interface getMediumSuccessAction {
  type: actionType.get_medium_success
  payload: {
    feed: any
    articles: article[]
  }
}

interface getMediumErrorAction {
  type: actionType.get_medium_error
  payload: string
}

export type mediumAction = 
  | getMediumAction
  | getMediumSuccessAction
  | getMediumErrorAction