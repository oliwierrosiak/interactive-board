function formatNoteCode(code)
{
    const codeArray = String(code).split('')
    const newCode = []
    codeArray.forEach((x,idx)=>{
        if(idx === 3)
        {
            newCode.push('-')
        }
        newCode.push(x)
    })

    return newCode.join('')
}

export default formatNoteCode

