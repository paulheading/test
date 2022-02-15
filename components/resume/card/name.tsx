import styles from 'styles/resume/card.module.scss'
import { getTrelloSuccessCard } from 'state/actions/trello'
import { removeHero } from 'state/actions/creators/trello/functions'
import { Loading } from 'components'

interface Name {
  name: getTrelloSuccessCard["name"]
  more?: getTrelloSuccessCard["more"]
  loading?: boolean
}

export const Name: React.FC<Name> = ({ more, name, loading }) => {
  const printName = loading ? <Loading lines={[0.8]} /> : <span>{removeHero(name)}</span>;    
  return more ? <a className={styles.link} href={more.url}>{printName}</a> : printName
}