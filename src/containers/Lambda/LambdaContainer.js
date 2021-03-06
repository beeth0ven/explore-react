import React from 'react';
import { connect } from 'react-redux';
import Lambda from '../../component/Lambda/Lambda';
import { invokeLambdaIfNeeded } from '../../actions/Lambda/lambda';
import {
  INITIAL,
  EXECUTING,
  SUCCESS,
  FAILED
} from '../../reducers/Lambda/taskState';


const labelText = (lambda) => {
  switch (lambda.taskState) {
    case INITIAL:
      return 'Update SS IP';
    case EXECUTING:
      return 'Invoking...';
    case SUCCESS:
      return 'Invoke Success';
    case FAILED:
      return 'Invoke failed with error ' + lambda.error;
    default:
      return 'Unknown State'
  }
};

const mapStateToProps = (state) => ({
  labelText: labelText(state.lambda),
  invokeDisabled: state.lambda.isExecuting
});

const mapDispatchToProps = (dispatch) => ({
  onInvokeClick: () => { dispatch(invokeLambdaIfNeeded()) }
});

const LambdaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lambda);

export default LambdaContainer;