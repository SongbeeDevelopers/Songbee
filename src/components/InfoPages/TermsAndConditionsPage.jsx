import React from 'react';

import { motion } from 'framer-motion';

import terms from '../../../public/data/terms'

import './InfoPages.css'

function TermsAndConditions({ routeVariants }) {
  return (
    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <div className='info'>

        <h1 className='info-title'>Terms and Conditions</h1>

        {terms.map((item) => (
          <div key={terms.indexOf(item)}>
            <h2 className='info-section-header'>{item.title}</h2>
            <p>{item.details}</p>
          </div>
        ))}

        <h2 className='info-section-header'>Contact Us</h2>
        <p>Songbee welcomes your questions or comments regarding the Terms:</p>
        <p className='info-contact'>
          Songbee, LLC <br/>
          Virginia <br/>
          <a href="mailto:hello@songbee.com" className="mail-guarantee">hello@songbee.com</a> <br/><br/>
          Effective as of Aug 01 2021
        </p>

      </div>
    </motion.div>
  );
}

export default TermsAndConditions;
