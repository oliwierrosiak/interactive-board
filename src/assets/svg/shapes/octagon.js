function Octagon(props)
{
    return(
        <svg className={props.class} style={{...props.style}} viewBox="0 0 480 480"><path d="M339.4 0H140.6L0 140.6v198.8L140.6 480h198.8L480 339.4V140.6L339.4 0z"></path></svg>
    )
}

export default Octagon