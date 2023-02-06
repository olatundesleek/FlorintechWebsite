import React, { useState } from "react";
import data from "./Data";

import Question from "./Question";
function Faq() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Frequently Asked Questions About Florintech Computer College</h3>
        <section className="info">
          {questions.map((question) => {
           return <Question key={question.id} {...question}  />;
          })}
        </section>
      </div>
    </main>
  );
}

export default Faq;
