import styles from './nav.module.css'

function Nav(props)
{
    return(
        <nav className={styles.nav}>
            <div className={styles.logo}></div>
            <div className={styles.loginMenu}>
                <button className={`${styles.loginMenuBtn} ${styles.loginBtn}`}>Logowanie</button>
                <div className={styles.line}></div>
                <button className={`${styles.loginMenuBtn} ${styles.registerBtn}`}>Rejestracja</button>
            </div>
        </nav>
    )
}

export default Nav