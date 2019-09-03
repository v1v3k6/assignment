import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Forms from './Forms';
import * as serviceWorker from './serviceWorker';
//import ReadData from './ReadData';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Forms />, document.getElementById('root'));
//ReactDOM.render(<ReadData />, document.getElementById('content'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
