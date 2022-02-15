import { duration } from 'hooks/animateHero'
import { RefObject } from 'react'
import gsap from 'gsap'

export const tl2 = (target: RefObject<HTMLDivElement>) => {
  const { current } = target;
  if (current) {
    const tl = gsap.timeline({ defaults: { duration } });
    const svg = current.getElementsByTagName('svg')[0];
    const main = svg.querySelector(`#main`);
    const side = svg.querySelector(`#sidebar`);
    tl.clear()
      .set(side, { opacity: 0 })
      .set(main, { scale: 0.1, strokeWidth: 0 })
      .to(side, { opacity: 1, stagger: 0.2, duration: 0.4 }, "together")
      .to(main, { scaleX: 1, duration: 0.8 }, "together")
      .to(main, { scaleY: 1, duration: 0.6, ease: "power1.in", onComplete: () => gsap.set(main, { strokeWidth: 2 }) }, "together+=0.2");
  }
};