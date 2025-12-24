import ElementClass from "../ElementClass";

class ShapeElementClass extends ElementClass
{
    constructor(className,item)
    {
        super(className)
        this.type = "shape"
        this.item = item
    }

    resizeAction(e,containerRef,board,movingLocked)
    {
        if(!e.buttons)
        {
            this.resizeMouseUp(board,movingLocked)
        }
        const [translateX,translateY,scale] = this.getTranslate()
        const width = ((e.pageX-translateX)/scale-containerRef.offsetLeft)*2
        containerRef.style.width = `${width}px`
        containerRef.style.height = `${width}px`
        this.setSizes(width,width)
    }
}


export default ShapeElementClass