import styles from 'styles/footer.module.scss'

export const Footer:React.FC = () => {
  return (
    <footer className={styles.container}>
      <span>Say hello :)</span>
      <a className={styles.link} href="mailto:hello@paulh.biz">hello@paulh.biz</a>
    </footer>
  )
}
