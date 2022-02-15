import styles from 'styles/desktop/credit.module.scss'

export const Credit:React.FC = () => {
  return (
    <a className={styles.link} href="https://www.flaticon.com/authors/dinosoftlabs">
      <h6>
        Icons made by <span className={styles.title}>DinosoftLabs</span>
      </h6>
    </a>
  )
}
