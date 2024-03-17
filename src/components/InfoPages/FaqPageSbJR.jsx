import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
// import OneFaq from './OneFaq';


const faqs = [
  {
    question: "Subscription Cost & Length",
    answer: `
    Subscription Information: Our learning songs come with a guide on how to get the most out of the songs. How to teach your child
    with them, what tools to utilize, etc. Custom learning song purchased by parents/individuals is a 3 
    month minimum subscription for $225.00 This will give enough time to properly go through a set of learning
    milestones. A. 2songs/month -> 1 song every 2 weeks is $80 ($900 value) B. 4songs/month -> 1 song/week is $129
    
    Songs are between 2.5-3.5 minutes in length.
    
    Artist Gratuity: Our artists are working musicians and rely on tips to further their 
    careers and lives, so we strongly encourage you to tip your artist. All tips are 100% 
    for the artist minus processing fees. You can tip your artist via the online portal.`,
   
  },
  {
  question: "Schools/Daycares",
  answer: `
  If a school program is interested and would like to inquire about implementing Songbee JR in 
  their schools, we ask them to email us at hello@songbee.com for custom program/school pricing.
   Offerings: Non-Exclusive Contract:
   A. Set of Songs from the Songbee Catalogue chosen to use in the school.
   B. Upfront fee, then a subscription fee every term.
   Exclusive Contract: 
   A. Set of custom songs written specifically for the school.
   B. Higher up front fee, but no subscription fee.`,

  },
  {
    question: "What are the benefits",
    answer: `
    Cognitive Benefits: Music stimulates Emotional Benefits: Music is a beneficial tool to aid children from babies to teenagers in a developmental standpoint. 
    The usage of music  “provides and provokes many different responses in the human brain” and leads to “marked changes in emotions and movement” according to Trimble and Hesdorffer, 
    from the National LIbrary of Medicine, 2017. 
    Emotional management is an important aspect to proper development. 
    When children are able to control their impulses, they will be better equipped to handle many situations in life. 
    Listening to music stimulates our emotions and encourages self expression and focus as well as with self awareness and regulation. 
    Young children are able to identify emotions, reactions and the ways in which those emotions control reactions. 
    It aids children to adapt and learn the appropriate behaviors in different situations.  
    `

  },
  {
    question: "When to use",
    answer: `
    Leson plans, Counseling A. Emotional intelligence B. Identifying emotions C. Work through bullying issues D. Coping Mechanisims. Sports (theme songs), school Theme Songs,
    Extra Curricular activites - songs to enhance and aid in them, Team Building, Artistic Expression, Structure and learning, Motor skills, Cognitive, Social skills and Brain development.

    `

  },
  
  {
    question: "How long does song delivery take?",
    answer: `At the time of subscription, it takes the first song 6 days to deliver,
    then after that it is every 7 days (depending on your subscription/amount of songs)`,
  },
  {
    question: "How are the songs delivered?",
    answer: `Songs are delivered via online customer portal.`,
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


// rendering of a single FAQ
function OneFaq({ question, answer }) {

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
