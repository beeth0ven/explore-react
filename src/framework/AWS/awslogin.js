import { Observable } from 'rx';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool
} from 'amazon-cognito-identity-js';
import AWS, { CognitoIdentityCredentials } from 'aws-sdk';

class AWSLogin {

  constructor
  ({
     region,
     userPoolId,
     identityPoolId,
     clientId
   }) {
    this.region = region;
    this.userPoolId = userPoolId;
    this.identityPoolId = identityPoolId;
    this.clientId = clientId;
    AWS.config.update({ region: region });

    this.defaultCognitoUserPool = new CognitoUserPool({
      UserPoolId: userPoolId,
      ClientId: clientId
    });
  }

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
    const authenticator = `cognito-idp.${this.region}.amazonaws.com/${this.userPoolId}`;
    const credentials = new CognitoIdentityCredentials({
      IdentityPoolId: this.identityPoolId,
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
}

export default AWSLogin;