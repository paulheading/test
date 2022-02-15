import { Loading } from 'components'

interface Status {
  dueComplete: boolean 
  due: string
  start: string
  loading?: boolean
}

export const Status: React.FC<Status> = ({ dueComplete, due, start, loading }) => {
  // https://dockyard.com/blog/2020/02/14/you-probably-don-t-need-moment-js-anymore
  const date = (target: string) => new Date(target).toLocaleDateString('en-gb',{ year: 'numeric', month: 'short' });
  return loading ? <Loading lines={[0.6]} /> : <span>{ dueComplete ? `Finished: ${date(due)}` : `Started: ${date(start)}` }</span>
}