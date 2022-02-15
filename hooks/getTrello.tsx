import { useEffect } from 'react'
import { useActions } from '.'

export const getTrello = () => {
  const { getTrello } = useActions();
  useEffect(() => {
    getTrello();
  }, []);
}