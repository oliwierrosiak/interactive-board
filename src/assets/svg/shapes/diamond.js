function Diamond(props)
{
    return(
        <svg className={props.class} style={{...props.style}} viewBox="0 0 480 480"><path d="M360 240 240 0 120 240l120 240 120-240z" ></path></svg>
    )
}

export default Diamond