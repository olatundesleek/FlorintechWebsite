import React from "react";
import { Plus, X } from "lucide-react";

const Question = ({ title, info, isOpen, onToggle }) => {
  return (
    <article className={`faq-item ${isOpen ? "open" : ""}`}>
      <header className="faq-item-header">
        <h4>{title}</h4>
        <button
          className="faq-toggle-btn"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse question" : "Expand question"}
        >
          {isOpen ? <X size={20} /> : <Plus size={20} />}
        </button>
      </header>
      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
        <p>{info}</p>
      </div>
    </article>
  );
};

export default Question;
