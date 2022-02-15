import styles from 'styles/desktop/windows/spotify/index.module.scss'
import { forwardRef } from 'react'
import { Header, Cards } from 'components/desktop/windows/spotify'

interface Spotify {
  content: any
  className?: string
  closed?: boolean
}

const Spotify = forwardRef<HTMLDivElement, Spotify>((props, ref) => {
  const { className, closed, content } = props;
  const styleClosed = closed ? styles.closed : "";

  return (
    <div ref={ref} className={`${styles.window_outer} ${className} ${styleClosed}`}>
      <div className={styles.wrap}>
        <a className={styles.skiplink} href="#trello">Skip to Projects</a>
        <div className={styles.window_inner}>
          <Header {...content} />
          <Cards {...content} />
        </div>
      </div>
    </div>
  );
});

export * from './header'
export * from './cards'
export default Spotify