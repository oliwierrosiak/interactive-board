import { Canvas, CircleBrush, PatternBrush, PencilBrush, SprayBrush, version } from 'fabric'
import { useContext, useEffect, useRef, useState } from 'react'
import brushColors from './brushColors'
import cursor from '../../assets/img/cursor.png'
import EraserBrush from './eraser'
import CanvasHistoryContext from '../../context/canvasHistory'

function CanvasElement(props)
{
    const canvasRef = useRef()
    const canvasObj = useRef()

    const canvasHistory = useContext(CanvasHistoryContext)

    const getBrushWidth = () =>{
        return 0.2*props.brush.width
    }

    const getBrushColor = () =>
    {
        return brushColors[props.brush.color]
    }

    

    const saveChanges = () =>{
        const json = canvasObj.current.toJSON()
         canvasHistory.setUndoStack(json);
    }

    const objectAddedToCanvas = (e) =>{
        const obj = e.target
        obj.selectable = false
        obj.evented = false
        saveChanges()
    }

    const createCanvas = () =>
    {
        const canvas = new Canvas(canvasRef.current,{
            isDrawingMode:props.drawing
        })
        canvas.preserveObjectStacking = true;
        canvas.renderOnAddRemove = true;
        canvas.selection = false
        canvas.skipTargetFind = false
        canvas.freeDrawingCursor = `url(${cursor}) 16 16, auto`;
        canvas.selection = false;
        canvas.renderOnAddRemove = false;
        canvas.backgroundColor = "transparent"
        canvas.on('object:added',objectAddedToCanvas)
        canvas.setWidth(2500)
        canvas.setHeight(2500)
        canvasObj.current = canvas
        
    }

    useEffect(()=>{
        createCanvas()
        return () => {
            canvasObj.current.dispose();
        };
    },[])

    useEffect(()=>{
        if(canvasObj.current)
        {
            canvasObj.current.isDrawingMode = props.drawing
        }
        props.movingLocked.current = props.drawing
    },[props.drawing])

    const getBrushType = () =>{
        switch(props.brush.type)
        {
            case "":
                return ""
            case 'brush':
                return new PencilBrush(canvasObj.current)
            case 'spray':
                return new SprayBrush(canvasObj.current)
            case 'circle':
                return new CircleBrush(canvasObj.current)
            case 'eraser':
                return new EraserBrush(canvasObj.current)
        }
    }

    useEffect(()=>{
        if(canvasObj.current)
        {
            canvasObj.current.freeDrawingBrush = getBrushType()
            if(props.brush.type === "eraser")
            {
                canvasObj.current.freeDrawingBrush.width = getBrushWidth()
            }
            else
            {
                if(props.brush.type)
                {
                    canvasObj.current.freeDrawingBrush.width = getBrushWidth()
                }
                if(props.brush.color && canvasObj.current.freeDrawingBrush)
                {
                    canvasObj.current.freeDrawingBrush.color = getBrushColor()

                }
            }
           
        }
    },[props.brush])


    useEffect(()=>{
        if(canvasHistory.undoStack?.objects?.length>-1)
        {
            canvasObj.current.clear();
            canvasObj.current.loadFromJSON(canvasHistory.undoStack)
            canvasObj.current.requestRenderAll();
        }

    },[canvasHistory.update])

    return(
        <canvas ref={canvasRef} className={`canvas`}></canvas>
    )
}

export default CanvasElement