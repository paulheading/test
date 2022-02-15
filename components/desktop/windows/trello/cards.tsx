import styles from 'styles/desktop/windows/trello/cards.module.scss'
import { Badge } from 'components'
import { useSelector } from 'hooks'
import { removeHero } from 'state/actions/creators/trello/functions'
import { label } from 'state/actions/trello'
import { Empty } from 'components/desktop/windows/trello'

interface Card {
  name: string
  labels?: label[] | null
  url: string
}

const Card: React.FC<Card> = ({ name, labels, url }) => (
  <a href={url} className={styles.link}>
    <span className={styles.name}>{name}</span>{labels && labels.map(({ name, color }, index) => <Badge key={index} color={color} className={styles.badge}>{name}</Badge>) }
  </a>
)

export const Cards: React.FC = () => {
  const { loading, data } = useSelector(({ trello }) => trello);
  const projects = data.projects.cards.filter(card => card.more);
  const cards = projects.map(({ name, more, labels }) => ({
    name: removeHero(name),
    url: more ? more.url : "",
    labels
  }));
  const results = cards.map((card, index) => <Card key={index} {...card} />);

  return (
    <div>
      { loading ? <Empty>Loading...</Empty> : <div className={styles.container}>
          { results.length ? results : <Empty>No results</Empty> }
        </div> }
    </div>
  )
}