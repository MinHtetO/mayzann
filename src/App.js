import React, { Component } from 'react';
import Login from './containers/login';
import Posts from './containers/Posts';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Posts/>
      </div>
    );
  }
}

export default App;
