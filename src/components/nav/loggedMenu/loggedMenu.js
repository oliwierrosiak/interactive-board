import { useContext, useState } from 'react'
import styles from './loggedMenu.module.css'
import ImgLoadingIcon from '../../../assets/svg/imgLoadingIcon'
import LoginContext from '../../../context/loginContext'
import defaultImg from '../../../assets/img/userDefault.png'

function LoggedMenu(props)
{

    const [imgLoading,setImgLoading] = useState(true)

    const loginContext = useContext(LoginContext)

    const [img,setImg] = useState(loginContext.loggedUser.img||defaultImg)

    return(
        <div className={styles.container}>

            <div className={styles.menuContainer}>
                <div className={styles.menu}>
                    <button onClick={e=>loginContext.logout()}>logout</button>
                </div>
            </div>

            <div className={styles.imgContainer}>
                <img src={img} onLoad={e=>setImgLoading(false)} onError={e=>{e.target.src=defaultImg}}/>
                <div className={`${styles.imgLoadingOverlay} ${imgLoading?styles.displayImgOverlay:''}`}><ImgLoadingIcon class={styles.loadingSVG}/></div>
            </div>

            
        </div>
    )
}

export default LoggedMenu