function Rectangle(props)
{
    return(
        <svg className={props.class} style={{...props.style}} viewBox="0 0 480 480"><path d="M80 0h320v480H80z"></path></svg>
    )
}

export default Rectangle