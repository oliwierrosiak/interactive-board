import styles from './joinWithCode.module.css'
import ArrowIcon from '../../assets/svg/arrowIcon'
import { useEffect, useReducer, useState } from 'react'

function JoinWithCode(props)
{

    const reducer = (state,action) =>
    {
        switch(action.type)
        {
            case 'code1':
                state.code1 = action.value
                break
            case 'code2':
                state.code2 = action.value
                break
            case 'code3':
                state.code3 = action.value
                break
            case 'code4':
                state.code4 = action.value
                break
            case 'code5':
                state.code5 = action.value
                break
            case 'code6':
                state.code6 = action.value
                break
        }
        return {...state}
    }

    const [code,dispatch] = useReducer(reducer,{
        code1:'',
        code2:'',
        code3:'',
        code4:'',
        code5:'',
        code6:'',
    })

    const [joinBtnEnabled,setJoinBtnEnable] = useState(false)

    const overlayClicked = (e) =>{
        if(e.target.classList.contains(styles.overlay))
        {
            props.setDisplayJoinWithCode(false)
        }
    }

    const focusNextElement = (idx) =>
    {
        const inputs = document.querySelectorAll(`.${styles.input}`)
        if(idx === 6)
        {
            inputs[5].blur()
        }
        else
        {
            inputs[idx].focus()

        }
    }

    useEffect(()=>{
        let buttonEnable = true
        for(const key in code)
        {
            if(!code[key])
            {
                buttonEnable = false
            }
        }
        if(buttonEnable != joinBtnEnabled)
        {
            setJoinBtnEnable(buttonEnable)
        }
    },[code])


    return(
        <div className={styles.overlay} onClick={overlayClicked}>

            <div className={styles.container}>

                <div className={styles.back} onClick={e=>props.setDisplayJoinWithCode(false)}>
                    <ArrowIcon class={styles.backSVG}/>
                </div>

                <div className={styles.logo}>

                </div>

                <div className={styles.codeContainer}>

                    <input type='text' maxLength="1" inputMode='numeric' className={styles.input} value={code.code1} onChange={e=>{dispatch({type:'code1',value:e.target.value});e.target.value !== "" && focusNextElement(1)}}/>

                    <input type='text' maxLength="1" inputMode='numeric' className={styles.input} value={code.code2} onChange={e=>{dispatch({type:'code2',value:e.target.value});e.target.value !== "" && focusNextElement(2)}}/>

                    <input type='text' maxLength="1" inputMode='numeric' className={styles.input} value={code.code3} onChange={e=>{dispatch({type:'code3',value:e.target.value});e.target.value !== "" && focusNextElement(3)}}/>

                    <div className={styles.dash}>-</div>

                    <input type='text' maxLength="1" inputMode='numeric' className={styles.input} value={code.code4} onChange={e=>{dispatch({type:'code4',value:e.target.value});e.target.value !== "" && focusNextElement(4)}}/>

                    <input type='text' maxLength="1" inputMode='numeric' className={styles.input} value={code.code5} onChange={e=>{dispatch({type:'code5',value:e.target.value});e.target.value !== "" && focusNextElement(5)}}/>

                    <input type='text' maxLength="1" inputMode='numeric' className={styles.input} value={code.code6} onChange={e=>{dispatch({type:'code6',value:e.target.value});e.target.value !== "" && focusNextElement(6)}}/>
                </div>

                <button disabled={!joinBtnEnabled} className={`${styles.btn} ${joinBtnEnabled?styles.btnEnable:''}`}>
                    Dołącz
                </button>
            </div>

        </div>
    )
}

export default JoinWithCode