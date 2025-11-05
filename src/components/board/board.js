import { useRef, useState } from 'react'
import BottomMenu from '../bottomMenu/bottomMenu'
import styles from './board.module.css'
import TextElement from '../textElement.js/textElement'

function Board()
{
    const boardRef = useRef()

    const [textElements,setTextElements] = useState([])

    const addTextItem = () =>
    {
        const localTextElement = [...textElements]
        localTextElement.push(1)
        setTextElements(localTextElement)
    }

    const clearElementEdit = () =>{
        const elements = [...document.querySelectorAll('.element')]
        elements.forEach(x=>{
            x.classList.remove(`editOn`)
        })
    }

    const boardClicked = (e) =>{
        if(e.target.classList.contains(styles.board))
        {
            clearElementEdit()
        }
    }

    return(
        <>
            <div className={styles.board} ref={boardRef} onClick={boardClicked}>
                {textElements.map(x=><TextElement board={boardRef.current} clearElementEdit={clearElementEdit}/>)}
            </div>
            <BottomMenu addTextItem={addTextItem} clearElementEdit={clearElementEdit}/>
        </>
    )
}

export default Board