import React,{useState}from 'react'

const Digital = () => {
    let time=new Date().toLocaleTimeString()

  const [times,setTimes]=useState(time)
   
   const Upadte=()=>{
    time=new Date().toLocaleTimeString()
    setTimes(time)
   }
   setInterval(Upadte,1000)
  return (
    <>
    <h1>{times}</h1>
   
    </>
  )
}



export default Digital
