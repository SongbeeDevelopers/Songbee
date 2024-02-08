import React from "react";

import { motion } from 'framer-motion';


function QualityGuarantee({ routeVariants }) {

  return (
    <motion.div
      className="guaranteePage"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <h1 className="headerP">Quality Guarantee</h1>

      <h2>The Songbee Guarantee</h2>
      
      <p>
        At Songbee we stand behind our Custom Songs! We understand that your
        song purchase is more than just a song, it is the embodiment of your
        message. Our top priority is making sure your experience is the very
        best.
      </p>
      <p>
        Every song purchased with Songbee includes a lyrical revision at no
        additional cost. All lyric revisions are to be submitted within 48 hours
        of song delivery time. Request any/all revisions via email at {" "}
        <a className="mail-guarantee" href="mailto:hello@songbee.com">
          hello@songbee.com
        </a>
        : title your email with "order number, lyric revisions" , requested
        lyric edits, write notes to your artist, and improve your song your way
        at no additional cost.
      </p>

      <p>
        All song edits will be submitted within 7 days of 1st draft and locked
        in and unable to change (regardless of additional requests or fees).
      </p>

      <p>
        NOTE: All requested edits must be submitted within 48 hours of song
        delivery.
      </p>

      <p>
        If you have any questions about the Songbee guarantee, or anything else
        we would love to help out!
      </p>
      <p>
        Please contact our team at{" "}
        <a className="mail-guarantee" href="mailto:hello@songbee.com">hello@songbee.com</a> !
      </p>
    </motion.div>

  );
}

export default QualityGuarantee;
