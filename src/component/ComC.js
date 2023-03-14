import React from 'react'
import { FirstName,LastName} from '../App'
const ComC = () => {
  return (
    <div>
      <FirstName.Consumer>
        {(pre)=>{
            return(
                <LastName.Consumer>
                    {(pres)=>{
                        return(
                            <h1>Hello {pre} {pres}</h1>
                        )
                    }}
                </LastName.Consumer>
            )
        }}
      </FirstName.Consumer>
    </div>
  )
}

export default ComC
