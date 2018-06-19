import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import './css/style.css';
import App from "./App";
import TestComponent from "./containers/TestComponent";
import fetchableContainer from "./containers/FetchableContainer";

// import rootReducer from "./reducers/index";

// const store = createStore(
//     rootReducer
//   );
var FetchTest = fetchableContainer({
    url:"https://jsonplaceholder.typicode.com/posts",
    // loadingView: <div>..Custom Loading..</div>,
    // noConnectionView: <div>.. Custom no connection view .. </div>,
    // errorView: <div>Custom Error View</div>
})(TestComponent);


ReactDOM.render(
    // <FetchTest/>
    <App/>
    ,document.getElementById('root'));


