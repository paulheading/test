import { useEffect } from 'react'
import { useActions } from '.'

export const getGem = () => {
  const { getGem } = useActions();
  useEffect(() => {
    getGem();
  }, []);
}