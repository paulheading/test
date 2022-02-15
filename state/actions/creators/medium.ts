import axios from 'axios'
import { Dispatch } from 'redux'
import { isAxiosError } from 'scripts/functions'
import { mediumAction } from 'state/actions'
import { actionType } from 'state/actions/types'

const RSS2JSON = {
  API_KEY: process.env.NEXT_PUBLIC_RSS2JSON_API_KEY,
};

interface source {
  author: string 
  categories: string[] 
  content: string 
  description: string
  guid: string 
  pubDate: string 
  title: string
}

export const getMedium = () => {
  return async (dispatch: Dispatch<mediumAction>) => {
    dispatch({
      type: actionType.get_medium
    });

    try {
      const { data } = await axios.get("https://api.rss2json.com/v1/api.json", { params: { rss_url: "https://medium.com/feed/@paulheading", api_key: RSS2JSON.API_KEY } });      
      const { feed, items } = data;
      const { link, url } = feed;      

      dispatch({
        type: actionType.get_medium_success,
        payload: {
          feed: {
            link,
            rss: url
          },
          articles: items.map(({ author, categories, content, description, guid, pubDate, title }:source) => ({ author, categories, content, description, link: guid, pubDate, title }))
        }
      });
      
    } catch (error) {
      if (isAxiosError(error)) {
        dispatch({
          type: actionType.get_medium_error,
          payload: error.message
        });              
      }
    }
  }
}