import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import Counter from "../Counter/Counter";
import Header from '../Header/Header';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoApp from '../Todo/TodoApp'
import todoReducer from '../../reducers/todoApp';

class App extends Component {

  constructor() {
    super();

    this.state = {
      isLogin: false
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
    const todoStore = createStore(todoReducer);

    return (
      <Switch>
        <Route path='/' exact render = { () =>
          <Counter/>
        }/>
        <Route path={'/todos'} exact render = { () =>
          <Provider store={todoStore}>
            <TodoApp/>
          </Provider>
        }/>
        <Route path='/lambda' exact render = { () =>
          <div>
            <Counter/>
            <Counter/>
          </div>
        }/>
        <Route component={Counter}/>
      </Switch>
    );
  }
}

export default App;

