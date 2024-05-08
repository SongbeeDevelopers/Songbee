import React from 'react';
import './Footer.css';


function Footer() {

  return (
    <footer>
      <img className='footerIcon' src='https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070470/Songbee/header-icon_gzi9s3.png'></img>

      <div className='flexContainer'>

        <div className='flexColumn'>
          <p className='columnHeader'>Company</p>
            <a href="mailto:hello@songbee.com">hello@songbee.com</a>
            <a href="https://www.instagram.com/songbee_official/">Songbee Instagram</a>
            <a href="https://www.tiktok.com/@songbee_official">Songbee Tiktok</a>
        </div>
        <div className='flexColumn'>
          <p className='columnHeader'>Songs</p>
          <a href='/#/order'>Start Your Song</a>
          <a href='/#/guarantee'>Songbee Guarantee</a>
          <a href='/#/privacy'>Privacy Policy</a>
          <a href='/#/terms'>Terms and Conditions</a>
        </div>

        <div className='flexColumn'>
          <p className='columnHeader'>For Artists</p>
          <a href='/#/artists'>Artist Community</a>
          <a href='/#/join-artist'>Artist Application</a>
          <a href='/#/artist'>Artist Account</a>
        </div>

      </div>

      <p>&copy; Songbee</p>

    </footer>
  )
}

export default Footer;
