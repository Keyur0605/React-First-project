import React, { useState,useEffect } from 'react'
import axios from 'axios'
const Axios = () => {
 const[num,setNum]=useState()
 const[names,setNames]=useState()
 const[datas,setData]=useState()
 const input=(e)=>{
  setNum(e.target.value)
 }
 useEffect(() => {
   const getData= async ()=>{
    const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    
    setNames(res.data.name)
    setData(res.data.moves.length)
   }

getData()
 })
  return (
    <>
    <h2>you choose {num} value</h2>
    <p>name is {names}</p>
    <p>moves is {datas}</p>
        <select value={num} onChange={input}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </>
  )
}

export default Axios
