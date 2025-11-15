import { useEffect, useState } from 'react'
import styles from './imageMenu.module.css'

function ImageMenu(props)
{
    const [display,setDisplay] = useState(false)

   useEffect(()=>{
        setTimeout(()=>{
            setDisplay(props.display)
        },10)
    },[props.display])

    return (
        <div className={`${styles.container} ${display?styles.display:''}`}>Menu</div>
    )
}

export default ImageMenu