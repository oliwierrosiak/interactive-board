import styles from './notesMenu.module.css'
import ArrowIcon from '../../assets/svg/arrowIcon'

function NotesMenu(props)
{
    return(
        <article className={`${styles.container} ${props.display?styles.display:''}`}>
            <div className={styles.arrowContainer} onClick={e=>props.setDisplayNotesMenu(!props.display)}>
                <ArrowIcon class={`${styles.arrow} ${props.display?styles.arrowRotated:''}`}/>
            </div>

            <section className={styles.section}>
                <h2>Ostatnio Odwiedzone</h2>
                <div className={styles.notesContainer}></div>
            </section>

            <div className={styles.line}></div>

            <section className={styles.section}>
                <h2>Twoje Notatki</h2>
                <div className={styles.notesContainer}></div>
            </section>

        </article>
    )
}

export default NotesMenu