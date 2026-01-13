import { useRef, useState } from 'react'
import styles from './deletingAccountConfirm.module.css'

function DeletingAccountConfirm(props)
{

    const [password,setPassword] = useState('')

    const borderFillRef = useRef()
    const inputRef = useRef()

    const overlayClicked = (e) =>{
        if(e.target.classList.contains(styles.overlay))
        {
            props.setDisplay(false)
        }
    }

    const cancelClicked = (e) =>
    {
        props.setDisplay(false)
    }

    const inputFocused = (e) =>{
        borderFillRef.current.classList.add(styles.borderFilled)
    }

    const inputBlurred = (e) =>
    {
        borderFillRef.current.classList.remove(styles.borderFilled)
    }

    const containerClicked = (e) =>
    {
        inputRef.current.focus()
    }

    return(
        <div className={styles.overlay} onClick={overlayClicked}>
            <div className={styles.container}>
                <h1 className={styles.header}>Usuwanie Konta</h1>
                <p className={styles.description}>Aby ukończyć proces usuwania konta wymagane jest podanie hasła. Po podaniu hasła i kliknięciu przycisku "Usuń Konto", twoje konto zostanie usunięte z naszego serwisu. Ta operacja jest <mark className={styles.mark}>nieodwracalna!</mark></p>

                <div className={styles.inputContainer} onClick={containerClicked}>
                    <input ref={inputRef} onBlur={inputBlurred} onFocus={inputFocused} placeholder='Wprowadź hasło' value={password}
                    onChange={e=>setPassword(e.target.value)} type='password' className={styles.input}/>
                    <div className={styles.border}>
                        <div ref={borderFillRef} className={styles.borderFill}></div>
                    </div>
                </div>

                <div className={styles.btnContainer}>
                    <button onClick={cancelClicked} className={`${styles.btn} ${styles.cancel}`}>Anuluj</button>
                    <button className={`${styles.btn} ${styles.delete}`}>Usuń Konto</button>
                </div>

            </div>
        </div>
    )
}

export default DeletingAccountConfirm