import { AxiosError } from 'axios'
import parse from 'html-react-parser'

export const isAxiosError = (something: any): something is AxiosError => something.isAxiosError === true;

export const createDesc = (target: string) => {
  const para = target.match(/<p>(.*?)<\/p>/g);
  
  if (para) {
    const array = para[0].slice(3, -4).split(" ");
    const words = array.filter((_, index) => index < 30).join(" ");
    const dots = words.slice(-1) === '.' ? '..' : '...';
    return parse(words + dots);  
  }
}

export * from './trello'
export * from './email'