import { useEffect } from 'react'
import { useActions } from '.'

export const getNpm = () => {
  const { getNpm } = useActions();
  useEffect(() => {
    getNpm();
  }, []);
}