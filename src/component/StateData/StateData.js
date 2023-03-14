import React,{useEffect,useState} from 'react'
import './StateData.css'
const StateData = () => {

    const[state,setState]=useState([])
    const getStateData=async()=>{
        const res = await fetch("https://data.covid19india.org/data.json");
        const data=await res.json()
        console.log(data.statewise);
        setState(data.statewise)
    }
    useEffect(() => {
      getStateData()
    }, [])
  return (
    <div>
      <h1 className='text-center mt-5'>India Covid Data State Wise</h1>
      <div className="container mt-5">
        <div className="row justify-content-center">
            <table>
                <thead className='text-center bg-dark text-white '  >
                    <tr>
                        <th className='p-3'>Active</th>
                        <th className='p-3'>Confirmed</th>
                        <th className='p-3'>Deths</th>
                        <th className='p-3'>Deltaconfirmed</th>
                        <th className='p-3'>Deltadeaths</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((val,index)=>{
                            return(
                                <tr>
                                    <td>{val.active}</td>
                                    <td>{val.confirmed}</td>
                                    <td>{val.deaths}</td>
                                    <td>{val.deltaconfirmed}</td>
                                    <td>{val.deltadeaths}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default StateData
