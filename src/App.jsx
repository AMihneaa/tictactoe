import React, { useState } from 'react';
import Board from './Components/Board';
import History from './Components/History';
import { calculateWinner } from './helpers';

import './style/root.scss';

// eslint-disable-next-line react/function-component-definition
const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXNext ? 'x' : '0'}`;

  const handlerSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : '0';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2> {message}</h2>
      <Board board={current.board} handlerSquareClick={handlerSquareClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
