import React,{useState} from 'react'

const Contact = () => {
  const[int,setInt]=useState({
    name:"",
    number:"",
    email:"",
    textarea:""
  })

  const input=(event)=>{
  const {name,value}=event.target
  setInt((e)=>{
    return{
      ...e,
      [name]:value
    }
  })
  }

  const show=(e)=>{
    e.preventDefault()
    alert(`Your Name is ${int.name} Your Phone Number is ${int.number} Your Email Address is ${int.email} and You are Say ${int.textarea}`)

  }
  
  return (
  <>
  <div className='my-5'>
    <h1 className='text-center'>Contact Page</h1>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={show}>
        <div className="mb-3">
  <label  className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Keyur Lambhiya" required name="name" value={int.name} onChange={input}/>
</div>
<div className="mb-3">
  <label  className="form-label">Phone Number</label>
  <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="9313978286" required name="number" value={int.number} onChange={input}/>
</div>
        <div className="mb-3">
  <label  className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required name="email" value={int.email} onChange={input}/>
</div>
<div className="mb-3">
  <label  className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required name="textarea" value={int.textarea} onChange={input}></textarea>
</div>
<div className="mb-3">
 <button className='btn btn-outline-primary' type='submit' >Submit</button>
</div>
        </form>
      </div>
    </div>
  </div>
  </>
  )
}

export default Contact
