import styles from 'styles/marquee.module.scss'
import { Tab, Row } from 'components/marquee'

export const Marquee:React.FC = () => {
  return (
    <div className={styles.container}>
      <Tab />
      <Row />
    </div>
  )
}

export * from './tab'
export * from './row'
