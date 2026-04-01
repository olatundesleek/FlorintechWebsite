"use client";

import React, { useState } from "react";
import data from "./Data";
import Question from "./Question";
import { HelpCircle } from "lucide-react";

function Faq() {
  const [activeId, setActiveId] = useState(data[0]?.id || null);
  const items = data.slice(0, 5);

  const toggleQuestion = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="faq-section" id="faq">
      <div className="faq-grid">
        <div className="faq-left">
          <div className="faq-title-wrap">
            <span className="faq-blob faq-blob-left" aria-hidden="true" />
            <h2 className="faq-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-accordion">
            {items.map((question) => (
              <Question
                key={question.id}
                title={question.title}
                info={question.info}
                isOpen={activeId === question.id}
                onToggle={() => toggleQuestion(question.id)}
              />
            ))}
          </div>
        </div>

        <aside className="faq-right faq-media-right">
          <div className="faq-icon-wrap">
            <HelpCircle size={130} className="faq-big-icon" />
          </div>
        </aside>

        <span className="faq-blob faq-blob-right" aria-hidden="true" />
      </div>
    </main>
  );
}

export default Faq;
