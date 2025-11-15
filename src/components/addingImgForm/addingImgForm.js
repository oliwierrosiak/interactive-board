import { useState } from 'react'
import styles from './addingImgForm.module.css'

function AddingImgForm(props)
{

    const [linkValue,setLinkValue] = useState('')
    const [file,setFile] = useState() 

    const inputFocused = (e) =>{
        e.target.placeholder = ''
    }

    const inputBlur = (e) =>
    {
        e.target.placeholder = 'Wprowadź link...'
    }

    return(
        <div className={`${styles.container} ${props.display ? styles.display:''}`}>
            
            <input type='text' value={linkValue} onChange={e=>setLinkValue(e.target.value)} placeholder='Wprowadź link...' className={styles.input} onFocus={inputFocused} onBlur={inputBlur}/>
            <button className={styles.btn}>Potwierdź</button>
            <div className={styles.line}></div>
            <button className={styles.btn}>
                <input type='file' className={styles.inputFile}/>
                Prześlij z urządzenia
            </button>
        </div>
    )
}

export default AddingImgForm