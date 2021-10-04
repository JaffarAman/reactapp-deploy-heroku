import React, { useState } from "react"
const App = () => {
    const [notes, setNotes] = useState([{title:"jaffar",iscomplete : false } , {title:"Bilal",iscomplete : false }])
    const [index , setIndex] = useState(null)
    
    const [editInputValue , setEditInputValue ] = useState(null)
    const editInput = (e)=>{
        console.log(editInputValue);
        notes[e.id].title = editInputValue
        setIndex(null)
    }
    console.log(notes)
    return (
        <>
            <div>

                <div className="inputBar">
                    <input type="text" placeholder="Enter Your Notes" />
                    <button>ADD TODO</button>
                    <button>DEL TODO</button>
                </div>

                <div className="notesBox">
                    <ul>
                        {notes.map((val, ind) => {
                            return ind === index ? <> <input  type="text" onChange={(e)=>setEditInputValue(e.target.value)} placeholder="edit input"/> 
                                <button id={ind} onClick={(e)=>editInput(e.target)}>EDIT</button>
                             </>
                            : 
                            <>
                            
                            <li key={ind} style={{textDecoration : notes[ind].iscomplete ? "line-through" : "none"} }>
                            
                            <input  type="checkbox" id={ind} name={`li${ind}`} onClick={(e)=>{
                                notes[e.target.id].iscomplete?
                                notes[e.target.id].iscomplete = false :
                                notes[e.target.id].iscomplete = true;
                                setNotes([...notes]
                                )
                            }}  />{val.title}
                            <button>DEL</button>
                            <button  onClick={()=>{
                                setIndex(ind);
                                console.log(index);
                            }}  >EDIT</button>
                            
                        </li>
                            </>





                        })}
                    </ul>

                </div>




            </div>
        </>
    )
}

export default App