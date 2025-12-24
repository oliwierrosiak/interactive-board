import styles from './shapesMenu.module.css'

function ShapesMenu(props)
{
    return(
        <div className={`${styles.container} ${props.display?styles.displayContainer:''}`}></div>
    )
}

export default ShapesMenu