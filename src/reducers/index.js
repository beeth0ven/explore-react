import { combineReducers } from 'redux';
import counter from './Counter/counter';
import todos from './Todo/todos';
import { visibilityFilter } from './Todo/visibilityFilter';
import login from './Lambda/login';
import lambda from './Lambda/lambda';

const beeth0venApp = combineReducers({
  counter,
  todos,
  visibilityFilter,
  login,
  lambda,
});

export default beeth0venApp;


