import styles from 'styles/desktop/windows/trello/index.module.scss'
import { forwardRef } from 'react'
import { Header, Cards, Footer } from 'components/desktop/windows/trello'

interface Trello {
  className?: string
  id?: string
}

const Trello = forwardRef<HTMLDivElement, Trello>((props, ref) => {
  const { className, id } = props;
  return (
    <div ref={ref} className={`${styles.window_outer} ${className}`} id={id}>
      <div className={styles.wrap}>
        <a className={styles.skiplink} href="#folders">Skip to Folders</a>
        <div className={styles.window_inner}>
          <Header />
          <Cards />
          <Footer />
        </div>
      </div>
    </div>
  );
});

export * from './header'
export * from './cards'
export * from './footer'
export * from './empty'
export * from './plus'
export * from './more'
export default Trello
