import React from 'react'
import {useParams,useLocation} from 'react-router-dom'
const Contact = () => {
  let {name,surname}=useParams()
  let location=useLocation()
  console.log(location);
  return (
    <div>
      <h2>Hello I am {name} {surname} Contact  page</h2>
      {/* <h1>I am Contact page</h1> */}
     
      <p>{location.pathname === `/contact/keyur/lambhiya` ? <button onClick={()=> alert("you are awesome")}>clikme</button>:null}</p>
    </div>
  )
}

export default Contact
