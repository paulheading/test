import { duration } from 'hooks/animateHero'
import { RefObject } from 'react'
import gsap from 'gsap'
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin'

gsap.registerPlugin(DrawSVGPlugin);

export const tl1 = (target: RefObject<HTMLDivElement>) => {
  const { current } = target;
  if (current) {
    const tl = gsap.timeline({ defaults: { duration } });
    const svg = current.getElementsByTagName('svg')[0];
    const path = svg.getElementsByTagName('path')[0];
    tl.clear()
      .from(path, { drawSVG: "0%", repeat: -1, repeatDelay: 1 });
  }
};