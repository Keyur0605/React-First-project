import React,{useState} from 'react'
import SearchData from './SearchData'
const Search = () => {
    const[img,setImg]=useState("")
    const[empty,setEmpty]=useState(false)
    const input=(e)=>{
        const data=e.target.value;
        console.log(data);
        setImg(data)
        if(e.target.value===""){
            setEmpty(false)
        }
        else{
            setEmpty(true)
        }
    }
  return (
    <div>
  
      <input type="search" placeholder='Enter You Search' onChange={input} value={img}/>
     {empty===true && <SearchData name={img}/>}
    </div>
  )
}

export default Search
