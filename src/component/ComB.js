import React,{useContext} from 'react'
import { FirstName,LastName} from '../App'

const ComB = () => {

  const name = useContext(FirstName)
  const names = useContext(LastName)
  return (
    <div>
      <h1>My Name is {name} {names}</h1>
    </div>
  )
}

export default ComB
