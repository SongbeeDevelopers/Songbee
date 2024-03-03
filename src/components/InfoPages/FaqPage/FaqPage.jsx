import React from 'react';
import { motion } from 'framer-motion';
import OneFaq from './OneFaq';

const faqs = [
  {
    question: "Song Cost & Length",
    answer: `
    Our custom songs are $180 for a standard 7 day delivery. 
    Expedited delivery is available for an additional fee. Each song is custom 
    written by one of our professional musicians. Songs are between 2.5-3.5 minutes.

    Artist Gratuity: Our artists are working musicians and rely on tips to further their 
    careers and lives, so we strongly encourage you to tip your artist. All tips are 100% 
    for the artist minus processing fees. You can tip your artist via the online portal.`,
  },
  {
    question: "How long does song delivery take?",
    answer: `We have a 7 day standard delivery as well as expedited delivery options (4 or 5 day)
     for an additional fee.`,
  },
  {
    question: "How are the songs delivered?",
    answer: `Songs are delivered via email.`,
  },
  {
    question: "What if I am not happy with my song?",
    answer: `
    With the Songbee Quality Guarantee, you can be rest assured that if your 1st draft 
    was not what you were looking for, you can provide edits to make your song perfect for you.
    Send us an email hello@songbee.com: title your email with "order number, lyric revisions", 
    requested lyric edits, write notes to your artist, and improve your song your way at no additional cost.
    All song deliveries will be locked in and unable to change after 7 days of 
    your 1st draft song delivery (regardless of additional requests or fees).
    NOTE: All requested edits must be submitted within 48 hours of song delivery or
    additional fees will be applied and delivery time will vary due to artist availability.`,
  },
];

function FaqPage({ routeVariants }) {
  return (
    <motion.div
      className="container, faq"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <p className="faq-below-title">
        If you have additional questions, please reach out at{" "} <span className="suii">hello@songbee.com!</span>
      </p>

      <section className="collapse-area">
        <div className="container">
          <div className="row">
            <div className="collapse-tab col-xs-12">
              <div className="panel-group" id="accordion">
                {faqs.map((faq) => (
                  <OneFaq
                    key={faqs.indexOf(faq)}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
}

export default FaqPage;
