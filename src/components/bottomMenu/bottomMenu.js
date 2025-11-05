import styles from './bottomMenu.module.css'

function BottomMenu(props)
{
    const textClicked = () =>{
        props.addTextItem()
        props.clearElementEdit()
    }

    return(
        <div className={styles.menu}>
            <div className={styles.item} onClick={textClicked}>
                Text
            </div>
        </div>
    )
}

export default BottomMenu