
import commonStyles from '../../styles/common.module.scss';
import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.containerHeader}>
      <div className={commonStyles.PositionInBody}> 
        <img className={styles.tagImg} src="/images/Logo.svg" alt="logo" />
      </div>
    </div>
  )
}
