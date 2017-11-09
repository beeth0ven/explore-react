import React from 'react';
import { ControlLabel } from 'react-bootstrap';

const Lambda =
  ({
     labelText,
     invokeDisabled,
     onInvokeClick
   }) => (
    <div>
      <h4>Lambda</h4>
      <div className='text-center'>
        <div>
          <ControlLabel>{labelText}</ControlLabel>
        </div>
        <button type='submit' className='btn btn-primary' disabled={invokeDisabled} onClick={onInvokeClick}>
          Invoke
        </button>
      </div>
    </div>
  );

export default Lambda;

