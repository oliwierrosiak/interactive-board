import { useContext, useState } from 'react'
import styles from '../login-register.module.css'
import PasswordEye from '../../../assets/svg/passwordEye'
import PasswordEyeHidden from '../../../assets/svg/passwordEyeHidden'
import GoogleIcon from '../../../assets/svg/googleIcon'
import DisplayLoginContext from '../../../context/displayLogin'
import { divClicked,inputBlur,inputFocused } from '../inputActions'

function Login(props)
{
    const [loginValue,setLoginValue] = useState('')
    const [passwordValue,setPasswordValue] = useState('')
    const [showPassword,setShowPassword] = useState(false)

    const displayLoginContext = useContext(DisplayLoginContext)

    return(
        <div className={`${styles.loginForm} ${props.display?styles.display:''}`}>
            <h1 className={styles.header}>Logowanie</h1>
            <form className={styles.form}>

                <div className={`${styles.inputContainer} ${styles.emailInputContainer}`} onClick={divClicked}>
                    <input value={loginValue} onChange={e=>setLoginValue(e.target.value)} type='text' onBlur={inputBlur} onFocus={inputFocused} className={styles.input}></input>
                    <div className={styles.placeholder}>Podaj email</div>
                </div>

                <div className={styles.inputContainer} onClick={divClicked}>
                    <input value={passwordValue} onChange={e=>setPasswordValue(e.target.value)} type={showPassword?'text':'password'} onBlur={inputBlur} onFocus={inputFocused} className={`${styles.input} ${styles.passwordInput}`}></input>
                    <div className={styles.placeholder}>Podaj hasło</div>
                    <div className={styles.eye} onClick={e=>setShowPassword(!showPassword)}>
                        {showPassword?<PasswordEye />:<PasswordEyeHidden />}
                    </div>
                </div>

                <div className={styles.passwordForgotten} onClick={e=>displayLoginContext.setDisplayLogin('passwordForgotten')}>Nie pamiętasz hasła?</div>

                <button className={styles.loginBtn}>Zaloguj się</button>

            </form>

            <div className={styles.line}></div>

            <button className={styles.googleLogin}>
                <GoogleIcon class={styles.googleSVG}/>
                Zaloguj się przez Google
            </button>

            <div className={styles.bottomLink}>
                Nie masz konta? <span className={styles.link} onClick={e=>displayLoginContext.setDisplayLogin('register')}>
                    Zarejestruj się!
                </span>
            </div>
        </div>
    )
}

export default Login