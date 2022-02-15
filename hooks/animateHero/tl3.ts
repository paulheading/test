import { duration } from 'hooks/animateHero'
import { RefObject } from 'react'
import gsap from 'gsap'

export const tl3 = (target: RefObject<HTMLDivElement>) => {
  const { current } = target;
  if (current) {
    const tl = gsap.timeline({ defaults: { duration } });
    const svg = current.getElementsByTagName('svg')[0];
    const path = svg.getElementsByTagName('path')[0];
    tl.clear()
      .set(path, { drawSVG: "0%" })
      .to(path, { drawSVG: "100%" });
  }
};