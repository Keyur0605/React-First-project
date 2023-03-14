import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './TodoList';


const Todo = () => {
    const [data, setData] = useState("");
    const [dis, setDis] = useState(false)
    const [remove, setRemove] = useState(false)
    const [edits, setEdits] = useState(false)
    const [text, setText] = useState([])

    const input = (e) => {
        if (e.target.value === "") {
            setDis(false)

        }
        else {
            setDis(true)

        }

        setData(e.target.value)
    }
    const add = (e) => {
        e.preventDefault()
        setDis(false)
        setRemove(true)
       
        setText((pre) => {
            return [...pre, data]
        })

        setData('')


    }
    const delet = (id) => {
        setText((pre) => {
            return pre.filter((arrEle, index) => {
                return index !== id;
            })
        })
    }
    const all = () => {
        setText([])

        setRemove(false)
    }
  const edit=(id)=>{
    setData(text[id])
   setEdits(true)
  }

  const editss=(id,p)=>{
    p.preventDefault()
    setText(data)
  }
    return (
        <div className='main' >
            <div className="center">
                <div className="heading">
                    <h1>To Do list</h1>
                </div>
                <form >
                    <div className='d-flex justify-content-center align-items-center'>

                        <input type="text" placeholder='Enter Your Text' onChange={input} value={data} />
                        {dis === true && <button className='b' onClick={add}><span>+</span></button>}
                        {edits === true && <button className='b' onClick={editss}>Edit</button>}

                    </div>
                </form>
                <ol>
                    {
                        text.map((val, index) => {
                            return <TodoList key={index} id={index} value={val} onSelect={delet}  ga={edit} />
                        })
                    }
                </ol>
                {remove === true && <button onClick={all} className='btn btn-danger aa'>Remove All</button>}

            </div>

        </div>
    )
}

export default Todo
