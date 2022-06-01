import React from 'react';
import banner from '../images/img1.jpg';
import { HashLink as Link } from "react-router-hash-link";
import './Birthday.css';
const Birthday = () => {
  return (
    <div className="birthday" id="birthday">
            <div className="birthday-info">
        <div className="birthday-content">
       <h1>birthday decoration</h1>
         
   
          </div>
          <div className='birthday_img_box'>
            
          <Link to='/Blog' className='bday'> <img src={banner} alt="error" className='birthday_img'></img></Link>
         
          </div>
          <div className="birthday-content">
                      <h4>Serving since 2010, we are as proud as thankful for all the support. Our team at LA 16 is committed to serving you the best you ever had. </h4>
          <h4>Your taste is our priority. A well-expertised team at our hand we serve the best food of the county and will continue to do so.</h4>
          <h4>A 3-time Award-winning place is waiting for you. We love giving a reason for happiness to our people. Come again soon.</h4>
            </div>
          </div>
          </div>
          
  );
}

export default Birthday;
