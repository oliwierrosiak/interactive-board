import { useEffect } from "react"

function SquareIcon(props)
{
    useEffect(()=>{
        console.log(props.stl)
    },[])

    return(
        <svg className={props.class} style={{...props.stl}} viewBox="0 0 480 480"><path d="M0 0h480v480H0z"></path></svg>
    )
}

export default SquareIcon