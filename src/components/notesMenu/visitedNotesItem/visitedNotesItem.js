import styles from './visitedNotesItem.module.css'
import formatNoteCode from '../../helpers/formatNoteCode'
import { useNavigate } from 'react-router-dom'

function VisitedNotesItem(props)
{
    const navigate = useNavigate()

    const liClicked = (e) =>{
        props.setDisplayPageRedirectionAnimation(true)
        setTimeout(() => {
            navigate(`/note/${props._id}`)
        }, 1000);
    }

    return(
        <li className={styles.container} onClick={liClicked}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.code}>{formatNoteCode(props.code)}</div>
        </li>
    )
}

export default VisitedNotesItem