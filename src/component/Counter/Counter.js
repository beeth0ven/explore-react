import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Counter.css'
import { CountState } from './CountState';

class Counter extends Component {

  constructor(){
    super();
    this.countState = new CountState();
    this.countAction = this.countState.action;
    this.state = this.countState.initialState;
  }

  componentDidMount() {
    this.countState.system().subscribe(this.setState.bind(this));
  }

  render() {
    return (
      <div className='Counter'>
        <Button bsStyle='primary' bsSize='large' onClick={this.countAction.onIncrease}>+</Button>
        <label className='Counter-label'>{this.state.value}</label>
        <Button bsStyle='primary' bsSize='large' onClick={this.countAction.onDecrease}>-</Button>
      </div>
    );
  }
}

export default Counter;