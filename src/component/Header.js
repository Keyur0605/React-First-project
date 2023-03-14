import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <NavLink to="/">Home  </NavLink>
      <NavLink to="/about" className="ms-3">About</NavLink>
      <NavLink to="/contact/keyur/lambhiya" className="ms-3">contact</NavLink>
       <NavLink to="/search" className="ms-3">Search</NavLink>
    </div>
  )
}

export default Header
