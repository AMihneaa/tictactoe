/* eslint-disable react/function-component-definition */
/* eslint-disable no-console */
import React from 'react';
import Square from './Square';

const Board = ({ board, handlerSquareClick, winningSquare }) => {
  const renderSquare = position => {
    const isWinningSquare = winningSquare.includes(position);

    return (
      <Square
        value={board[position]}
        onClick={() => handlerSquareClick(position)}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  console.log(board);

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
