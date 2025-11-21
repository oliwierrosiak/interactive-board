import { Canvas, PencilBrush } from 'fabric'
import { useEffect, useRef, useState } from 'react'
import styles from './canvasElement.module.css'

function CanvasElement(props)
{
    const canvasRef = useRef()
    const canvasObj = useRef()

    const resize = () =>{
        const width = document.documentElement.clientWidth
        const height = document.documentElement.clientHeight
        canvasObj.current.setWidth(width)
        canvasObj.current.setHeight(height)
        canvasObj.current.freeDrawingBrush.width = window.innerWidth/1000;
    }

    useEffect(()=>{
       const canvas = new Canvas(canvasRef.current,{
            isDrawingMode:props.drawing
        })
        canvas.freeDrawingBrush = new PencilBrush(canvas);
        canvas.freeDrawingBrush.width = window.innerWidth/1000;
        canvas.freeDrawingBrush.color = "red";

        canvasObj.current = canvas
        resize()

        window.addEventListener("resize",resize)

         return () => {
            canvas.dispose();
            window.removeEventListener("resize",resize)
        };
    },[])

    useEffect(()=>{
        if(canvasObj.current)
        {
            canvasObj.current.isDrawingMode = props.drawing
        }
    },[props.drawing])


    return(
        <canvas ref={canvasRef} className={styles.container}></canvas>
    )
}

export default CanvasElement