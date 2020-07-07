import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
//import Card from './Card.js';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

// these are only atoms, but it's a little bit messy. 
// Instead, we can use a higher class (parents) of atoms.
// parents: CardList, child: Card.
//ReactDOM.render(<CardList robots={robots}/>, document.getElementById('root'));

ReactDOM.render(<App/>, document.getElementById('root'));

/// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
