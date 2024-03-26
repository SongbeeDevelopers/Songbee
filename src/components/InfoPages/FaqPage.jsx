import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import faqsMain from '../../../public/data/faqs';


// rendering of a single FAQ
// function OneFaq({ question, answer }) {

//   const [open, setOpen] = useState(false);

//   return (
//     <div id="panel1" className="panel panel-default">

//       <div className="panel-heading" onClick={() => setOpen(!open)}>
//         <h4 className="panel-title">
//           <p className="question">
//             {question}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-chevron-down icon"
//             >
//               <path d="m6 9 6 6 6-6" />
//             </svg>
//           </p>
//         </h4>
//       </div>

//       <div
//         id="collapseOne"
//         className={`panel-collapse collapse in ${open ? "openFaq" : "closeFaq"}`}
//       >
//         <div className="panel-body">
//           {answer}
//         </div>
//       </div>

//     </div>
//   );
// }


// rendering of entire FAQ page
function FaqPage({ routeVariants }) {
  return (
    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <p className="faq-below-title">
        If you have additional questions, please reach out at{" "} <span className="suii">hello@songbee.com!</span>
      </p>

      {faqsMain.map((faq) => (
        <div key={faqsMain.indexOf(faq)}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}

      {/* <section className="collapse-area">
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
      </section> */}

    </motion.div>
  );
}

export default FaqPage;
