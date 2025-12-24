import { useEffect, useRef, useContext } from 'react'
import styles from './shapeElement.module.css'
import ClearElementEditContext from '../../context/clearEdit'
import SquareIcon from '../../assets/svg/shapes/square'

function ShapeElement(props)
{

    const clearEdit = useContext(ClearElementEditContext)

    const containerRef = useRef()

    const changePosition = (e)=>{
        props.movingLocked.current = true
        props.item.changePosition(e,props.board,props.movingLocked,containerRef.current)
    } 

    const setSolidPosition = (e) =>{
        props.item.setSolidPosition(props.board,props.movingLocked)
    }

    const checkEditMode = (e) =>{
        const div = e.closest('.element')
        props.item.checkEditMode(div,clearEdit,props.setEdit,props.item)
    }

    const resizeElement = () =>{
        props.item.resizeElement(props.board,containerRef.current,props.movingLocked)
    }

    return(
        <div className={`element editOn ${styles.element}`} style={props.item.getStyles()} onMouseDown={e=>changePosition(e.target.closest('div'))} onMouseUp={setSolidPosition} onClick={e=>checkEditMode(e.target)} ref={containerRef}>

            {props.item.item === "square"?<SquareIcon class={`${styles.svg} ${props.item.getClass()}`}/>:''}
            

            <div className={styles.resize} onMouseDown={resizeElement}></div>

        </div>
    )
}

export default ShapeElement