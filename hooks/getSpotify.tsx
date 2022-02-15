import { useEffect } from 'react'
import { useActions } from '.'

export const getSpotify = () => {
  const { getSpotify } = useActions();
  useEffect(() => {
    getSpotify();
  }, []);
}