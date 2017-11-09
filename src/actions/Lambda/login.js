import LoginService from '../../service/loginService';

const loginService = new LoginService();

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

const shouldLogin = (state) => !state.login.isExecuting;

export const loginIfNeeded = (email, password) => (dispatch, getState) => {
    if (shouldLogin(getState())) {
      dispatch(startLogin());
      loginService.login(email, password)
        .subscribe(
          token => dispatch(loginSuccess()),
          error => dispatch(loginError(error))
        )
    }
};
