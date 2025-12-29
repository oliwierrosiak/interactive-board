import { useState } from 'react'
import Header from '../header/header'
import styles from './home.module.css'
import DisplayLoginContext from '../../context/displayLogin'

function Home()
{
    const [displayLogin,setDisplayLogin] = useState('')

    return(
        <div className={styles.container}>

            <DisplayLoginContext.Provider value={{displayLogin,setDisplayLogin}}>

                <Header />

            </DisplayLoginContext.Provider>

        </div>
    )
}
export default Home