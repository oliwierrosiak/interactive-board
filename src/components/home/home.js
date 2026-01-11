import { useEffect, useState } from 'react'
import styles from './home.module.css'
import JoinWithCode from '../joinWithCode/joinWithCode'
import NotePassword from '../notePassword/notePassword'
import AddingNote from '../addingNote/addingNote'
import Main from '../main/main'
import EditNote from '../editNote/editNote'

function Home()
{
    
    const [displayJoinWithCode,setDisplayJoinWithCode] = useState(false)
    const [displayRedirectPageAnimation,setDisplayRedirectPageAnimation] = useState(false)
    const [displayNotePassword,setDisplayNotePassword] = useState(false)
    const [noteIdMemory,setNoteIdMemory] = useState('')
    const [displayAddingNote,setDisplayAddingNote] = useState(false)
    const [displayNoteEdit,setDisplayNoteEdit] = useState(false)

    return(
        <div className={styles.container}>

                <Main setDisplayJoinWithCode={setDisplayJoinWithCode} setDisplayAddingNote={setDisplayAddingNote} setDisplayRedirectPageAnimation={setDisplayRedirectPageAnimation} setDisplayNoteEdit={setDisplayNoteEdit}/>

                {displayJoinWithCode && <JoinWithCode setDisplayJoinWithCode={setDisplayJoinWithCode} setDisplayRedirectPageAnimation={setDisplayRedirectPageAnimation} setDisplayNotePassword={setDisplayNotePassword} setNoteIdMemory={setNoteIdMemory}/>}

                {displayNotePassword && <NotePassword notePassword={false} setDisplayNotePassword={setDisplayNotePassword} noteIdMemory={noteIdMemory} setDisplayRedirectPageAnimation={setDisplayRedirectPageAnimation} setNoteIdMemory={setNoteIdMemory}/>}

                {displayAddingNote && <AddingNote setDisplayAddingNote={setDisplayAddingNote} setDisplayRedirectPageAnimation={setDisplayRedirectPageAnimation}/>}

                {displayNoteEdit && <EditNote note={displayNoteEdit} setDisplayNoteEdit={setDisplayNoteEdit}/>}

                <div className={`${styles.redirectPage} ${displayRedirectPageAnimation?styles.redirectPageDisplay:''}`}></div>

        </div>
    )
}
export default Home