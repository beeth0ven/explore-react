import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css'
import HTMLApp from '../HTML/HTMLApp';
import TodoApp from '../Todo/TodoApp'
import LambdaApp from '../Lambda/LambdaApp';
import CounterApp from "../Counter/CounterApp";
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
          <h3>Home Page</h3>
        }/>
        <Route path='/html' exact render = { () =>
          <HTMLApp/>
        }/>
        <Route path='/counter' exact render = { () =>
          <CounterApp/>
        }/>
        <Route path={'/todos'} exact render = { () =>
          <TodoApp/>
        }/>
        <Route path='/lambda' exact render = { () =>
          <LambdaApp/>
        }/>
        <Route component={CounterApp}/>
      </Switch>
    </Provider>
  );

  return (
    <Router>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>Beeth0ven</h1>
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

