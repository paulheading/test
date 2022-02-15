import styles from 'styles/pages/resume.module.scss'
import { Card } from 'components/resume'
import { getTrelloSuccessList, getTrelloSuccessCard } from 'state/actions/trello'

interface Row {
  list: getTrelloSuccessList
  cards: getTrelloSuccessCard[]
}

export const Row: React.FC<Row> = ({ list, cards }) => {
    
  const printCards = () => {
    const initial = cards.filter((_,index) => index <= 2);
    return initial.map((card, index) => <div key={index} className={styles.column}><Card {...card} /></div>);
  }

  return (
    <div className={styles.triple_row}>
      <div className={styles.title_row}>
        <h3>{list.name}</h3>
      </div>
      { printCards() }
    </div>
  )
}
