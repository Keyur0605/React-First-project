import React from 'react'

const SearchData = (props) => {
    const image=`https://source.unsplash.com/user/erondu/600x700/?${props.name}`
  return (
    <div>
      <img src={image}/>
    </div>
  )
}

export default SearchData
