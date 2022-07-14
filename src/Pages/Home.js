import React from "react";
import '../App'
import '../App.css'
import NavBar from '../Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function Home() {
  return(
    <div className="hero">
      <div className="opacity"></div>
      <NavBar/>
      <div className="content">
          <h1>Karibu Huku</h1>
          <p>Because React-Bootstrap doesn't depend on a very precise version of bootstrap</p>
          <Button className="btn btn-success">Sign Up</Button>
      </div>
    


    </div>
  )
}

export default Home





