import styles from './notesMenu.module.css'
import ArrowIcon from '../../assets/svg/arrowIcon'

function NotesMenu(props)
{
    return(
        <article className={`${styles.container} ${props.display?styles.display:''}`}>
            <div className={styles.arrowContainer} onClick={e=>props.setDisplayNotesMenu(!props.display)}>
                <ArrowIcon class={`${styles.arrow} ${props.display?styles.arrowRotated:''}`}/>
            </div>
        </article>
    )
}

export default NotesMenu