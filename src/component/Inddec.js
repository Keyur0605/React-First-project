import React,{useState} from 'react'

const Inddec = () => {

    const[number,setNumber]=useState(0)
    

    const inc=()=>{
        setNumber(number + 1)
    }
    const dec=()=>{
        if(number>0){
            setNumber(number -1)
        }
        else{
            alert("number is less than 0")
        }
    }
  return (
    <div>
      <h3>{number}</h3>

      <button className='btn btn-danger '>helo</button>
      <button onClick={inc}>incerement</button>
      <button onClick={dec}>decrement</button>
    </div>
  )
}

export default Inddec
