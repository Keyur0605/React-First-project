import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const TodoList = (props) => {
   
  return (
    <div>
      <div className='d-flex'>
        <div className='a' style={{paddingTop:"10px"}}>
        <button className='bb' onClick={()=>{
            props.onSelect(props.id)
        }}>de</button>
        <button className='cc' onClick={()=>{
            props.ga(props.id)
        }}>ed</button>
        </div>

        <li style={{marginLeft:"10px" , paddingTop:"10px"}}>{props.value}</li>
      </div>
    </div>
  )
}

export default TodoList
