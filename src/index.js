import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import './css/style.css';
import App from "./App";
import TestComponent from "./containers/TestComponent";
import fetchableContainer from "./containers/FetchableContainer";

// import rootReducer from "./reducers/index";

// const store = createStore(
//     rootReducer
//   );

var FetchTest = fetchableContainer({
    url: 'https://jsonplaceholder.typicode.com/posts/',
    errorView: ()=> <div>Custom Error View</div>,
    LoadingView:()=><div>Custom loading</div> ,
    NoConnectionView: ()=> <div>Custom no Connection</div>
})(TestComponent);

ReactDOM.render(
    <FetchTest/>
    ,document.getElementById('root'));


