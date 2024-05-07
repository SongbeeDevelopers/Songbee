import React from "react";

import './JrFooter.css'

function JrFooter() {
  
  return (
    <footer>
      <img className='footerIcon' src='https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070470/Songbee/header-icon_gzi9s3.png'></img>

      <div className='jrFlexContainer'>

        <div className='jrFlexColumn'>
          <p className='jrColumnHeader'>About Songbee</p>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
        </div>
        <div className='jrFlexColumn'>
          <p className='jrColumnHeader'>Products</p>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
        </div>

        <div className='jrFlexColumn'>
          <p className='jrColumnHeader'>Support</p>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
        </div>

        <div className='jrFlexColumn'>
          <p className="jrColumnHeader">Schools & Groups</p>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
        </div>

        <div className='jrFlexColumn'>
          <p className="jrColumnHeader">Follow Us!</p>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
        </div>

      </div>

      <p>&copy; Songbee</p>

    </footer>
  )
}

export default JrFooter
