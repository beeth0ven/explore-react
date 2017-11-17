import React, { Component } from 'react';
import './GameApp.css'

const Square = ({ value, onClick }) =>
  <button className='square' onClick={onClick}>
    {value}
  </button>;

const Board = ({ squares, onSquareClick }) => {

  const renderSquare = (i) =>
    Square({
      value: squares[i],
      onClick: () => onSquareClick(i)
    });

  return (
    <div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
};

class GameApp extends Component {


  constructor() {
    super();
    this.state = {
      history: [
        {
          squares: new Array(9).fill(null),
          xIsNext: true
        }
      ],
      currentIndex: 0
    }
  }

  getCurrentState = () => this.state.history[this.state.currentIndex];
  getNextSymbol = (state) => state.xIsNext ? 'X' : 'O';

  onSquareClick = (i) => {
    const history = this.state.history.slice(0, this.state.currentIndex + 1);
    const lastState = this.getCurrentState();
    const squares = lastState.squares.slice();

    if (this.calculateWinner(squares) || squares[i]) return;
    squares[i] = this.getNextSymbol(lastState);
    const newState = {
      squares,
      xIsNext: !lastState.xIsNext
    };
    this.setState({
      history: history.concat([newState]),
      currentIndex: this.state.currentIndex + 1
    })
  };

  calculateWinner = (squares) => {
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
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  jumpTo = (index) => {
      this.setState({
        currentIndex: index
      })
  };

  render() {

    const history = this.state.history;
    const current = this.getCurrentState();
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((state, index) => {
      const label = index === 0 ? 'Go to game start' : 'Go to move #' + index;
      return (
        <li>
          <button key={index} onClick={() => this.jumpTo(index)}>{label}</button>
        </li>
      )
    });

    const status = (winner)
      ? 'Winner: ' + winner
      : 'Next player: ' + this.getNextSymbol(this.getCurrentState());

    return (
      <div className='game'>
        <div>
          <Board
            squares={this.getCurrentState().squares}
            onSquareClick={this.onSquareClick}
          />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ol className='game-ol-ul'>{moves}</ol>
        </div>
      </div>
    )
  }
}

export default GameApp;