import { useEffect, useState } from 'react'
import styles from '../login-register.module.css'
import {divClicked,inputBlur,inputFocused} from '../inputActions'
import LoadingIcon from '../../../assets/svg/loadingIcon'

function PasswordForgotten(props)
{
    const [inputValue,setInputValue] = useState('')
    const [error,setError] = useState('')

    const validate = (e) =>{
        console.log("validate")
        setError('')
        if(inputValue.trim() === '')
        {
            setError('Podaj adres email')
        }
        else
        {
            props.setLoading(true)
        }
    }

    useEffect(()=>{
        setError('')
    },[props.display])

    return(
        <div className={`${styles.loginForm} ${styles.loginForm2} ${props.display?styles.display:''}`}>
            <h1 className={`${styles.header} ${styles.headerMargin}`}>Odzyskiwanie konta</h1>

            <div className={`${styles.inputContainer} ${props.loading?styles.inputContainerWhileLoading:''}`} onClick={divClicked}>
                    <input disabled={props.loading} value={inputValue} onChange={e=>setInputValue(e.target.value)} type='text' onBlur={inputBlur} onFocus={inputFocused} className={styles.input}></input>
                    <div className={styles.placeholder}>Podaj swój adres email</div>
            </div>

            <div className={styles.error2}>{error}</div>

            <button className={`${styles.loginBtn} ${props.loading?styles.btnLoading:''}`} onClick={e=>!props.Loading && validate()}>{props.loading?<LoadingIcon class={styles.loading}/>:'Odzyskaj hasło'}</button>

        </div>
    )
}

export default PasswordForgotten