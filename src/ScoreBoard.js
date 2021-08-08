import React from 'react';

function ScoreBoard({ score }) {
  return (
    <h2>
      😃 {score.p1} - {score.p2} 😎
    </h2>
  );
}

export default ScoreBoard;
