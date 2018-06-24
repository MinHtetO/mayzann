import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import './css/style.css';
import {App} from "./App";
import TestComponent from "./containers/TestComponent";
import fetchableContainer from "./containers/FetchableContainer";
import 'antd/dist/antd.css';
// import rootReducer from "./reducers/index";

// const store = createStore(
//     rootReducer
//   );

let FetchTest = fetchableContainer({
    url: 'http://192.178.1.1/get_posts'
})(TestComponent);

ReactDOM.render(
    // <FetchTest/>
    <App/>
    ,document.getElementById('root'));


