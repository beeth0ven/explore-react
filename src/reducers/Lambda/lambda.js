import {
  START_INVOKE_LAMBDA,
  INVOKE_LAMBDA_SUCCESS,
  INVOKE_LAMBDA_FAILED
} from '../../actions/Lambda/lambda';

import {
  INITIAL,
  EXECUTING,
  SUCCESS,
  FAILED
} from './taskState';

const lambda = (state = {
  isExecuting: false,
  isSuccess: false,
  error: undefined,
  taskState: INITIAL
}, action) => {
  switch (action.type) {
    case START_INVOKE_LAMBDA:
      return {
        ...state,
        isExecuting: true,
        taskState: EXECUTING
      };
    case INVOKE_LAMBDA_SUCCESS:
      return {
        ...state,
        isExecuting: false,
        isSuccess: true,
        taskState: SUCCESS
      };
    case INVOKE_LAMBDA_FAILED:
      return {
        ...state,
        isExecuting: false,
        isSuccess: false,
        error: action.error,
        taskState: FAILED
      };
    default:
      return state;
  }
};

export default lambda;