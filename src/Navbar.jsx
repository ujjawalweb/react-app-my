import React from 'react';
import logo from './logo.png'; 
import {  Link } from "react-router-dom";

function Navbar(){

return (

<nav className="navbar navbar-expand-lg navbar-light bg-black">
  <div className="container-fluid cont">
     
    <Link className="navbar-brand" href="/"><img src={logo} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutus">About us</Link>
        </li>
    
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact us</Link>
        </li>

      </ul>
    </div>
  </div>
  
</nav>


);





}


export default Navbar;