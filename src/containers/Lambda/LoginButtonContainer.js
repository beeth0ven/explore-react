import { connect } from 'react-redux';
import LoginButton from '../../component/Lambda/LoginButton';
import { loginIfNeeded } from '../../actions/Lambda/lambdas';

const mapStateToProps = (state) => ({
  isLogining: state.isLogining,
  disabled: !(state.email.length > 0 && state.password.length > 0),
  email: state.email,
  password: state.password
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { email, password } = stateProps;
  const { dispatch } = dispatchProps;
  return {
    ...ownProps,
    onClick: () => {
      dispatch(loginIfNeeded(email, password));
    }
  }
};

const LoginButtonContainer = connect(
  mapStateToProps,
  null,
  mergeProps
)(LoginButton);

export default LoginButtonContainer;