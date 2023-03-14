import React,{useState}from 'react'
const Demo2=()=>{
   let purple="#BF40BF"
   const[bg,setBg]=useState(purple)
   const[cli,setCli]=useState("click me!!")
   const one=()=>{
       
      purple="#000000"
      setBg(purple)
       setCli("one click 👍")
   }
   const two=()=>{
    purple="pink"
    setBg(purple)
       setCli("two clcik 👎")
   }
   return(
       <>
       <div style={{background:bg,height:"100vh"}}>
       <button  onClick={one} onDoubleClick={two}>{cli}</button>
       </div>
       
       </>
   )
}

export default Demo2