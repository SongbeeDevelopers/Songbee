import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import MainButton from "./Button";
function FaqSection() {
  const faqs = [
    {
      question: "Song Cost & Length",
      answer: `Our custom songs are $180 for a standard 7 day delivery. Expedited delivery is available for an additional fee. Each song is custom written by one of our professional musicians. Songs are between 2.5-3.5 minutes.

  Artist Gratuity: Our artists are working musicians and rely on tips to further their careers and lives, so we strongly encourage you to tip your artist. All tips are 100% for the artist minus processing fees. You can tip your artist via the online portal.`,
    }, {question: "How long does song delivery take?", answer:`We have a 7 day standard delivery as well as expedited delivery options (4 or 5 day) for an additional fee.`}, {question:"How are the songs delivered?", answer:`Songs are delivered via email.`}, {question: "What if I am not happy with my song?", answer:`
With the Songbee Quality Guarantee, you can be rest assured that if your 1st draft was not what you were looking for, you can provide edits to make your song perfect for you.

Send us an email hello@songbee.com: title your email with "order number, lyric revisions", requested lyric edits, write notes to your artist, and improve your song your way at no additional cost.

All song deliveries will be locked in and unable to change after 7 days of your 1st draft song delivery (regardless of additional requests or fees).
‍
NOTE: All requested edits must be submitted within 48 hours of song delivery or additional fees will be applied and delivery time will vary due to artist availability.`}
  ];
  return (
    <div className="faq" id="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-below-title">
        If you have additional questions, please reach out at <span className="suii">hello@songbee.com!</span> 
      </p>
      <section class="collapse-area">
        <div class="container">
          <div class="row">
            <div class="collapse-tab col-xs-12">
              <div class="panel-group" id="accordion">
                {faqs.map((faq) => (
                  <OneFaq question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FaqSection;

function OneFaq({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div class="panel panel-default" id="panel1">
      <div onClick={() => setOpen(!open)} class="panel-heading">
        <h4 class="panel-title">
          <p class="question">
            {question}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down icon"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </p>
        </h4>
      </div>
      <div
        id="collapseOne"
        class={`panel-collapse collapse in ${open ? "openFaq" : "closeFaq"}`}
      >
        <div class="panel-body">{answer}</div>
      </div>
    </div>
  );
}
