import React from "react";

function NextButton({ dispatch, answer, NumQuestions, index }) {
  if (answer === null) return;
  if (index === NumQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
  if (index < NumQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }
}

export default NextButton;
