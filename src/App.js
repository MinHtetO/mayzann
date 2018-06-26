import React, { Component } from 'react';
import Login from './containers/Login';
import Posts from './containers/Posts';
import PostList from './containers/Posts'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import AddPost from './containers/AddPost';
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import PostDetail from "./containers/PostDetail";
import TestComponent from "./containers/TestComponent";
import fetchableContainer from "./containers/FetchableContainer";
import UploadPost from './components/UploadPost';
import { connect } from 'tls';
import {addState} from './actions/index';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
    <Router>
        <Switch>
          <Route exact path = "/" component= {Login} />
          <Route exact path = "/login" component = {Login} />
          <Route exact path = "/posts/:id" component = {Posts} />
          <Route path = "/posts" component= {PostList} />
          <Route path = "/upload" component= {AddPost} />
        </Switch>
        </Router>
     </div>

    );
  }
}

export default App;


