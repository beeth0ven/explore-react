import { Observable } from 'rx';

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

export const loginError = () => {
  return {
    type: LOGIN_FAILED
  }
};

// const login = (email, password) => (dispatch) => {
//   dispatch(startLogin());
//   Observable.just(1)
//     .delay(2000)
//     .subscribe(
//       data => dispatch(loginSuccess()),
//       error => dispatch(loginError())
//     )
// };
//
// const shouldLogin = (state) => !state.isLogining;
//
// export const loginIfNeeded = (email, password) => (dispatch, getState) => {
//     if (shouldLogin(getState())) {
//       dispatch(login(email, password))
//     }
// };


export const loginIfNeeded = (email, password) => (dispatch, getState) => {
  dispatch(startLogin());
  return Observable.just(1)
    .delay(2000)
    .subscribe(
      data => dispatch(loginSuccess()),
      error => dispatch(loginError())
    )
};