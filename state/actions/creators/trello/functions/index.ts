import axios from 'axios'
import showdown from 'showdown'
import { list, trelloAttachments, trelloActions } from 'state/actions/creators/trello/variables'
import { getTrelloSuccessCard, action, attachment, label } from 'state/actions/trello'

export const readmore = (value: attachment[]) => value.filter(({ name }) => name === "Read more")[0];

export const getTrelloAttachments = async (target: string | null) => {
  if (target) {
    const { data } = await axios.get(trelloAttachments(target));
    return data.map(({ id, name, url }: attachment) => {
      return { id, name, url }
    });    
  }
}

export const getTrelloActions = async (target: string | null) => {
  if (target) {
    const { data } = await axios.get(trelloActions(target));
    return data;    
  }
}

export const getTrelloSvgs = (target: action[] | undefined) => {
  if (target && target.length) { 
    const svg = target.filter(({ data }) => {
      const { text } = data;
      if (text && text.startsWith("`<svg")) {
        return true;
      }      
    });
    if (svg.length) {
      return svg[0].data.text.slice(1,-1);
    }
  }
  return null;
};

export const prepLabels = (target: label[] | null) => {
  if (!target) {
    return null
  }
  return !target.length ? [{ name: 'Personal', color: 'grey' }] : target.map(({ name, color }) => {
    return { name, color }
  });
}

export const shuffleArray = (arr:Array<getTrelloSuccessCard>) => arr.sort(() => Math.random() - 0.5);

export const removeHero = (name: string) => name && name.replace("Hero: ", "");

export const makeHtml = (target: string) => new showdown.Converter().makeHtml(target);

export const cardType = (target: string | undefined) => {
  const { pages, roles, projects, education } = list;
  switch (target) {
    case pages: return "pages";
    case roles: return "roles";
    case projects: return "projects";
    case education: return "education";
    default: return "hero";
  }
}

export * from './getTrelloCards'

export * from './getTrelloList'