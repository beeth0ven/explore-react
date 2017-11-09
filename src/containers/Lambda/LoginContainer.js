import React from 'react';
import { connect } from 'react-redux';
import { changeEmail, changePassword, loginIfNeeded } from '../../actions/Lambda/login';
import Login from '../../component/Lambda/Login';

const isButtonEnabled = (state) => {
  return state.email.length > 0
    && state.password.length > 0
    && !state.isExecuting
};

const mapStateToProps = (state) => ({
  email: state.login.email,
  password: state.login.password,
  isExecuting: state.login.isExecuting,
  loginDisabled: !isButtonEnabled(state.login)
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { email, password } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    onEmailChange: (email) => dispatch(changeEmail(email)),
    onPasswordChange: (password) => dispatch(changePassword(password)),
    onLoginClick: () => dispatch(loginIfNeeded(email, password))
  }
};

const LoginContainer = connect(
  mapStateToProps,
  null,
  mergeProps
)(Login);

export default LoginContainer;