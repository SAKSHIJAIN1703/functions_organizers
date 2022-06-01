import React from 'react';
import './Anniversary.css';
import {HashLink as Link} from 'react-router-hash-link'

const Anniversary = () => {
  return (
    <div className="anniversary" id="anniversary">

      <div className="anniversary-info">
        <div className='info'>
        <Link to='/login' className='anniversary-logo'>
        <div className="anniversary-content">
          <h1>Anniversary</h1>
          <h4>Serving since 2010, we are as proud as thankful for all the support. Our team at LA 16 is committed to serving you the best you ever had. </h4>
          <h4>Your taste is our priority. A well-expertised team at our hand we serve the best food of the county and will continue to do so.</h4>
          <h4>A 3-time Award-winning place is waiting for you. We love giving a reason for happiness to our people. Come again soon.</h4>
        </div></Link>
        </div>
      </div>
    </div>
      
    
  );
}

export default Anniversary;
