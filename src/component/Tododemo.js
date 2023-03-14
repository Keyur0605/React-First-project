import React,{useState} from 'react'
import TodoListDemo from './TodoListDemo'
const Tododemo = () => {
    const[name,setName]=useState("")
    const[item,setItem]=useState([])
    const[btn,setBtn]=useState(false)
    const[alls,setAlls]=useState(false)


    const input=(e)=>{
        setName(e.target.value)

        if(e.target.value === ""){
            setBtn(false)
            setAlls(false)
        }
        else{
            setBtn(true)
            setAlls(true)
        }
    }

    const add=(e)=>{
        e.preventDefault()
        setItem((pre)=>{
            return[...pre,name]
        })
        setName("")
    }

    const delet=(id)=>{
      console.log("fghj");
        setItem((pre)=>{
            return pre.filter((arry,index)=>{
                return index !== id
            })
        })
    }

    const edit=(id)=>{
        setName(item[id])
    }

    const all=()=>{
        setItem([])
        setAlls(false)
    }
  return (
    <div>
   
        <h1>hello friends</h1>
        <input type="text"  placeholder='enter name' onChange={input} value={name}/>
        {btn === true && <button onClick={add}>+</button>} 

         <ol>
            {
                item.map((val,index)=>{
                    return <TodoListDemo
                     key={index}
                      id={index}
                       value={val} 
                       onSelect={delet} 
                       ga={edit}
                       />
                })
            }
         </ol>
      {alls===true && <button onClick={all}>REmove All</button>} 
    </div>
  )
}

export default Tododemo
