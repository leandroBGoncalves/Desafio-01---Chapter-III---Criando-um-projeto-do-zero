
import styles from './post.module.scss';

export default function Post() {
    return (
        <div>
            <h1 className={styles.title}>Como utilizar Hooks</h1>
            <p className={styles.subTitle}>Pensando em sincronização em vez de ciclos de vida.</p>
            <div className={styles.boxInfos}>
                <div className={styles.contentInfo}>
                    <img src="/images/calendar.svg" alt="calendario" />
                    <span>15 Mar 2021</span>
                </div>
                <div className={styles.contentInfo}>
                    <img src="/images/user.svg" alt="avatar usuario" />
                    <span>Joseph Oliveira</span>
                </div>
            </div>
        </div>
    )
}