import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter,Route } from 'react-router-dom'
// import './index.css';
// import App from './App';
import App2 from './App2';
import About from './About'
import * as serviceWorker from './serviceWorker';

const routes = (
    <HashRouter>
        <div>
            <Route path="/" exact component={App2} />
            <Route path="/about" component={About} />
        </div>
    </HashRouter>
);

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
