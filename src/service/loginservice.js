/**
 * Created by Air on 2017/10/13.
 */

import config from './config';
import { Observable } from 'rx';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool
} from 'amazon-cognito-identity-js';
import AWS, { CognitoIdentityCredentials } from 'aws-sdk';
AWS.config.update({ region: config.cognito.REGION });

class LoginService {

  login = (email, password) => {

    return this.getUserToken(email, password)
      .flatMapLatest(this.refreshCredentials)
  };

  getUserToken = (email, password) => {

    return Observable.create(observer =>  this.authenticateUser(email, password, {
      onSuccess: (result) => {
        observer.onNext(result);
        observer.onCompleted();
      },
      onFailure: observer.onError.bind(observer)
    }))
      .map(result => result.getIdToken().getJwtToken());
  };

  refreshCredentials = (userToken) => {
    const authenticator = `cognito-idp.${config.cognito.REGION}.amazonaws.com/${config.cognito.USER_POOL_ID}`;
    const credentials = new CognitoIdentityCredentials({
      IdentityPoolId: config.cognito.IDENTITY_POOL_ID,
      Logins: { [authenticator]: userToken }
    });
    AWS.config.credentials = credentials;
    return Observable.fromPromise(credentials.refreshPromise())
  };

  authenticateUser = (email, password, callback) => {

    const user = new CognitoUser({
      Username: email,
      Pool: this.defaultCognitoUserPool
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    });

    user.authenticateUser(authDetails, callback);
  };

  defaultCognitoUserPool = new CognitoUserPool({
    UserPoolId: config.cognito.USER_POOL_ID,
    ClientId: config.cognito.APP_CLIENT_ID
  });
}

export default LoginService;