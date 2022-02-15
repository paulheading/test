import { useSelector } from 'hooks'
import { createDesc } from 'scripts/functions'
import { getTrelloSuccessCard } from 'state/actions/trello'
import { Loading } from 'components'

interface Desc {
  desc: string 
  more: getTrelloSuccessCard["more"]
  className?: string
  loading?: boolean
}

export const Desc: React.FC<Desc> = ({ desc, more, className, loading }) => {
  const { data } = useSelector(({ medium }) => medium);
  const { articles } = data;
  const content = !desc && more ? articles.filter(({ link }) => link === more.url)[0].description : desc;

  return <div className={className}>{ loading ? <Loading lines={[1,0.8,0.6]} /> : createDesc(content) }</div>
}