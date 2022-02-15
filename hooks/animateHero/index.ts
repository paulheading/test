import { RefObject } from 'react'
import { tl1, tl2, tl3 } from 'hooks/animateHero'

export const duration = 2;

interface animateHero {
  (id: string, target: RefObject<HTMLDivElement>): TimelineMax | void
}

export const animateHero: animateHero = (id, target) => {
  switch (id) {
    case '606d70215309533eec28564a': return tl3(target);
    case '6073409c74b96c31fb853842': return tl2(target);
    default: return tl1(target);
  }    
}

export * from './tl1'
export * from './tl2'
export * from './tl3'