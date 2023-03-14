import React from 'react'
import { NavLink } from 'react-router-dom'


const Comman = (props) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto ">
                <div className="row d-flex justify-content-center align-item-center ">
                <div className="col-md-6 d-block my-auto">
                    <h1>{props.name} <br/> <strong style={{color:"#d6a4de"}}>Web Devloper</strong></h1>
                    <h5 className='mt-4 mb-3'>{props.dec}</h5>
                    <NavLink to={props.visit} className="mt-3 btn btn-outline-success btns">{props.btns}</NavLink>
                </div>
                <div className="col-md-6 order-1 order-lg-2 background" >
                
                    <img src={props.Img} alt="ghjhkj"  />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Comman
