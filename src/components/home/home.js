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
    const [notesUpdater,setNotesUpdater] = useState(0)

    useEffect(()=>{
        document.title = `Strona Główna`
    },[])

    useEffect(()=>{
        document.title = displayJoinWithCode?'Dołącz za pomocą kodu':`Strona Główna`
    },[displayJoinWithCode])

    useEffect(()=>{
        document.title = displayAddingNote?'Tworzenie notatki':`Strona Główna`
    },[displayAddingNote])

    useEffect(()=>{
        document.title = displayNotePassword?"Hasło notatki":"Strona Główna"
    },[displayNotePassword])

    return(
        <>

                <Main setDisplayJoinWithCode={setDisplayJoinWithCode} setDisplayAddingNote={setDisplayAddingNote} setDisplayRedirectPageAnimation={setDisplayRedirectPageAnimation} setDisplayNoteEdit={setDisplayNoteEdit} notesUpdater={notesUpdater}/>

                {displayJoinWithCode && <JoinWithCode setDisplayJoinWithCode={setDisplayJoinWithCode} setDisplayRedirectPageAnimation={setDisplayRedirectPageAnimation} setDisplayNotePassword={setDisplayNotePassword} setNoteIdMemory={setNoteIdMemory}/>}

                {displayNotePassword && <NotePassword notePassword={false} setDisplayNotePassword={setDisplayNotePassword} noteIdMemory={noteIdMemory} setDisplayRedirectPageAnimation={setDisplayRedirectPageAnimation} setNoteIdMemory={setNoteIdMemory}/>}

                {displayAddingNote && <AddingNote setNotesUpdater={setNotesUpdater} setDisplayAddingNote={setDisplayAddingNote} setDisplayRedirectPageAnimation={setDisplayRedirectPageAnimation}/>}

                {displayNoteEdit && <EditNote setNotesUpdater={setNotesUpdater} note={displayNoteEdit} setDisplayNoteEdit={setDisplayNoteEdit}/>}

                <div className={`${styles.redirectPage} ${displayRedirectPageAnimation?styles.redirectPageDisplay:''}`}></div>

        </>
    )
}
export default Home