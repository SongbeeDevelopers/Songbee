import React, { useState } from "react";
import "./JrFaq.css";
function JrFaq() {
  const questions = [
    {
      id: 0,
      question: "What is SongBee?",
      answer:
        "Song PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong Page.",
    },
    {
      id: 1,
      question: "What is SongBee?",
      answer:
        "Song PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong Page.",
    },
    {
      id: 2,
      question: "What is SongBee?",
      answer:
        "Song PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong Page.",
    },
    {
      id: 0,
      question: "What is SongBee?",
      answer:
        "Song PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong Page.",
    },
    {
      id: 3,
      question: "What is SongBee?",
      answer:
        "Song PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong Page.",
    },
    {
      id: 4,
      question: "What is SongBee?",
      answer:
        "Song PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong Page.",
    },
    {
      id: 5,
      question: "What is SongBee?",
      answer:
        "Song PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong Page.",
    },
    {
        id: 5,
        question: "What is SongBee?",
        answer:
          "Song PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong PageSong Page.",
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

function Question({ question }) {
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
