function Leaf(props)
{
    return(
        <svg className={props.class} style={{...props.style}} viewBox="0 0 480 480"><path d="M0 0h230c138 0 250 112 250 250v230H250C112 480 0 368 0 230V0Z"></path></svg>
    )
}

export default Leaf