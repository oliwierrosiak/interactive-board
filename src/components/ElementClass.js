class ElementClass
{
    constructor(classNames)
    {
        this.class = classNames ? [...classNames] : []
        const id = Math.floor(Math.random()*100)
        this.id = `${new Date().getTime()}${id}`
        this.type = 'text'
    }   
}