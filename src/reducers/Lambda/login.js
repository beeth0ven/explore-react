import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  START_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../../actions/Lambda/login';

const login = (state = {
  email: "",
  password: "",
  isExecuting: false,
  isSuccess: false,
  error: undefined
}, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {...state, email: action.email};
    case CHANGE_PASSWORD:
      return {...state, password: action.password};
    case START_LOGIN:
      return {...state, isExecuting: true};
    case LOGIN_SUCCESS:
      return {
        ...state,
        isExecuting: false,
        isSuccess: true
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isExecuting: false,
        isSuccess: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default login;
