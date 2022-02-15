import { useSelector } from 'hooks'

export const getPage = (target: string) => {
  const { loading, data } = useSelector(({ trello }) => trello);
  return { data: data.pages.cards.filter(({ name }) => name === target)[0], loading }
}