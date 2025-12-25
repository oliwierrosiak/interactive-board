function Hexagon(props)
{
    return(
        <svg className={props.class} style={{...props.style}} viewBox="0 0 480 480"><path d="M360 32.2H120L0 240l120 207.9h240L480 240 360 32.2z"></path></svg>
    )
}

export default Hexagon