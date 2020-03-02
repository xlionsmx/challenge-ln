import React from 'react';
import ReactDOM from 'react-dom';
import './site.css';
import * as serviceWorker from './serviceWorker';
import { ArticleGrid } from './pages/ArticleGrid';

ReactDOM.render(<ArticleGrid />, document.getElementById('wrap'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
