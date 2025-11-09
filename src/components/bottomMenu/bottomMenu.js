import styles from './bottomMenu.module.css'

function BottomMenu(props)
{
    const textClicked = () =>{
        props.clearElementEdit()
        props.addTextItem()
    }

    return(
        <div className={`${styles.menu} ${props.display?styles.display:''}`}>
            <div className={styles.item} onClick={textClicked}>
                Text
            </div>
        </div>
    )
}

export default BottomMenu