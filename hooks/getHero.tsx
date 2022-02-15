import { useSelector } from 'hooks'

export const getHero = () => {
  const hero = useSelector(({ hero }) => hero);
  const count = useSelector(({ count }) => count);
  return hero.data[count.data];
}