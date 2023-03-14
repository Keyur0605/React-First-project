import React from 'react'
import Comman from './Comman'
import Bicycle from "../Bootstrap/bicycle.svg"
const About = () => {
  return (
    <div>
      <Comman 
       name="Hello friends I am Harsh Studying Nirma"
       dec="We are The Team Of Talented Web devloper Making Website"
       btns="Contact-Us"
       visit="/contact"
       Img={Bicycle}
       />
    </div>
  )
}

export default About
