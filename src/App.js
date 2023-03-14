
// import './App.css';
import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './component/Bootstrap/Style.css'
//  import Home from "./component/Home"
//  import About from "./component/About"
//  import Contact from "./component/Contact"
//  import Error from "./component/Error"
//  import Accodian from "./component/Accodian";
 
 import {BrowserRouter ,Routes,Route,} from 'react-router-dom'
//  import Header from "./component/Header"
//  import Search from "./component/Search"
import Header from "./component/Bootstrap/Header";
import Home from "./component/Bootstrap/Home";
import Contact from "./component/Bootstrap/Contact";
import Services from "./component/Bootstrap/Services";
import About from "./component/Bootstrap/About";
import Error from "./component/Bootstrap/Error";
// const FirstName=createContext()
// const LastName=createContext()
function App() {

  return (
    <>
    <div >
   
    {/* <Accodian/> */}
    {/* <BrowserRouter>
    <Header/>
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/contact/:name/:surname" element={<Contact/>} /> */}
      {/* <Route path="/contact" element={<Contact/>}/> */}
      {/* <Route path="/search" element={<Search/>} />
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter> */}
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/services" element={<Services/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
   
    </div>
    </>
  );
}

export default App;

