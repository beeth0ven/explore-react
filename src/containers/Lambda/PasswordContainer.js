import { connect } from 'react-redux';
import Password from '../../component/Lambda/Password';
import { changePassword } from '../../actions/Lambda/lambdas';

const mapStateToProps = (state) => ({
  password: state.password
});

const mapDispatchToProps = {
  onChange: changePassword
};

const PasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Password);

export default PasswordContainer;