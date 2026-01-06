import { useState } from 'react'
import Header from '../header/header'
import styles from './home.module.css'
import DisplayLoginContext from '../../context/displayLogin'
import JoinWithCode from '../joinWithCode/joinWithCode'

function Home()
{
    const [displayLogin,setDisplayLogin] = useState('')
    const [displayJoinWithCode,setDisplayJoinWithCode] = useState(false)

    return(
        <DisplayLoginContext.Provider value={{displayLogin,setDisplayLogin}}>
    
            <div className={styles.container}>

                <Header setDisplayJoinWithCode={setDisplayJoinWithCode}/>

                {displayJoinWithCode && <JoinWithCode setDisplayJoinWithCode={setDisplayJoinWithCode}/>}

            </div>

        </DisplayLoginContext.Provider>
    )
}
export default Home