import React from 'react';

const LoginButton = ({ isExecuting, disabled, onClick }) => {
  return (
  <div className="text-center">
    <button type='submit' className='btn btn-primary' disabled={disabled} onClick={onClick}>
      {isExecuting ? 'Logining...' : 'Login' }
    </button>
  </div>
)};

export default LoginButton;

