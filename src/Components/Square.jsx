import React from 'react';

function Square({ value }) {
  console.log(value);

  return <button type="button">{value}</button>;
}

export default Square;
