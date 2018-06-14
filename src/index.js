import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import './css/style.css';
import App from "./App";

import rootReducer from "./reducers/index";

const store = createStore(
    rootReducer
  );

ReactDOM.render(
     <Provider store={store}>
    <App />
</Provider> 
    ,document.getElementById('root'));



