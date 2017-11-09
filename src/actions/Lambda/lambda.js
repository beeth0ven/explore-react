import LambdaService from '../../service/lambdaService';

const lambdaService = new LambdaService();

export const START_INVOKE_LAMBDA = 'START_INVOKE_LAMBDA';
export const INVOKE_LAMBDA_SUCCESS = 'INVOKE_LAMBDA_SUCCESS';
export const INVOKE_LAMBDA_FAILED = 'INVOKE_LAMBDA_FAILED';

export const startInvokeLambda = () => {
  return {
    type: START_INVOKE_LAMBDA
  }
};

export const invokeLambdaSuccess = () => {
  return {
    type: INVOKE_LAMBDA_SUCCESS
  }
};

export const invokeLambdaError = (error) => {
  return {
    type: INVOKE_LAMBDA_FAILED,
    error
  }
};

const shouldInvokeLambda = (state) => !state.lambda.isExecuting;

export const invokeLambdaIfNeeded = () => (dispatch, getState) => {
  if (shouldInvokeLambda(getState())) {
    dispatch(startInvokeLambda());
    lambdaService.updateSSIP()
      .subscribe(
        token => dispatch(invokeLambdaSuccess()),
        error => dispatch(invokeLambdaError(error))
      )
  }
};
