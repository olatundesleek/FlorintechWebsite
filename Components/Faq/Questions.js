import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <FiChevronUp fontSize={30} />
          ) : (
            <FiChevronDown fontSize={30} />
          )}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
