import React from 'react'

const SlotData = (props) => {
 let {x,y,z}=props

 if(x===y && y===z){
return(
    <>
    <span>{x}{y}{z}</span>
    <h1>this is maching</h1>
    </>
)
 }
 else{
    return(
        <>
        <span>{x}{y}{z}</span>
        <h1>this is not maching</h1>
        </>
    )
 }
}

export default SlotData
