import { useEffect } from 'react'
import { useActions, useSelector } from '../hooks'
import { shuffleArray } from '../state/actions/creators/trello/functions'

export const setHero = () => {
  const { setHero } = useActions();
  const { data } = useSelector(({ trello }) => trello);
  const { projects } = data;
  const { cards } = projects;
  let results = cards.filter(({ name }) => name.startsWith("Hero: "));
  results = shuffleArray(results);  

  useEffect(() => {
    setHero(results);
  },[data]);
}