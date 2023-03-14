import React,{useState}from 'react'

const Acco = ({question,answer}) => {
const[dat,setDat]=useState(false)

  return (
    <>
    <div style={{display:"flex"}}>
        <button onClick={()=>setDat(!dat)}>{dat?"-":"+"}</button>
        <p>{question}</p>
        </div>
       {dat===true && <p>{answer}</p>} 
        </>
    
  )
}

export default Acco
