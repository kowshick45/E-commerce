import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav id="Navbar" className='body'>
       <h1>Buyzaar</h1>
       <ul id="navbuttons">
        
           <Link to="/">home</Link>
           <Link to="/Product">product</Link>
           <Link to="/Cart">Cart</Link>
           <Link to="/Buypro">Buypro</Link>
  
        </ul>
    </nav>
  )
}

export default Navbar