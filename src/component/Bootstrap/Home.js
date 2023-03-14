import React from 'react'
import Comman from './Comman'
import Web from '../Bootstrap/image.svg'
const Home = () => {
  return (
    <div>
      <Comman 
       name="Hello friends I am Keyur Studying UTU"
       dec="We are The Team Of Talented Web devloper Making Website"
       btns="services"
       visit="/services"
       Img={Web}
       />
    </div>
  )
}

export default Home
