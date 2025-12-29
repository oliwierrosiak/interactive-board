import { useContext } from 'react'
import styles from './nav.module.css'
import DisplayLoginContext from '../../context/displayLogin'

function Nav(props)
{
    const displayLoginContext = useContext(DisplayLoginContext)

    return(
        <nav className={styles.nav}>
            <div className={styles.logo}></div>
            <div className={styles.loginMenu}>
                <button className={`${styles.loginMenuBtn} ${styles.loginBtn}`} onClick={e=>displayLoginContext.setDisplayLogin("login")}>Logowanie</button>
                <div className={styles.line}></div>
                <button className={`${styles.loginMenuBtn} ${styles.registerBtn}`} onClick={e=>displayLoginContext.setDisplayLogin("register")}>Rejestracja</button>
            </div>
        </nav>
    )
}

export default Nav