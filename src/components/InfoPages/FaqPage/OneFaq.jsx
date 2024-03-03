import React from "react";
import { useState } from "react";

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

export default OneFaq
