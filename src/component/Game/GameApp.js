import React, { Component } from 'react';
import './GameApp.css'

const Square = ({ value, onClick }) =>
  <button className='square' onClick={onClick}>
    {value}
  </button>;


class Board extends Component {

  constructor() {
    super();
    this.state = {
      squares: new Array(9).fill(null)
    }
  }

  onSquareClick = (i) => {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares })
  };

  renderSquare = (i) =>
    Square({
      value: this.state.squares[i],
      onClick: () => this.onSquareClick(i)
    });

  render() {

    const status = 'Next player: X';

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

const GameApp = () => (
  <div className='game'>
    <div>
      <Board/>
    </div>
    <div className='game-info'>
      <div>Status</div>
      <ol className='game-ol-ul'>TODO</ol>
    </div>
  </div>
);

export default GameApp;