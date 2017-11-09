import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import Counter from "../Counter/Counter";
import Header from './Header';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import TodoApp from '../Todo/TodoApp'
import LambdaApp from '../Lambda/LambdaApp';

import beeth0venApp from '../../reducers/index';

class App extends Component {

  constructor() {
    super();

    this.state = {
      isSuccess: false
    }
  }

  componentDidMount() {
  }

  render() {
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
              { this.renderContent() }
            </div>
          </div>
        </div>
      </Router>
    );
  }

  renderContent = () => {
    const store = createStore(
      beeth0venApp,
      applyMiddleware(logger, thunk)
    );

    return (
      <Provider store={store}>
        <Switch>
          <Route path='/' exact render = { () =>
            <Counter/>
          }/>
          <Route path={'/todos'} exact render = { () =>
            <TodoApp/>
          }/>
          <Route path='/lambda' exact render = { () =>
            <LambdaApp />
          }/>
          <Route component={Counter}/>
        </Switch>
      </Provider>

    );
  }
}

export default App;

