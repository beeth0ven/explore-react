import React from 'react';

const LoginButton = ({ isLogining, disabled, onClick }) => {
  return (
  <div className="text-center">
    <button type='submit' className='btn btn-primary' disabled={disabled} onClick={onClick}>
      {isLogining ? 'Logining...' : 'Login' }
    </button>
  </div>
)};

export default LoginButton;

