import styles from 'styles/desktop/windows/trello/header.module.scss'
import { More } from 'components/desktop/windows/trello'

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Projects</div>
      <div className={styles.more}>
        <More />
      </div>
    </div>
  )
}