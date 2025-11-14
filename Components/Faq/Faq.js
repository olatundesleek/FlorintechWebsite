import React, { useState } from "react";
import data from "./Data";

import Question from "./Question";
function Faq() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="faq-container" id="faq">
        <h3 className="faq-header">Frequently Asked Questions</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default Faq;
