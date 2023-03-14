import React from 'react'

const Card = (props) => {
   
  return (
    <div>
      
      {/* <div className="col-md-4 col-10 d-flex justify-content-center"> */}
                <div class="card" style={{ width: "18rem" }}>
                  <img src={props.Img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{props.Title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                  </div>
                </div>
              </div>
    // </div>
  )
}

export default Card
