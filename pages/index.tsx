import type { NextPage } from 'next'
import styles from 'styles/pages/home.module.scss'
import { Hero } from 'components'

const Home:React.FC<NextPage> = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}

export default Home
