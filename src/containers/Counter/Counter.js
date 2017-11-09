import React from 'react';
import { Button } from 'react-bootstrap';
import './Counter.css'
import { connect } from 'react-redux'
import { increase, decrease } from '../../actions/Counter/counter';

const Counter = ({ number, onIncreaseClick, onDecreaseClick }) => (
  <div className='Counter'>
    <Button bsStyle='primary' bsSize='large' onClick={onIncreaseClick}>+</Button>
    <label className='Counter-label'>{number}</label>
    <Button bsStyle='primary' bsSize='large' onClick={onDecreaseClick}>-</Button>
  </div>
);

export default connect(
  (state) => ({ number: state.counter }),
  {
    onIncreaseClick: increase,
    onDecreaseClick: decrease
  }
)(Counter);