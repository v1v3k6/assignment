import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Content from './Content'
import Header from './Header'
import Footer from './Footer'
import * as serviceWorker from './serviceWorker';

import redBubble from './JsonReader';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Content />, document.getElementById('croot'));
ReactDOM.render(<Header />, document.getElementById('hroot'));
ReactDOM.render(<Footer />, document.getElementById('froot'));
ReactDOM.render(<redBubble />, document.getElementById('redBubble'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
