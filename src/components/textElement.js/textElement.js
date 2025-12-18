import { useEffect, useRef, useState } from 'react'
import styles from './textElement.module.css'

function TextElement(props)
{

    const containerRef = useRef()

    const [textValue,setTextValue] = useState('') 

    const changePosition = (e)=>{
        props.movingLocked.current = true
        props.item.changePosition(e,props.board,props.movingLocked,containerRef.current)
    }   

    const setSolidPosition = (e) =>{
        props.item.setSolidPosition(props.board,props.movingLocked)
    }

    const checkEditMode = (e) =>{
        const div = e.closest('.element')
        props.item.checkEditMode(div,props.clearElementEdit,props.setEdit,props.item)
    }

    const resizeElement = () =>{
        props.item.resizeElement(props.board,containerRef.current,props.movingLocked)
    }

    useEffect(()=>{
        props.item.setText(textValue)
    },[textValue])

    useEffect(()=>{
        props.item.setPositionRelativeToScreen()
        const {left,top} = props.item.getStyles()
        containerRef.current.style.left = left
        containerRef.current.style.top = top
    },[])


    const textAreaFocused = (e) =>
    {
        e.target.placeholder = ''
        props.movingLocked.current = true
    }

    const textAreaBlur = (e) =>{
        e.target.placeholder = 'Wprowadź tekst...'
        props.movingLocked.current = false
    }

    return(
        <div className={`element editOn ${styles.element} ${props.item.getClass()}`} style={props.item.getStyles()} onMouseDown={e=>changePosition(e.target)} onMouseUp={setSolidPosition} onClick={e=>checkEditMode(e.target)} ref={containerRef}>
            <textarea placeholder="Wprowadź tekst..." onChange={e=>setTextValue(e.target.value)} value={textValue} className={styles.textArea} onFocus={textAreaFocused} onBlur={textAreaBlur}></textarea>

            <div className={styles.resize} onMouseDown={resizeElement}></div>
        
        </div>
    )
}

export default TextElement