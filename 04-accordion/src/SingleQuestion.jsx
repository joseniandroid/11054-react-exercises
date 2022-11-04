import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn">
          <AiOutlinePlus />
        </button>
      </header>
    </article>
  );
};

export default SingleQuestion;
