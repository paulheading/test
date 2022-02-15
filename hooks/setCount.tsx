import { useEffect } from 'react'
import { useActions } from './useActions'
import { useSelector } from './useSelector'

export function setCount() {
  const count = useSelector(({ count }) => count);
  const hero = useSelector(({ hero }) => hero);
  const total = hero.data.length - 1;
  const { setCount } = useActions();

  useEffect(() => {
    const timer = setInterval(() => setCount(count.data > 0 ? count.data - 1 : total), 4000);
    return () => clearInterval(timer);
  });
}