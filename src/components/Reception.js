import React from 'react';
import {HashLink as Link} from 'react-router-hash-link'

import './Reception.css'
const Reception = () => {
  return (
    <div className="reception" id="reception">
    
    
     
      <div className="reception-info"><br/><br/>
        <h1>Fabulous reception </h1>
        <p>Whether entertaining a select group or hosting a large reception throughout the entire restaurant, LA 16 offers a number of options suitable for any occasion or event. A dedicated staff ensures that every detail of your event is attended to.</p>
        <h2>Book the best one here</h2>
     
      <div className="reception-select">
        <Link smooth to="/login" class="one">
          <div className="card">
            <h1>Regular reception</h1>
            
          </div>
        </Link>
        <Link smooth to="/login" class="two">
          <div className="card">
            <h1>Exclusive reception</h1>
            
          </div>
        </Link>
      </div>
    </div>
    
    </div>
  );
}

export default Reception;
