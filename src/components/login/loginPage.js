import { useContext } from 'react'
import styles from './loginPage.module.css'
import DisplayLoginContext from '../../context/displayLogin'
import ArrowIcon from '../../assets/svg/arrowIcon'

function LoginPage(props)
{
    const displayLoginContext = useContext(DisplayLoginContext)

    return(
        <div className={`${styles.container} ${displayLoginContext.displayLogin?styles.displayContainer:''}`}>
            <div className={styles.back} onClick={e=>displayLoginContext.setDisplayLogin('')}>
                <ArrowIcon class={styles.backSVG}/>
            </div>
        </div>
    )
}

export default LoginPage