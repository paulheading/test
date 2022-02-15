import styles from 'styles/badge.module.scss'

interface Badge {
  className?: string
  color?: string
  loading?: boolean 
}

const styleColor = (color: string | undefined) => {
  switch (color) {
    case "purple": return styles.purple;
    case "green": return styles.green;
    case "blue": return styles.blue;
    default: return ""
  }
}

export const Badge: React.FC<Badge> = ({ children, color, loading, className }) => {
  const styleLoading = loading ? styles.loading : ""
  return (
    <div className={`${styles.badge} ${styleLoading} ${styleColor(color)} ${className}`}>
      { children }
    </div>
  )
}
