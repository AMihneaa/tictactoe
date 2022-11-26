/* eslint-disable react/function-component-definition */
/* eslint-disable react/self-closing-comp */
import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              style={{
                fontWeight: move === currentMove ? 'bold' : 'normal',
              }}
              type="button"
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? `Go to Start` : `Go to move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
