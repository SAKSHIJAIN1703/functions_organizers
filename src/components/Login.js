import './Login.css';
import React from 'react';
import profile from "../images/logo.jpg";
import { Link } from 'react-router-dom';

// import email from "../image/email.jpg";
// import pass from "../image/pass.png";
function Login() {
  return (
    <div className="login">
     <div className="sub-login">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
         
           <div>
             {/* <img src={email} alt="email" className="email"/> */}
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             {/* <img src={pass} alt="pass" className="email"/> */}
             <input type="password" placeholder="user name" className="name"/>
           </div>
          <div className="login-button">
         <Link to='/'> <button>Login</button></Link>
          </div>
           
            {/* <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p> */}
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Login;