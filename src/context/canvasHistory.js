import React from "react";

const CanvasHistoryContext = React.createContext({
    undoStack:{},
    setUndoStack:()=>{},
    redoStack:{},
    setRedoStack:()=>{},
    update:false,
    setUpdate:()=>{}
})

export default CanvasHistoryContext