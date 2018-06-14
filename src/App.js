import React, { Component } from 'react';
import Login from './containers/login';
import Posts from './containers/Posts';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/' render = {() => (<Login />)} />
          <Route path = '/posts' render = {() => (<Posts />)} />
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
