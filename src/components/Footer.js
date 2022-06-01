import React from 'react';
import { FaHeart } from 'react-icons/fa';

import './Footer.css'
import logo from '../images/logo.jpg'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
  <footer className="footer-distributed" id="footer">
		<div className="footer-left">
		
      <img src={logo} alt="LA 16" width="200px"/>
    
		</div>
		<div className="footer-center">
			<h2>your partner</h2>
			
			<div className="part">
				<p>One of the functions of a community organizer is to identify the areas requiring certain social services and initiating outreach programs to address these needs. Outreach programs allow organizers to introduce themselves to the locals in a positive way.</p><br/>
				functions orgnizers
			</div>
		</div>
 
		<div className="footer-right">
			<h2>Follow us on</h2>
			<div className="footer-icons">
				<a href="https://www.facebook.com/mohd.raqif.5" target="_blank" rel="noopener noreferrer">FB</a>
				<a href="https://www.instagram.com/mohd_codes" target="_blank" rel="noopener noreferrer">INS</a>
				<a href="https://twitter.com/mohdraqif1" target="_blank" rel="noopener noreferrer">TW</a>
				<a href="https://www.youtube.com/channel/UC8OaiXv5oTYm_0wJ0R7KKyg" target="_blank" rel="noopener noreferrer">YT</a>
				<a href="https://medium.com/@mohdraqif1" target="_blank" rel="noopener noreferrer">MD</a>
			</div>
			
		</div>
		<div className='footer-end'>
		<Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
		<FaHeart className='icon'/>
      
                    </Link>
		</div>
		
	</footer>
  );
}

export default Footer;
