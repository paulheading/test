import { useEffect, useRef } from 'react'
import styles from 'styles/hero.module.scss'
import { getHero, animateHero } from 'hooks'
import parse from 'html-react-parser'
import { Name } from 'components/resume/card'

export const Hero: React.FC = () => {
  const { id, name, svg, more } = getHero();
  const nameData = { name, more };
  const target = useRef(null);

  useEffect(() => {
    animateHero(id, target);
  },[id]);
    
  return (
    <div className={styles.container} id={id}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>
          <Name {...nameData} />
        </h1>
        <div ref={target} className={styles.svg} id={id}>{svg && parse(svg)}</div>
      </div>
    </div>
  )
}
