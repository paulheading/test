import { useEffect } from 'react'
import { useActions } from '.'

export const getMedium = () => {
  const { getMedium } = useActions();
  useEffect(() => {
    getMedium();
  }, []);
}