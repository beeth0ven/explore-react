import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  START_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../../actions/Lambda/lambdas';

const lambdaReducer = (state = {
  email: "",
  password: "",
  isLogining: false,
  isLogin: false,
  loginError: undefined
}, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {...state, email: action.email};
    case CHANGE_PASSWORD:
      return {...state, password: action.password};
    case START_LOGIN:
      return {...state, isLogining: true};
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogining: false,
        isLogin: true
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLogining: false,
        isLogin: false,
        loginError: action.error
      };
    default:
      return state;
  }
};

export default lambdaReducer;