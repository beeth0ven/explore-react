/**
 * Created by Air on 2017/10/13.
 */

import config from './config';
import AWSLogin from '../framework/AWS/awslogin';

class LoginService {

  login = (email, password) => {
    return this.awsLogin.login(email, password)
  };

  awsLogin = new AWSLogin({
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    clientId: config.cognito.APP_CLIENT_ID
  });
}

export default LoginService;