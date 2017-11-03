import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Counter.css'

class Counter extends Component {

  constructor(){
    super();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='Counter'>
        <Button bsStyle='primary' bsSize='large' onClick={ console.log('onIncreaseClick') }>+</Button>
        <label className='Counter-label'>{0}</label>
        <Button bsStyle='primary' bsSize='large' onClick={ console.log('onDecreaseClick') }>-</Button>
      </div>
    );
  }
}

export default Counter;