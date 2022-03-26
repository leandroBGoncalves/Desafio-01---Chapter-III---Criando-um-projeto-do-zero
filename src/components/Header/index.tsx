
import commonStyles from '../../styles/common.module.scss';
import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.containerHeader}>
      <div className={commonStyles.PositionInBody}> 
        <img className={styles.tagImg} src="/images/tagPink.svg" alt="tag html logo" />
        <img className={styles.nameLogoImg} src="/images/spacetraveling.svg" alt="name html logo" />
        <h1 className={styles.dot}>.</h1>
      </div>
    </div>
  )
}
