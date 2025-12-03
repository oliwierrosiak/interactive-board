import { useEffect, useState } from 'react'
import styles from './brushMenu.module.css'
import RangeSlider from '../imageMenu/rangeSlider/rangeSlider'

function BrushMenu(props)
{
    const [display,setDisplay] = useState()
    const [brush,setBrush] = useState(props.brush)
    const [displayWidth,setDisplayWidth] = useState(false)
    const [lineWidth,setLineWidth] = useState(props.brush.width)

    useEffect(()=>{
        setTimeout(()=>{
            setDisplay(props.display)
        },10)
    },[props.display])

    const changePencil = (params) =>{
        const {type=brush.type,color=brush.color,width=brush.width} = params
        props.setBrush({type,color,width})
        setBrush({type,color,width})
    }

    useEffect(()=>{
        if(brush.type)
        {
            changePencil({width:lineWidth})
        }
    },[lineWidth])

    return(
        <div className={`${styles.container} ${display?styles.containerDisplay:''}`}>
            <div className={styles.item} onClick={e=>changePencil({type:'brush'})}>linia</div>
            <div className={styles.item} onClick={e=>changePencil({type:'pattern'})}>przer</div>
            <div className={styles.item} onClick={e=>changePencil({type:'spray'})}>spary</div>
            <div className={styles.item} onClick={e=>changePencil({type:'circle'})}>circle</div>
            <div className={styles.item} onClick={e=>setDisplayWidth(true)}>
                grubosc
                {displayWidth && <div className={styles.filterMenu}><RangeSlider property={lineWidth} numberFormat={true} setProperty={setLineWidth}/></div>}    
            </div>
            <div className={styles.item}>Kolor</div>
            <div className={styles.item}>tył</div>
            <div className={styles.item}>przód</div>
            <div className={styles.item} onClick={e=>{props.brushMenuClosed();changePencil({type:'',color:brush.color,width:brush.width})}}>close</div>
        </div>
    )
}

export default BrushMenu