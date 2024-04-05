import React from "react";

import './JrFooter.css'

function JrFooter() {
  
  return (
    <footer>
      <img className='footerIcon' src='header-icon.png'></img>

      <div className='flexContainer'>

        <div className='flexColumn'>
          <p className='columnHeader'>About Songbee</p>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
        </div>
        <div className='flexColumn'>
          <p className='columnHeader'>Products</p>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
        </div>

        <div className='flexColumn'>
          <p className='columnHeader'>Support</p>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
        </div>

        <div className='flexColumn'>
          <p className="columnHeader">Schools & Groups</p>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
          <a href='/#/'>Products</a>
        </div>

        <div className='flexColumn'>
          <p className="columnHeader">Follow Us!</p>
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
