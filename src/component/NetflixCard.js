import React from 'react'

const NetflixCard = (props) => {
  return (
   
      <div className="card" >
        <img src={props.imgsrc} alt=""  className='img'/>
        <p>{props.title}</p>
        <p>{props.sname}</p>
        <a href={props.link}><button>Watch</button></a>
      </div>
   
  )
}

export default NetflixCard
