import React from 'react';
import Email from './Email';
import Password from './Password';
import LoginButton from './LoginButton';
import '../../index.css'


const Login =
  ({
     email,
     password,
     onEmailChange,
     onPasswordChange,
     isLogining,
     loginDisabled,
     onLoginClick
   }) =>
    (
      <div>
        <h4>Login</h4>
        <div className='login'>
          <Email email={email} onChange={onEmailChange}/>
          <Password password={password} onChange={onPasswordChange}/>
          <LoginButton isLogining={isLogining} disabled={loginDisabled} onClick={onLoginClick}/>
        </div>
      </div>
    );

export default Login;