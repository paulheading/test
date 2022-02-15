import styles from 'styles/desktop/windows/spotify/cards.module.scss'

interface Card {
  number: number
  name: string
  artist: {
    name: string
    url: string
  }
  url: string
}

const Card: React.FC<Card> = ({ number, name, artist, url }) => {
  return (
    <div className={styles.row}>
      <div className={styles.number}>
        { number }
      </div>
      <div className={styles.info}>
        <div>
          <a href={url} className={styles.title}>
            { name }
          </a>
        </div>
        <div>
          <a href={artist.url} className={styles.artist}>
            { artist.name }
          </a>          
        </div>
      </div>
    </div>
  )
}

interface Cards {
  tracks: any[]
}

export const Cards: React.FC<Cards> = ({ tracks }) => {
  return (
    <div className={styles.container}>
      { tracks.map((card, index) => <Card key={index} number={index + 1} {...card} />) }
    </div>
  )
}