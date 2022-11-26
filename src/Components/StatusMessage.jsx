/* eslint-disable react/self-closing-comp */
/* eslint-disable react/function-component-definition */
import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(element => {
    return element !== null;
  });

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXNext ? 'x' : '0'}`}
      {!winner && noMovesLeft && `X n O Tied`}
    </h2>
  );
};

export default StatusMessage;
