import React, { useState } from 'react'

// const Input = () => {
//     const[name,setName]=useState("")
//     const[names,setNames]=useState("")
//     const[da,setDa]=useState()
//     const[daa,setDaa]=useState()
//     const show=(e)=>{
//         setName(e.target.value)
//     }
//     const show1=(e)=>{
//         setNames(e.target.value)
//     }
//     const data=()=>{
//         setDa(name)
//         setDaa(names)
//         setName("")
//         setNames("")
//     }
//   return (
//     <div>
//         <h2>Hello {da}  {daa}</h2>
//       <input type="text" placeholder='enter name' onChange={show} value={name} />
//       <input type="text" placeholder='enter name' onChange={show1} value={names} />
//       <button onClick={data}>Click</button>
//     </div>
//   )
// }


const Input = () => {
  const[fullName,setFullName]=useState({
    fName:'',
    lName:'',
    email:'',
    number:''
  })
  const input=(e)=>{
    const value=e.target.value;
    const name=e.target.name;

    setFullName((ev)=>{
      
        return{
          ...ev,
          [name]:value
        }
     
    })
  }

  return (
    <>
    <h1>Hello {fullName.fName} {fullName.lName}</h1>
    <h3>{fullName.email}</h3>
    <p>{fullName.number}</p>
    <input type="text" placeholder='enter fname' onChange={input} name="fName" value={fullName.fName} /> <br/>
    <input type="text" placeholder='enter lname' onChange={input} name="lName"  value={fullName.lName}/>  <br/>
    <input type="email" name="email" onChange={input} placeholder='enter your email' value={fullName.email} /> <br/>
    <input type="tel" name="number" onChange={input} placeholder='enter your mobile number'  value={fullName.number}/>
    </>
  )
}
export default Input
