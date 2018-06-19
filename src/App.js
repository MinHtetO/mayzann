import React, { Component } from 'react';
import Login from './containers/Login';
import Posts from './containers/Posts';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import PostDetail from "./containers/PostDetail";
import TestComponent from "./containers/TestComponent";
import fetchableContainer from "./containers/FetchableContainer";
import UploadPost from './containers/UploadPost';

const store = createStore(
    rootReducer
  );

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Router>
        <Switch>
          <Route exact path = "/" render = {() => (<Login/>)} />
          <Route exact path = "/posts/:id" render ={(props)=> (<PostDetail {...props}/>)}/>
          <Route path = "/posts" render = {() => (<Posts/>)} />
          <Route path = "/upload" render = {() => (<UploadPost/>)} />
        </Switch>
        </Router>
        </Provider>
      </div>

    );
  }
}

export default App;

