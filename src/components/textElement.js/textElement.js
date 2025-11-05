import styles from './textElement.module.css'

function TextElement(props)
{
    let moveHandler

    const moveElement = (e,mouseEvent) =>
    {
        const left = Math.round(mouseEvent.clientX/window.innerWidth*100)
        const top = Math.round(mouseEvent.clientY/window.innerHeight*100)
        e.target.style.left = `${left}%`
        e.target.style.top = `${top}%`
    }
    
    const changePosition = (e)=>{
        if(e.target.classList.contains(`editOn`))
        {
            moveHandler = (ev) =>moveElement(e,ev)
            props.board.addEventListener('mousemove',moveHandler) 
        }
    }   

    const setSolidPosition = (e) =>{
        props.board.removeEventListener('mousemove',moveHandler)
    }



    const checkEditMode = (e) =>{
    if(!e.target.classList.contains(styles.editOn))
    {
        props.clearElementEdit()
        e.target.classList.add(`editOn`)
    }
}

    return(
        <div className={`element editOn ${styles.element}`} onMouseDown={changePosition} onMouseUp={setSolidPosition} onClick={checkEditMode}>
            <textarea placeholder="test" ></textarea>
        </div>
    )
}

export default TextElement