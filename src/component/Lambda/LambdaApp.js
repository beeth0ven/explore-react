import React from 'react';
// import Email from './Email';
import EmailContainer from '../../containers/Lambda/EmailContainer';
// import Password from './Password';
import PasswordContainer from '../../containers/Lambda/PasswordContainer';
// import LoginButton from './LoginButton';
import LoginButtonContainer from '../../containers/Lambda/LoginButtonContainer';
import '../../index.css'

const LambdaApp = () => (
  <div>
    <h4>Login</h4>
    <div className='login'>
      <EmailContainer/>
      <PasswordContainer/>
      <LoginButtonContainer/>
    </div>
  </div>
);

export default LambdaApp;