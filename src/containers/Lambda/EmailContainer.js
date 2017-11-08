import { connect } from 'react-redux'
import Email from '../../component/Lambda/Email';
import { changeEmail } from '../../actions/Lambda/lambdas';

const mapStateToProps = (state) => ({
  email: state.email
});

const mapDispatchToProps = {
  onChange: changeEmail
};

const EmailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Email);

export default EmailContainer;