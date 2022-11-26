import React, { useState } from 'react';
import Board from './Components/Board';
import History from './Components/History';
import StatusMessage from './Components/StatusMessage';
import { calculateWinner } from './helpers';

import './style/root.scss';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

// eslint-disable-next-line react/function-component-definition
const App = () => {
  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const { winner, winningSquare } = calculateWinner(current.board);

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

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handlerSquareClick={handlerSquareClick}
        winningSquare={winningSquare}
      />
      <button type="button" onClick={onNewGame}>
        Start new Game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
