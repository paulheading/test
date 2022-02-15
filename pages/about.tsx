import type { NextPage } from 'next'
import styles from 'styles/pages/about.module.scss'
import { getPage } from 'scripts/functions'
import { Loading } from 'components'
import parse from 'html-react-parser'

const About: React.FC<NextPage> = () => {
  const { loading, data } = getPage("About");
  const content = loading ? <Loading lines={[1,0.75,1,0.5]} /> : <div>{parse(data.desc)}</div>
  
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <h1>{data.name}</h1>
        { content }
      </div>
    </div>
  );
}

export default About
