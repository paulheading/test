import styles from 'styles/marquee/row.module.scss'
import { getHero } from 'hooks'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

export const Row:React.FC = () => {
  const { marquee, more } = getHero();
  const wrap = useRef<HTMLDivElement>(null);

  const animation = {
    tl: gsap.timeline({ defaults: { ease: "none", duration: 8, repeat: -1 } }),
    go: (target: HTMLDivElement | null) => animation.tl.to(target, { x: -480 })
  };

  const repeatPhrase = (marquee: string) => {
    let output = [];
    for (let index = 0; index < 10; index++) {
      output.push(<span className={styles.phrase} key={index}>{marquee}</span>);
    }
    return output;
  };

  useEffect(() => {
    animation.go(wrap.current);
  },[wrap]);

  return (
    <div className={styles.container}>
      <Link href={more ? more.url : "#" }>
        <a className={styles.link}>
        <div ref={wrap} className={styles.wrap}>
          { marquee && repeatPhrase(marquee) }
        </div>
        </a>
      </Link>
    </div>
  )
}