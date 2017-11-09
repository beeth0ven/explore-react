import React from 'react';
import { connect } from 'react-redux';

import LoginContainer from '../../containers/Lambda/LoginContainer';
import LambdaContainer from '../../containers/Lambda/LambdaContainer';

const LambdaApp = ({ isLogin }) => (
  !isLogin ? <LoginContainer/> : <LambdaContainer/>
);

const mapStateToProps = (state) => ({
  isLogin: state.login.isSuccess
});

export default connect(
  mapStateToProps
)(LambdaApp);

