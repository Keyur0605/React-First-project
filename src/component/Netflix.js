import React from 'react'
import Sdata from './NetflixData'
import NetflixCard from './NetflixCard'
const Netflix = () => {
  return (
    <div className='container'>
        <div className="row">
      {
        Sdata.map((val)=>{
            return (
                <div className='col-md-4' >
                <NetflixCard  imgsrc={val.imgsrc}
                title={val.title}
                key={val.id}
                sname={val.sname}
                link={val.link}/>
                </div>
            )
        })
      }
    </div>
    </div>
  )
}

export default Netflix
