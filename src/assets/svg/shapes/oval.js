function Oval(props)
{
    return(
        <svg className={props.class} style={{...props.style}} viewBox="0 0 480 480"><g><ellipse cx="240" cy="240" rx="240" ry="120"></ellipse></g></svg>
    )
}

export default Oval