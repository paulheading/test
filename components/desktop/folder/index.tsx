import styles from 'styles/desktop/folder.module.scss'
import { useState } from 'react'
import { Closed, Open } from 'components/desktop/folder'
import gsap from 'gsap'

interface Folder {
  target: HTMLDivElement | null
  closed?: boolean
}

export const Folder: React.FC<Folder> = ({ children, target, closed }) => {
  const [open, setOpen] = useState(closed ? false : true);
  const tl = gsap.timeline({ defaults: { duration: 0.2, ease: "power1.in" } });

  const toggleState = () => {
    if (open && target) {
      tl.to(target,{ scale: 0.5 }).set(target,{ opacity: 0, display: "none" });
    } else {
      tl.set(target,{ display: "block", opacity: 1 }).to(target,{ scale: 1 });
    }
    setOpen(!open)
  }

  return (
    <button className={styles.button} onClick={toggleState}>
      { open ? <Open /> : <Closed /> }
      <h6>
        <div className={styles.title}>
          { children }
        </div>
      </h6>
    </button>
  )
}

export * from './closed'
export * from './open'


