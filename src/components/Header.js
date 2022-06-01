import React, { useState } from 'react';
// import { Button } from './Button';
 import { Link } from 'react-router-dom';
// import { HashLink as Link } from "react-router-hash-link";
import './Header.css';
// import logo from '../images/logo.jpg';



function Navbar() {
  const [click, setClick] = useState(false);
  
const [navbar,setNavbar]=useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

 

  

  

  const changeBackground=()=>{
    if(window.scrollY>=300){
setNavbar(true)
    }else{
      setNavbar(false);
    }
  }
window.addEventListener('scroll',changeBackground);

  return (
    <>
      <nav name='top' className= {navbar?'navbar active':'navbar' }>
        <div className='navbar-container'>
          <Link to='/main' className='navbar-logo' onClick={closeMobileMenu}>
            {/* <img src={logo} alt="error" width="80px"/> */}
            <h1>your partaner</h1>
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/birthday'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                birthday
              </Link>
            </li>
            <li className='nav-item text-capitalize'>
              <Link
                to='/reception'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                reception
              </Link>
            </li>
            <li className='nav-item text-capitalize'>
              <Link
                to='/anniversary'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                anniversary
              </Link>
            </li>

            
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;