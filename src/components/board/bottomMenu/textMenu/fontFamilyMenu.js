import styles from './textMenu.module.css'

function FontFamilyMenu(props)
{
    return (
        <ul className={styles.fontFamilyMenuContainer}>
            {props.fonts.map(x=><li key={`${new Date().getTime()}${Math.floor(Math.random()*10000)}`} className={`${styles.fontFamilyMenuItem} ${x.class} ${x.class === props.fontFamily.class?styles.selected:''}`} onClick={e=>props.changeFontFamily(x)}>{x.text}</li>)}
        </ul>
    )
}

export default FontFamilyMenu