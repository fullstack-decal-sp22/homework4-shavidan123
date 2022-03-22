import React from "react";
import './styles/Square.css';
import ReactDOM from "react"


/*function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}*/

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [x, y, z] = lines[i];
      if (squares[x] && squares[x] === squares[y] && squares[y] === squares[z]) {
        return squares[x];
      }
    }
    return null;
  }

export default Square;