import React from "react";

function Progress({ index, NumQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={NumQuestions} value={index + (answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{NumQuestions}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
