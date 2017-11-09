import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css'
import TodoApp from '../Todo/TodoApp'
import LambdaApp from '../Lambda/LambdaApp';
import Counter from "../../containers/Counter/Counter";
import Header from './Header';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import beeth0venApp from '../../reducers/index';


const App = () => {

  const store = createStore(
    beeth0venApp,
    applyMiddleware(logger, thunk)
  );

  const content = (
    <Provider store={store}>
      <Switch>
        <Route path='/' exact render = { () =>
          <Counter/>
        }/>
        <Route path={'/todos'} exact render = { () =>
          <TodoApp/>
        }/>
        <Route path='/lambda' exact render = { () =>
          <LambdaApp/>
        }/>
        <Route component={Counter}/>
      </Switch>
    </Provider>
  );

  return (
    <Router>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Header/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            {content}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

