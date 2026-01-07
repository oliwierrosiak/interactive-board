import styles from './notePassword.module.css'
import ArrowIcon from '../../assets/svg/arrowIcon'
import { useState, useRef } from 'react'
import PasswordEye from '../../assets/svg/passwordEye'
import PasswordEyeHidden from '../../assets/svg/passwordEyeHidden'
import LoadingIcon from '../../assets/svg/loadingIcon'
import axios from 'axios'
import ApiAddress from '../../ApiAddress'

function NotePassword(props)
{
    const [loading,setLoading] = useState(false)
    const [showPassword,setShowPassword] = useState(false)
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const input = useRef()
    const fill = useRef()

    const overlayClicked = (e) =>
    {
        if(e.target.classList.contains(styles.overlay) && !loading)
        {
            props.setDisplayNotePassword(false)
        }
    }

    const containerClicked = (e) =>
    {
        input.current.focus()
    }

    const inputFocused = (e) =>
    {
        e.target.placeholder = ``
        fill.current.classList.add(styles.borderBottomFilled)
    }
    
    const inputBlurred = (e) =>
    {
        e.target.placeholder = `Podaj hasło...`
        fill.current.classList.remove(styles.borderBottomFilled)

    }

    const sendData = async()=>{
        setError('')
        setShowPassword(false)
        setLoading(true)
        try
        {
            const response = await axios.post(`${ApiAddress}/compareNotePassword`,{password})
        }
        catch(ex)
        {
            console.log(ex)
            setError('Wystąpił błąd serwera')
            setLoading(false)
        }
    }

    const validate = () =>{
        if(loading) return;
        if(password === "")
        {
            setError('Wprowadź hasło')
        }
        else
        {
            sendData()
        }
    }

    return(
        <div className={styles.overlay} onClick={overlayClicked}>
            <div className={styles.container}>

                <div className={`${styles.back} ${loading?styles.backWhileLoading:''}`} onClick={e=>!loading && props.setDisplayNotePassword(false)}>
                    <ArrowIcon class={styles.backSVG}/>
                </div>

                <h2 className={styles.header}>Aby dołączyć do tej notatki wymagane jest hasło</h2>

                <div className={`${styles.inputContainer} ${loading?styles.inputContainerWhileLoading:''}`} onClick={containerClicked}>
                    <input disabled={loading} value={password} onChange={e=>setPassword(e.target.value)} ref={input} onFocus={inputFocused} onBlur={inputBlurred} type={showPassword?'text':'password'} placeholder='Podaj hasło...' className={`${styles.input} ${loading?styles.inputWhileLoading:''}`}/>
                    <div className={styles.inputBorder}>
                        <div ref={fill} className={styles.inputBorderFill}></div>
                    </div>

                    <div className={`${styles.eye} ${loading?styles.eyeWhileLoading:''}`} onClick={e=>!loading && setShowPassword(!showPassword)}>
                        {showPassword?<PasswordEye />:<PasswordEyeHidden />}
                    </div>

                </div>

                {error && <div className={styles.error}>{error}</div>}

                <button className={`${styles.btn} ${loading?styles.btnWhileLoading:''}`} onClick={validate}>
                    {loading?<LoadingIcon class={styles.loadingIcon}/>:"Dołącz"}
                </button>

            </div>
        </div>
    )
}

export default NotePassword