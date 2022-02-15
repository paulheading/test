import styles from 'styles/resume/card.module.scss'
import { Badge } from 'components'
import { getTrelloSuccessCard } from 'state/actions/trello'
import { Name, Status, Desc } from 'components/resume/card'
import { useSelector } from 'hooks'

export const Card: React.FC<getTrelloSuccessCard> = ({ name, labels, dueComplete, due, start, desc, more }) => {
  const { loading } = useSelector(({ trello }) => trello);
  const nameData = { name, more, loading };
  const statusData = { dueComplete, due, start, loading };
  const descData = { desc, more, className: styles.copy, loading };

  return (
    <div>
      { labels && labels.map(({ name, color }, index) => {
        const badgeData = { className: styles.badge, key: index, loading, color };
        return <Badge {...badgeData}>{name}</Badge>
      })}
      <h4>
        <Name {...nameData} />
      </h4>
      <h6 className={styles.date}>
        <Status {...statusData} />
      </h6>
      <Desc {...descData} />
    </div>
  )
}

export * from './name'
export * from './status'
export * from './desc'

