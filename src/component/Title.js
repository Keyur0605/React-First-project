import React,{useEffect,useState} from 'react'

const Title = () => {
    const[num,setNum]=useState(0)

    useEffect(()=>{
        document.title=`you are click ${num}`
    })
  return (
    <div>
      <button onClick={()=> setNum(num+1)}> Clcik me {num}</button>
    </div>
  )
}

export default Title
