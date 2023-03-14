import React,{useState} from 'react'
import {Question} from './api'
import Acco from './Acco'

const Accodian = () => {
    const [data, setData] = useState(Question)
  return (
    <div>
      {
        data.map((val)=>{
            const{id}=val;
            return <Acco key={id}  {...val}/>
        })
      }
    </div>
  )
}

export default Accodian
