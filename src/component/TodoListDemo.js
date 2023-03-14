import React,{useState} from 'react'

const TodoListDemo = (props) => {
  
  return (
    <div style={{display:"flex"}}>
      <button onClick={()=>{
        props.onSelect(props.id)
      }}>de</button>
      <button onClick={()=>{
        props.ga(props.id)
      }}>ed</button>
     
      <li  >{props.value}</li>
    </div>
  )
}

export default TodoListDemo
