import React from "react";

import './JrFooter.css'

function JrFooter() {

  return (
    <footer className="jr-footer">
      <img className='footerIcon' src='https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070470/Songbee/header-icon_gzi9s3.png'></img>

      <div className='jrFlexContainer'>

        <div className='jrFlexColumn'>
          <p className='jrColumnHeader'>About Us</p>
          <a href="/#/">Songbee Main</a>
          <a href="mailto:hello@songbee.com">hello@songbee.com</a>
          <a href="https://www.instagram.com/songbee_official/">Songbee Instagram</a>
          <a href="https://www.tiktok.com/@songbee_official">Songbee Tiktok</a>
        </div>

        <div className='jrFlexColumn'>
          <p className="jrColumnHeader">Junior</p>
          <a href='/#/learning-packs'>Learning Packs</a>
          <a href='/#/schools'>Schools & Groups</a>
          <a href='/#/why-songbee'>Why Songbee?</a>
          <a href='/#/benefits'>Benefits</a>
          <a href='/#/whats-included'>What's Included</a>
        </div>

        <div className='jrFlexColumn'>
          <p className='jrColumnHeader'>Terms</p>
          <a href='/#/privacy'>Privacy Policy</a>
          <a href='/#/terms'>Terms and Conditions</a>
          <a href='/#/EUA'>End User Agreement</a>
          <a href='/#/jr-faq'>FAQ</a>
        </div>

      </div>

      <p>&copy; Songbee</p>

    </footer>
  )
}

export default JrFooter
