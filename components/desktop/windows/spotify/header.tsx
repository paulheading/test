import styles from 'styles/desktop/windows/spotify/header.module.scss'
import { Spotify } from 'logos'
import Image from 'next/image'

interface Header {
  name: string
  owner: {
    url: string
    name: string
  }
  url: string
  image: string
}

export const Header: React.FC<Header> = ({ name, owner, url, image }) => (
  <div className={styles.container}>
      <div className={styles.link}>
        { image.length ? <Image width="80" height="80" src={image} alt={name} /> : null }
      </div>
      <div className={styles.wrap}>
        <div>
          <div>
            <a href={url} className={styles.name}>{ name }</a>
          </div>
          <div>
            <a href={owner.url} className={styles.owner}>{ owner.name }</a>
          </div>
        </div>
        <div>
          <Spotify />
        </div>
      </div>
    </div>
);