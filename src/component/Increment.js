import React,{useState} from "react";


const Increment=()=>{

    // const [Item, setItem] = useState(0)

    // const inc=()=>{
    //     setItem(Item + 1)
    // }
    // const dec=()=>{
    //     if(Item >0){
    //         setItem(Item -1)
    //     }
    //     else{
    //     alert("please this is 0 not decrement")
    //     }
    // }

    // return(
    //     <>
    //       <div className="main">
    //         <div className="center">
    //             <h1>{Item}</h1>
    //             <div className="btns">
    //                 <button className="increment" onClick={inc}>incerement</button>
    //                 <button className="decrement" onClick={dec}>decrement</button>
    //             </div>
    //         </div>
    //       </div>
    //     </>
    // )


    //practical 2..
    // const click=()=>{
    //     alert("helloo world")
    // }
    // return(
      
    //     <>
    //     <button onClick={click}>click me show alert</button>
    //     </>
    // )

    //practical 3..
    const[name,setName]=useState("");
         const[fullname,setFullname]=useState();
         const inputEvent=(e)=>{
           
            
             setName(e.target.value)
         }
         const onSubmit=(e)=>{
             e.preventDefault()
             console.log("gffg");
             setFullname(name)
             setName("")
         }
         return(
             <> 
              <form >
             <div>
               
                 <h1>Hello {fullname}</h1>
                 <input type="text"  placeholder="Enter your name" onChange={inputEvent} value={name}/>
                 <button onClick={onSubmit} >click</button>
                
             </div>
             </form>
            
             </>
         )

    
    

}

export default Increment;