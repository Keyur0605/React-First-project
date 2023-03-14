import React,{useState} from 'react'
import Card from './Card'
import Sdata from './Sdata'
const Services = () => {
  const[data,setData]=useState(Sdata)
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4 d-flex justify-content-center">
            {
              data.map((val,index)=>{
                return(
                  <div className="col-md-4 col-10 d-flex justify-content-center">
                  <Card key={index} Img={val.Img} Title={val.Title}/>
                  </div>
                )
              })
            }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
