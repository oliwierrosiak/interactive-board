import styles from './textMenu.module.css'

function TextMenu(props)
{
    return(
        <div className={`${styles.container} ${props.display?styles.display:''}`}>

        </div>
    )
}

export default TextMenu