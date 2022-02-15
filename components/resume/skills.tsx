import { useEffect } from 'react'
import { useActions, useSelector } from 'hooks'
import styles from 'styles/resume/skills.module.scss'
import { Badge } from 'components'

interface Skills {
  loading?: boolean
}

export const Skills: React.FC<Skills> = ({ loading }) => {
  const { getTreehouse } = useActions();
  const { data } = useSelector(({ treehouse }) => treehouse);
  
  const skill = {
    keys: Object.keys(data),
    values: Object.values(data),
  };

  useEffect(() => {
    getTreehouse();
  }, []);

  return (
    <div className={styles.skills}>
      {data && skill.keys.map((key, index) => {
        const badgeData = { key, color: "purple", className: styles.badge, loading }
        return (
          <Badge {...badgeData}>
            { key } { skill.values[index] }
          </Badge>
        )
      })}
    </div>
  );
}
