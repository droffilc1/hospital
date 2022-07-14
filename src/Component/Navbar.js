import React from "react";
import logo from "../logo.svg"
import '../App.css'
import { Link } from "react-router-dom";

function NavBar() {
  return(

        <div className= "navBar">
            <img src={ logo } className= "logo" alt=""/>

          <ul>
            <li className= "listItems"><Link to="/home">Home</Link></li>
            <li className= "listItems"><Link to="/about">About Us</Link></li>
            <li className= "listItems">0ur Services</li>
            <li className= "listItems">Gallery</li>
            <li className= "listItems"><Link to="/about">Contact Us</Link></li>
          </ul>

        </div>
  )
}

export default NavBar