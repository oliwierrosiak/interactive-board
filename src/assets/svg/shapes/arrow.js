function Arrow(props)
{
    return(
        <svg className={props.class} style={{...props.style}} viewBox="0 0 480 480"><path d="M240 0 120 120l120 120-120 120 120 120 240-240L240 0z"></path></svg>
    )
}

export default Arrow