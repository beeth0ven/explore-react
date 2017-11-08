import LoginService from '../../service/loginservice';
import LambdaService from '../../service/lambdaservice';

const loginService = new LoginService();
const lambdaService = new LambdaService();

export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const changeEmail = (email) => {
  return {
    type: CHANGE_EMAIL,
    email
  }
};

export const changePassword = (password) => {
  return {
    type: CHANGE_PASSWORD,
    password
  }
};

export const startLogin = () => {
  return {
    type: START_LOGIN
  }
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  }
};

export const loginError = (error) => {
  return {
    type: LOGIN_FAILED,
    error
  }
};

const login = (email, password) => (dispatch) => {
  dispatch(startLogin());
  return loginService.login(email, password)
    .flatMapLatest(lambdaService.updateSSIP)
    .subscribe(
      token => dispatch(loginSuccess()),
      error => dispatch(loginError(error))
    )
};

const shouldLogin = (state) => !state.isLogining;

export const loginIfNeeded = (email, password) => (dispatch, getState) => {
    if (shouldLogin(getState())) {
      dispatch(login(email, password))
    }
};
