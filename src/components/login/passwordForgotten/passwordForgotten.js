import { useEffect, useState } from 'react'
import styles from '../login-register.module.css'
import {divClicked,inputBlur,inputFocused} from '../inputActions'
import LoadingIcon from '../../../assets/svg/loadingIcon'
import axios from 'axios'
import ApiAddress from '../../../ApiAddress'

function PasswordForgotten(props)
{
    const [inputValue,setInputValue] = useState('')
    const [error,setError] = useState('')

    const send = async() =>{
        try
        {
            const response = await axios.post(`${ApiAddress}/resetPassword`,{email:inputValue})
        }
        catch(ex)
        {
            if(ex?.response?.data?.status === 404)
            {
                props.setLoading(false)
                setError('Nie znaleziono adresu w bazie')
            }
            else
            {
                props.setLoading(false)
                setError('Wystąpił błąd serwera')
            }
        }
    }

    const validate = (e) =>{
        e.preventDefault()
        if(props.loading) return
        setError('')
        if(inputValue.trim() === '')
        {
            setError('Podaj adres email')
        }
        else
        {
            props.setLoading(true)
            send()
        }
    }

    useEffect(()=>{
        setError('')
    },[props.display])

    return(
        <form className={`${styles.loginForm} ${styles.loginForm2} ${props.display?styles.display:''}`} onSubmit={validate}>
            <h1 className={`${styles.header} ${styles.headerMargin}`}>Odzyskiwanie konta</h1>

            <div className={`${styles.inputContainer} ${props.loading?styles.inputContainerWhileLoading:''}`} onClick={divClicked}>
                    <input disabled={props.loading} value={inputValue} onChange={e=>setInputValue(e.target.value)} type='text' onBlur={inputBlur} onFocus={inputFocused} className={styles.input}></input>
                    <div className={styles.placeholder}>Podaj swój adres email</div>
            </div>

            <div className={styles.error2}>{error}</div>

            <button className={`${styles.loginBtn} ${props.loading?styles.btnLoading:''}`}>{props.loading?<LoadingIcon class={styles.loading}/>:'Odzyskaj hasło'}</button>

        </form>
    )
}

export default PasswordForgotten