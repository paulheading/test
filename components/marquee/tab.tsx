import styles from 'styles/marquee/tab.module.scss'
import { getHero } from 'hooks'
import Link from 'next/link'
import { attachment } from 'state/actions/trello'

interface CreateLink {
  children: string
  more: attachment | null
}

const CreateLink: React.FC<CreateLink> = ({ children, more }) => {
  if (more && more.url) {
    return (
      <a href={more.url} className={styles.link}>
        { children }
      </a>
    )      
  } else {
    return (
      <Link href="/404">
        <a className={styles.link}>
          { children }
        </a>
      </Link>
    )
  }
}

export const Tab: React.FC = () => {
  const { more } = getHero();

  return (
    <div className={styles.container}>
      <CreateLink more={ more }>
        Read more
      </CreateLink>
    </div>
  )
}

      