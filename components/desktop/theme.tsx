import styles from 'styles/desktop/theme.module.scss'
import { CSSProperties } from 'react'
import { Graph } from 'logos'

interface Theme {
  className?: string
  color: string
  content: {
    loading: any
    error: any
    data: any
  }
}

export const Theme: React.FC<Theme> = ({ className, color, content }) => {
  const { loading, error, data } = content;
  const { name, downloads, version, url } = data;
  const tidyUp = (target: string) => target.split('-').join(' '); 

  const printData = () => (
    <div>
      <div className={styles.copy}>
        <div>
          <a href={url} className={styles.name}>{tidyUp(name)}</a>
          <div className={styles.downloads}>{downloads}</div>
        </div>
        <div className={styles.platform} style={{ color }}>{version}</div>
      </div>
      <div className={styles.graph}>
        <Graph color={color} />
      </div>
    </div>
  );

  return (
    <div className={`${styles.window_outer} ${className}`}>
      <div className={styles.window_inner} style={{ borderColor: color }}>
        {loading && <h4>Loading...</h4>}
        {error && <h4>{error}</h4>}
        {data && printData() }
      </div>
    </div>
  )
}