import React from 'react';
import './Footer.css';


function Footer() {

  return (
    <footer>
      <img className='footerIcon' src='https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070470/Songbee/header-icon_gzi9s3.png'></img>
      
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
          <a href='/#/artists'>Songbee Artists</a>
        </div>

        <div className='flexColumn'>
          <p className='columnHeader'>For Artists</p>
          <a href='/#/artist-process'>Artist Community</a>
          <a href='/#/join-artist'>Artist Application</a>
          <a href='/#/artist'>Artist Account</a>
        </div>
        
      </div>

      <p>&copy; Songbee</p>

    </footer>
  )
}

export default Footer;
