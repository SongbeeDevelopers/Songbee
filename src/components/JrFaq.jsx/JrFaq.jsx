import React, { useState } from "react";
import "./JrFaq.css";
function JrFaq() {
  const questions = [
    {
      id: 0,
      question: "What are the BEE programs?",
      answer:`
      Our BEE programs are designed to enhance and supplement learning with 
      music-guided play and maximize development, create a well rounded 
      learning environment, and create the next generation of innovative adults.
      `
    },
    {
      id: 1,
      question: "How much are the BEE programs?",
      answer:`
      Each program is customized and designed for your needs. Contact us to request 
      a quote and consult an expert to help design your program. 
      `
    },
    {
      id: 2,
      question: "How are they delivered?",
      answer: `
      They are delivered via your customer portal. Delivery time will vary depending 
      on the package you designed with your expert. Your Songbee expert will let you 
      know the delivery schedule for your custom BEE program.
      `
    },
    {
      id: 3,
      question: "How do I contact Songbee for support? ",
      answer: `
      You can message us on your customer/school portal anytime or send us an email for 
      support at hello@songbee.com. We will respond to your support request as soon as possible. 
      We are committed to creating healthy brains and happy children one song at a time!
      `
    },
  ];
  return (
    <div className="jr-faq">
      <h2>
        Frequently <span className="highlight"> Asked</span> Questions
      </h2>
      <div className="faq-questions">
        {questions.map((item) => (
          <Question question={item} />
        ))}
      </div>
    </div>
  );
}

export default JrFaq;

export function Question({ question }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div style={{height:showAnswer?"200px":"50px"}} className="faq-question" onClick={() => setShowAnswer(!showAnswer)}>
      <p className="faq-question-title">{question.question}</p>
      <p
        className="faq-question-answer"
        style={{ opacity: showAnswer ? "1" : "0" }}
      >
        {question.answer}
      </p>
    </div>
  );
}
