function Circle(props)
{
    return(
        <svg className={props.class} style={{...props.style}} viewBox="0 0 480 480"><g><circle cx="240" cy="240" r="240"></circle></g></svg>
    )
}

export default Circle