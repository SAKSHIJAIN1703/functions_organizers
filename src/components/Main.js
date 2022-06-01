import React from "react";
import './Main.css';
import { HashLink as Link } from "react-router-hash-link";
import sample from './logo.mp4';
 function Main() {
  return (
    <div className="container">
         <Link to='/' className='navbar-logo' >
    <div className="main">
   
    <video className='videoTag' autoPlay loop muted>
   
    <source src={sample} type='video/mp4' />
    
</video>


    </div>
   
    </Link>
    {/* <div className='background'></div> */}
    </div>
  );
}
export default Main;