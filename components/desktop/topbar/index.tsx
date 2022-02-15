import styles from 'styles/desktop/topbar.module.scss'
import { Wifi } from 'components/desktop/topbar'

export const Topbar:React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.icon}>London</div>
        <div className={styles.icon}><Wifi /></div>
        <div className={styles.icon}>12:34</div>
      </div>
    </div>
  )
}

export * from './wifi'
