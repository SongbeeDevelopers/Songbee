import React from 'react';
import './Footer.css';


function Footer() {

  return (
    <footer>
      <img className='footerIcon' src='header-icon.png'></img>
      
      <div className='flexContainer'>

        <div className='flexColumn'>
          <p className='columnHeader'>Company</p>
          <a href='/#/privacy'>Privacy Policy</a>
          <a href='/#/terms'>Terms and Conditions</a>
          <a href="mailto:hello@songbee.com">Contact: hello@songbee.com</a>
        </div>
        <div className='flexColumn'>
          <p className='columnHeader'>Songs</p>
          <a href='/#/order'>Start Your Song</a>
          <a href='/#/guarantee'>Songbee Guarantee</a>
          <a href='/#/artists'>Artists</a>
        </div>

        <div className='flexColumn'>
          <p className='columnHeader'>For Artists</p>
          <a href='/#/artistcommunity'>Artist Community</a>
          <a href='/#/artistapplication'>Artist Application</a>
          <a href='/#/artistaccount'>Artist Account</a>
        </div>
        
      </div>

      <p>&copy; Songbee</p>

    </footer>
  )
}

export default Footer;
