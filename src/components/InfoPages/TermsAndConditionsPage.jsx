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
            <h2>{item.title}</h2>
            <p>{item.details}</p>
          </div>
        ))}

        <h2 className='termsSubHeader'>Contact Us </h2>

        <p className='termsText'>
          Songbee welcomes your questions or comments regarding the Terms: <br />
          Songbee, LLC <br />
          Virginia <br />
          Email Address: hello@songbee.com<br /><br />
          Effective as of Aug 01, 2023
        </p>
      </div>

    </motion.div>
  );
}

export default TermsAndConditions;
