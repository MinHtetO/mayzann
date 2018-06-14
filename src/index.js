import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/login';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
