import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import "./InfoPages.css";
import faqsArtist from '../../../public/data/faqsArtist';


// rendering of a single FAQ
function ArtistFaq({ question, answer }) {

  const [open, setOpen] = useState(false);

  return (
    <div id="panel1" className="panel panel-default">

      <div className="panel-heading" onClick={() => setOpen(!open)}>
        <h4 className="panel-title">
          <p className="question">
            {question}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down icon"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </p>
        </h4>
      </div>

      <div
        id="collapseOne"
        className={`panel-collapse collapse in ${open ? "openFaq" : "closeFaq"}`}
      >
        <div className="panel-body">
          {answer}
        </div>
      </div>

    </div>
  );
}


// rendering of entire FAQ page
function FaqArtistPage({ routeVariants }) {
  return (
    <div className="container, faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <p className="faq-below-title-artist">
        If you have additional questions, please reach out at{" "} <span className="suii">hello@songbee.com!</span>
      </p>

      <section className="collapse-area">
        <div className="container">
          <div className="row">
            <div className="collapse-tab col-xs-12">
              <div className="panel-group" id="accordion">
                { faqsArtist.map((faq) => (
                  <ArtistFaq
                    key={faqsArtist.indexOf(faq)}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default FaqArtistPage;
