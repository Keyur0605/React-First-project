
import React from 'react'

const Demo1 = () => {
    let time=new Date().getHours()
    console.log(time);
    let heading="";
    let props={};
    if(time===1 && time<12){
        heading="morning"
       props.color="black"
    }
    else if(time>=12 && time<19){
        heading="afternoon"
        props.color="orange"
    }
    else{
        heading="night"
        props.color="red"
    }
  return (
    <div className='container'>
      <h1>Hello World  <span style={props}> {heading}</span></h1>
    </div>
  )
}

export default Demo1
