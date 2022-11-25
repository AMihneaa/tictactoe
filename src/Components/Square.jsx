import React from 'react';

function Square({ value, onClick }) {
  console.log(value);

  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
